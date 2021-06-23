// import logo from "./logo.svg"
import "App.css"
import Todo from "components/Todo"

function App() {
  return (
    <div>
      <h1>React ToDo App</h1>
      <Todo doneProp="true" textProp="ToDo 1" />
      <Todo doneProp="false" />
    </div>
  )
}

export default App
