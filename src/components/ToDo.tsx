import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDoState } from '../atoms';

const ToDo = ({ text, category, id }: IToDo) => {
  const setToDos = useSetRecoilState(toDoState);

  const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos(prev => {
      const findIdx = prev.findIndex(toDo => toDo.id === id);
      if (findIdx !== -1) {
        const front = prev.slice(0, findIdx);
        const back = prev.slice(findIdx + 1);
        const updateToDo = { id, text, category: name as Categories };
        return [...front, updateToDo, ...back];
      }

      return prev;
    });
  };

  const onDeleteHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos(prev => {
      return prev.filter(toDo => toDo.id !== id);
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClickHandler}>
          To Do
        </button>
      )}
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClickHandler}>
          Doing
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClickHandler}>
          Done
        </button>
      )}
      <button onClick={onDeleteHandler}>DELETE</button>
    </li>
  );
};

export default ToDo;
