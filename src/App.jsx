
import './App.css'

function App() {

  return (
    <> 
      <h1>Vite + React</h1>
       <Person></Person>
       <Person></Person>
       <Person></Person>
    </>

  )
}
function Person(){
  const age = 15;
  const name = "sathi"
  return(
    <p>i m a person . my name is  {name} , and my age:{age}</p>
  )
}

export default App
