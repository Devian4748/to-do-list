import { Fragment } from 'react';
import GlobalStyle from './GlobalStyle';
import ToDoList from './components/ToDoList';

const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <ToDoList />
    </Fragment>
  );
};

export default App;
