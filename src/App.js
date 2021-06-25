// import logo from "./logo.svg"
import "App.css"
import ListOfToDos from "components/ListOfToDos"
import "materialize-css/dist/css/materialize.min.css"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col m12 offset-l3 l6">
          <ListOfToDos />
        </div>
      </div>
    </div>
  )
}

export default App
