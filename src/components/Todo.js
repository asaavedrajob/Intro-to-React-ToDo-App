import { useEffect, useState } from "react"

export default function Todo({ doneProp, textProp = "Type your ToDo item" }) {
  const donePropAsBoolean = doneProp === "true"

  const [done, setDone] = useState(donePropAsBoolean)
  const [text, setText] = useState(textProp)

  // (AS) we can use this feature, but the problem is that the item renders without properties and once they are assigned, then the submit is triggered when there is no change on the chks or text inputs
  // useEffect(
  //   function () {
  //     console.info("useEffect: Cambio!!", done)
  //     handleSubmit()
  //   },
  //   [done]
  // )

  // (AS) adding [] as the second param of the feature will allow use to trigger the function only once
  useEffect(function () {
    console.log("InitValues:", done, text)
    // We will consult the DB to get the ToDo existing elements
  }, [])

  function handleSubmit(doneVal, textVal) {
    console.log("This is where the submit will happen!", doneVal, textVal)
  }

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
