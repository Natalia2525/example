import './App.css';
import './Todo/TodoList'
import TodoList from './Todo/TodoList';

function App() {

  const todos = [
    {id: 1, completed: false, title: 'купить хлеб'},
    {id: 1, completed: false, title: 'купить масло'},
    {id: 1, completed: false, title: 'купить молоко'}

  ]
  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <TodoList todos={todos}/>
      </div>
    
    )
   
  }

export default App;
