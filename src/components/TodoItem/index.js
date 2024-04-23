import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const uniqueId = todoItem.id

  const onDeleteTodoItem = () => {
    deleteTodo(uniqueId)
  }

  return (
    <li className="todoItemStyle">
      <p className="paraStyle">{todoItem.title}</p>
      <button type="button" onClick={onDeleteTodoItem} className="buttonStyle">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
