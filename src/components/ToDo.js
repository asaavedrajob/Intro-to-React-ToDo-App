import { useEffect, useState } from "react"
import "components/ToDo.css"

export default function ToDo({ key, doneProp, textProp }) {
  const doneAsBoolean = doneProp === undefined ? false : doneProp

  const [done, setDone] = useState(doneAsBoolean)
  const [text, setText] = useState(textProp)

  // (AS) we can use this feature, but the problem is that the item renders without properties and once they are assigned, then the submit is triggered when there is no change on the chks or text inputs
  useEffect(
    function () {
      console.info("useEffect done: Cambio!!", done)
      handleSubmit()
    },
    [done]
  )

  useEffect(
    function () {
      console.info("useEffect text: Cambio!!", text)
      handleSubmit()
    },
    [text]
  )

  const handleSubmit = () => {
    console.log("This is where the submit will happen!", done, text)
  }

  const handleKeyPress = () => {
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  const handleBlur = () => {
    setText((prevText) => {
      console.info({ prevText })
      // useEffect text will never be trigger do to the text has not changed by
      // just blur the text input
      return event.target.value
    })
  }

  return (
    <div className="todo-box display-flex margin-bottom-4">
      <label>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            setDone(!done)
          }}
        />
        <span></span>
      </label>
      <div className="input-field inline width-100">
        <input
          type="text"
          value={text}
          placeholder={
            text === undefined || text === "" ? "Type your ToDo item" : ""
          }
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
          className={done ? "done" : "not-done"}
        />
      </div>
    </div>
  )
}
