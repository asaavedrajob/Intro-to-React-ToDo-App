import { useState } from "react"

export default function Todo({ doneProp, textProp = "Type your ToDo item" }) {
  const donePropAsBoolean = doneProp === "true"

  const [done, setDone] = useState(donePropAsBoolean)
  const [text, setText] = useState(textProp)

  function handleSubmit(doneVal, textVal) {
    console.info("handleSubmit Done:", doneVal)
    console.info("handleSubmit Text:", textVal)
  }

  console.log("A:", done, text)

  return (
    <div className="todo">
      <span>
        <input
          type="checkbox"
          checked={done}
          onClick={() => {
            setDone(!done)
            handleSubmit(!done, text)
          }}
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onBlur={() => handleSubmit(done, text)}
        />
      </span>
    </div>
  )
}
