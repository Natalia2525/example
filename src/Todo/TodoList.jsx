import React from 'react'
import './Todoitem'
import Todoitem from './Todoitem'

const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }
  
  function TodoList(props) {
    return (
      <ul style={styles.ul}>
          {props.todos.map((todo, index)=>{
              return <Todoitem todo={todo} key={todo.id} index={index}/>
          })}
          </ul>
    )
  }
  

  export default TodoList