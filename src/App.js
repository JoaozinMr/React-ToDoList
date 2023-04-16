import './App.css'
import { useState } from 'react'
import { Task } from './Task'

function App() {
  const [todoList, setTodoList] = useState([])
  const [novaTarefa, setNovaTarefa] = useState('')

  const handleInputChange = event => {
    setNovaTarefa(event.target.value)
  }

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: novaTarefa,
      completed: false
    }
    setTodoList([...todoList, task])
  }

  const completeTask = id => {
    setTodoList(
      todoList.map(task => {
        if (task.id === id) {
          return { ...task, completed: true }
        } else {
          return task
        }
      })
    )
  }

  const deleteTask = Id => {
    setTodoList(todoList.filter(task => task.id !== Id))
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange} />
        <button onClick={addTask}>Adicionar tarefa</button>
      </div>
      <div className="list">
        {todoList.map(task => {
          return (
            <Task
              taskName={task.taskName}
              id={task.id}
              deleteTask={deleteTask}
              completeTask={completeTask}
              completed={task.completed}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
