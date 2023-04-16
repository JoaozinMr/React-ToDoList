export const Task = props => {
  return (
    <div
      className="task"
      style={{
        backgroundColor: props.completed ? 'lightgreen' : 'white'
      }}
    >
      <h1>{props.taskName}</h1>
      <button className="complete" onClick={() => props.completeTask(props.id)}>
        Completada
      </button>
      <button className="delete" onClick={() => props.deleteTask(props.id)}>
        X
      </button>
    </div>
  )
}
