import { useEffect, useState } from "react"
import "components/ListOfToDos.css"
import getToDos from "services/getToDos"
import ToDo from "components/ToDo"

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
    <div className="card">
      <div className="card-image">
        <img src="/sample-1.jpeg" />
        <button
          className="btn-floating halfway-fab waves-effect waves-light red"
          onClick={newToDo}
        >
          <i className="material-icons">add</i>
        </button>
      </div>
      <div className="card-content">
        <span className="card-title">React ToDo App (Dev)</span>
        <hr className="margin-bottom-4" />
        {toDos.map(({ key, done, text }) => (
          <ToDo key={key} doneProp={done} textProp={text} />
        ))}
      </div>
    </div>
  )
}
