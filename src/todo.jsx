// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }

// export default function ToDo({task, isDone}){
//     if(isDone===true){
//         return <li>Done: {task}</li>
//     }
//     else{
//         return <li>Do now: {task}</li>
//     }
// }
// export default function ToDo({task, isDone, time =0}){
//     if(isDone===true){
//         return <li>Done: {task} time: {time}</li>
//     }
//     return <li>to be done: {task}</li>
// }


//*conditional rendering: 3*//  trnry

// ** condition ? true:false//

// export default function ToDo({task, isDone, time =0}){
// return isDone ? <li>Done:{task} time: {time} </li> : <li>To be done {task}</li> 
// }



// ** conditional rendering : 4  &&//

// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>done: {task} time:{time}</li>
// }


// ** conditional rendering : 4  ||  .....

// export default function ToDo({task, isDone, time = 0}){
//     return isDone || <li> not done task: {task} time:{time}</li>
// }

// ** conditional rendering : 6 use variable
// export default function ToDo({task, isDone, time}){
//     if(isDone===true){
//         return null
//     }
//     else{
//         return <li>pending: {task} time: {time}</li>
//     }
// }
// export default function ToDo({task, isDone, time}){
//     let listItem ;
//     const displayTime = time ? time :100;
//     if(isDone===true){
//         listItem = <li>Done: {task}</li>
//     }
//     else{
//         listItem = <li>pending: {task} time: {displayTime}</li>
//     }
//     return listItem
// }