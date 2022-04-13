import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const ToDoList = () => {
  const toDoArr = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as Categories);
  };

  useEffect(() => {
    localStorage.setItem('toDoArr', JSON.stringify(toDoArr));
  }, [toDoArr]);

  return (
    <div>
      <h1>To Do List</h1>
      <select onChange={onChangeHandler} value={category}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDoArr.map(toDo => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
      <hr />
    </div>
  );
};

export default ToDoList;
