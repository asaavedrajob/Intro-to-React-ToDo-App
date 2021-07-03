import "components/ToDo.css"
import ChkElement from "components/ChkElement"
import InputElement from "components/InputElement"

export default function ToDo({ done, text }) {
  return (
    <div className="todo-box display-flex margin-bottom-4">
      <ChkElement doneProp={done} />
      <InputElement textProp={text} done={done} />
    </div>
  )
}
