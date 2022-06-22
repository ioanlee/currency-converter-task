import { Todo } from './Todo'

interface props {
  text: string
}

export const TodoList:React.FC<props> = (props) => {
  return (
    <div>
      {props.text}
      
    </div>
  )
}