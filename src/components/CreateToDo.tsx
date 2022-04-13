import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDoState } from '../atoms';

interface IForm {
  toDo: string;
}

const CreateToDo = () => {
  const setToDos = useSetRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const category = useRecoilValue(categoryState);
  const onHandleValid = ({ toDo }: IForm) => {
    setToDos(prevToDos => [
      { text: toDo, id: Date.now(), category },
      ...prevToDos,
    ]);
    setValue('toDo', '');
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onHandleValid)}>
        <input
          {...register('toDo', { required: 'Please write a To Do' })}
          placeholder='Write a to do'
        />
        <button type='submit'>Add</button>
      </form>
    </Fragment>
  );
};

export default CreateToDo;
