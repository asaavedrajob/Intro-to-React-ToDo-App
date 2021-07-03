import { useEffect, useState } from "react"

export default function ChkElement({ doneProp }) {
  const [done, setDone] = useState(doneProp)

  useEffect(
    function () {
      console.info("(ChkElement) useEffect done: Cambio!!", done)
      handleSubmit()
    },
    [done]
  )

  const handleSubmit = () => {
    console.log("(ChkElement) This is where the submit will happen!", done)
  }

  return (
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
  )
}
