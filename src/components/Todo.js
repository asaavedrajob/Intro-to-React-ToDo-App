import { useEffect, useState } from "react"
import "./ToDo.css"

export default function ToDo({ doneProp, textProp }) {
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

  function handleSubmit() {
    console.log("This is where the submit will happen!", done, text)
  }

  function handleKeyPress() {
    if (event.key === "Enter") {
      handleSubmit()
    }
  }

  return (
    <div className="todo">
      <span>
        <input
          type="checkbox"
          checked={done}
          onChange={() => {
            setDone(!done)
          }}
        />
        <input
          type="text"
          value={text}
          placeholder={
            text === undefined || text === "" ? "Type your ToDo item" : ""
          }
          onChange={(e) => setText(e.target.value)}
          onKeyPress={() => handleKeyPress()}
          className={done ? "done" : "not-done"}
        />
      </span>
    </div>
  )
}
