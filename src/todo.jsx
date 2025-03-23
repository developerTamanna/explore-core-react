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
export default function ToDo({task, isDone, time =0}){
    if(isDone===true){
        return <li>Done: {task} time: {time}</li>
    }
    return <li>to be done: {task}</li>
}