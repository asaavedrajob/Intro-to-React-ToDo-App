import { useEffect, useState } from "react"
import getToDos from "services/getToDos"
import ToDo from "./ToDo"

export default function ListOfToDos() {
  const [toDos, setToDos] = useState([])

  // (AS) adding [] as the second param of the feature will allow use to trigger the function only once
  useEffect(function () {
    // We will consult the DB to get the ToDo existing elements
    // getToDos.then((toDosArray) => setToDos(toDosArray))
    setToDos(getToDos)
  }, [])

  function newToDo() {
    const newToDos = toDos.concat([{ key: Math.random() }])
    setToDos(newToDos)
  }

  console.info("ListOfToDos:", toDos)

  return (
    <div>
      {toDos.map(({ key, done, text }) => (
        <ToDo key={key} doneProp={done} textProp={text} />
      ))}
      <hr style={{ width: "50%" }} />
      <button type="button" onClick={() => newToDo()}>
        New ToDo
      </button>
    </div>
  )
}
