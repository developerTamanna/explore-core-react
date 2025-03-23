
import './App.css'

function App() {

  return (
    <> 
      <h1>Vite + React</h1>
      <Pet></Pet>
      <Sports></Sports>
       <Person></Person>
       <Person></Person>
       <Person></Person>
      <Sports></Sports>
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

function Sports(){
  return(
    <div>
      <h3>Cricket</h3>
      <ul>
        <li>Banana</li>
        <li>Orange</li>
      </ul>
      <p>playing and losing</p>
    </div>
  )
}


function Pet(){
  return(
    <h3>catty</h3>
  )
}
export default App
