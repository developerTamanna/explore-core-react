
import './App.css'
// import ToDo from './todo';
import Teacher from './teacher';
function App() {
  // const time = 50
   const teachers = ['sathi', 'lima', 'ruba']
  return (
    <> 
      <h1>React core concept</h1>


   
     {
      teachers.map((teacher, index) => <Teacher key = {index} teacher={teacher}></Teacher>)
     }


      {/* <ToDo task ="learn react" isDone={true} time={time}>
        
      </ToDo>
      <ToDo task ="revise js" isDone={false}>
        
      </ToDo>
      <ToDo task ="Take a shower" isDone={true} time={100}>
        
      </ToDo> */}

    {/* <Student></Student>
    <Student></Student>
    <Person></Person>
    <Developer ins="Sylhet polytechnic institute" name="Tamanna" tech="Js"></Developer>
    <Developer ins="Leading University Sylhet" name="Lima" tech="Python"></Developer>
    <Developer ins="Dhaka Engineering University" name="Ruba" tech="React"></Developer>
   <Electric></Electric>
    <Device name="i phone" price="20000" color="black" brand="apple">
      
       </Device>
    <Device name="samsung" price="3000" color="gold" brand="smsng">
      
       </Device>
    <Device name="readmy" price="90000" color="green" brand="readmy">
      
       </Device>

       <Player name="Shakib" runs="4000" country="Bangladesh">

       </Player>
       <Player name="Mussi" runs="5000" country="Bangladesh">

       </Player>

       <Salami event="Roja Eid" amount="300000"></Salami>
       <Salami event="Graduation"></Salami> */}
    </>

  )
}






function Salami({event, amount=0}){
  return(
    <div className='student'>
     <p>Salaami for: {event}</p>
     <p>amount: {amount}</p>
    </div>
  )
}






// const ply = {name: 'Shakib', runs: '4000'}

function Player({name, runs, country}){
  // console.log(ply)
  return(
    <div className='student'>
         <h3>Name: {name}</h3>
         <p>Runs: {runs}</p>
         <p>Country: {country}</p>
    </div>
  )
}











function Developer(props){
  console.log(props)
  return(
    <div style={{
      padding: '5px',
       color: 'purple',
       fontSize: '20px',
       border: '2px solid blue',
       borderRadius: '10px',
       marginTop: '10px'
    }}>

      <h2>Institute: {props.ins} </h2>
      <h3>Developer: {props.name}</h3>
      <p>Technology: {props.tech}</p>
    </div>
  )
}


function Electric(){
  return(
    <h2>electric device</h2>
  )
}

function Device(device){
  console.log(device)
  return(
    
    <>
    
    <div style={{
      border:'2px solid red',
      color: 'green',
      padding: '5px',
      borderRadius: '7px',
      marginTop: '7px'
    }}>
      <h3>Name: {device.name}</h3>
      <h3>Price: { device.price}</h3>
      <h3>Color: {device.color}</h3>
      <h3>Brand: {device.brand}</h3>
    </div>
    </>
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
