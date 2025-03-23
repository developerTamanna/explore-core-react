
import './App.css'

function App() {

  return (
    <> 
      <h1>React core concept</h1>

    <Student></Student>
    <Student></Student>
    <Person></Person>
    <Developer name="Tamanna" tech="Js"></Developer>
    <Developer name="Lima" tech="Python"></Developer>
    <Developer name="Ruba" tech="React"></Developer>
    </>

  )
}


function Developer(props){
  console.log(props)
  return(
    <div style={{
       color: 'purple',
       fontSize: '20px',
       border: '2px solid blue',
       borderRadius: '10px',
       marginTop: '10px'
    }}>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}





function Person(){
  const age = 15;
  const name = "sathi"
  const PersonStyle ={
     color:'red',
     fontSize:'20px',
     textAlign: 'right', 

  }
  return(
    <p style={PersonStyle}>I m a person . my name is  {name} , and my age is:{age}</p>
  )
}

function Student(){
  return(
    <div className='student' >
      <p>Name:</p>
      <p>Dep:</p>
    </div>
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
