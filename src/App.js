// import logo from "./logo.svg"
import "App.css"
import ListOfToDos from "components/ListOfToDos"
import "materialize-css/dist/css/materialize.min.css"

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 offset-m3 m6">
          <ListOfToDos />
        </div>
      </div>
    </div>
  )
}

export default App
