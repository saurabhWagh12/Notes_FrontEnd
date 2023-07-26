// import logo from './logo.svg';
// import { useState } from 'react';
// // import Count from './components/Count'

// function App() {

//   const [message,setMessage] = useState("Hiiii");
//   const [count,setCount] = useState(0);

//   // function incrementCount(){
//   //   if(count>4){
//   //     setCount(0);
//   //     return;
//   //   }else
//   //     setCount(count+1);
//   // }

//   function handleClick(){
//       if(message==="Hiiii"){
//         setMessage("Byeee");
//       }else{
//         setMessage("Hiiii");
//       }
//   }

//   //Simple todo listing app
//   const [task,setTask] = useState([])
//   const [newTodo, setNewTodo] = useState('')

//   function addTODO(){
//     if(newTodo.trim() !== ''){ //for checking if string is not empty
//       setTask([...task,newTodo])
//       setNewTodo('')
//     }
//     console.log(task)
//   }

//   function remove(index){
//     const updated = task.filter((_,i)=>i !== index);
//     setTask(updated)
//   }

//   function update(index){
    
//   }

//   return (
//     <>
//    <h1>Hello World</h1>
//    <h1>{message}</h1>
//    {/* <h1>{count}</h1> */}
//     <button onClick={()=>handleClick()}>Handle</button>
//     {/* <button onClick={()=>incrementCount()}>count</button> */}
//     {/* <Count/> */}


//     <div>
//       {/* <form action=""> */}
//         <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder='Enter To Do'/>
//         <button type="submit" onClick={()=>addTODO()}>Add</button>
//       {/* </form> */}


//       <ol>
//         {task.map((todo,index)=>(
//             <li key={index}>
//               {todo}
//               <button onClick={()=>update(index)}>Update</button>
//               <button onClick={()=>remove(index)}>Delete</button>
//             </li>
//         ))}
//       </ol>
      

//     </div>

//   </>);
// }

// export default App;



// import { useState, useEffect } from "react";
// export default function App() {
//   const [user, setUser] = useState("");
//   const [password, setPassword] = useState("");

//   const handleForm = async (event) => {
//     event.preventDefault();

//     const url = "http://127.0.0.1:8000/login/";
//     const data = { username: user, password: password };

//     try {
//       const response = await fetch(url, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(data)
//       });

//       const responseData = await response.json();

//       // Check the status code and response data
//       if (response.ok) {
//         console.log("Authentication successful:", responseData);
//       } else {
//         console.log("Authentication failed:", responseData);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleForm}>
//         <input type="text" onChange={(e) => setUser(e.target.value)} />
//         <input type="password" onChange={(e) => setPassword(e.target.value)} />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

import React from 'react';
import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Register from './components/Register';
import Notes from './components/Notes';
import AddNote from './components/AddNote';
import UpdateNote from './components/UpdateNote';
import DeleteNote from './components/DeleteNote';

export default function App() {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register/" element={<Register />} />
        {/* <Route path="/getNotes/" element={<Notes />} /> */}
        {/* <Route path="/addNotes/" element={<AddNote />} /> */}
        {/* <Route path="/updateNotes/" element={<UpdateNote />} /> */}
        {/* <Route path="/deleteNotes/" element={<DeleteNote />} /> */}
        
      </Routes>
    </Router>
    </>
  );


}

