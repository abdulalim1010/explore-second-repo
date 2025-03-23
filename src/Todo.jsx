/* export default function Todo({task,isDone}) {
  return (
    <li>Task { task}</li>
  )
} */
/* export default function ToDo({ tasl, isDone }) {
  
  if (isDone === true) {
    
  
    return <li>Done;{task}</li>
  }
  else {
    return <li>pending{ task}</li>
  }
  
} */

export default function ToDo({ task, isDone ,time=0}) {
  
  if (isDone === true) {
    
  
    return <li>Done;{task}duration { time}</li>
  }
  return <li>tobe done{ task}</li>
  
}