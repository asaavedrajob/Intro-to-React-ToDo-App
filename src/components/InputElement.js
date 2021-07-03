import { useEffect, useState } from "react"

export default function InputElement({ textProp, done }) {
  const [text, setText] = useState(textProp)

  useEffect(
    function () {
      console.info("(InputElement) useEffect text: Cambio!!", text)
      handleSubmit()
    },
    [text]
  )

  const handleSubmit = () => {
    console.log("(InputElement) This is where the submit will happen!", text)
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
  )
}
