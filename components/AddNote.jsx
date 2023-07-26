import React from 'react'
import { useState,useEffect } from 'react'
import { useLocation,useNavigate} from 'react-router-dom';
import Notes from './Notes';

function AddNote(props) {
    // const location = useLocation();
    // const params = new URLSearchParams(location.search);
    // const using = params.get('using');
    const [user,setUser] = useState();
    const [using,setUsing] = useState();


    //local form data handling
    const [title,setTitle] = useState();
    const [note,setNote] = useState();


    useEffect(()=>{
        setUser(props.user);
    },[]);

    const handleForm = async (event) => {
        event.preventDefault();
    
        const url = "http://127.0.0.1:8000/addNote/";
        const data = { username: user,title:title ,note: note, };
    
        try {
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
          });
    
          const responseData = await response.json();
    
          // Check the status code and response data
          if (response.ok) {
            // console.log("Authentication successful:", responseData);
            // window.location.href ="/getNotes?using=" + user;
            setUsing(props.user)
          } else {
            console.log("Authentication failed:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      if(using){
        return <Notes user={props.user}/>
      }

  return (
    <div>
        HIII {user}
        <br/>
        <br/>

        <form onSubmit={handleForm}>
            <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
            <br/>
            <textarea onChange={(e)=>setNote(e.target.value)}/>
            <br/>
            <button type='submit'>Submit</button>

        </form>

    </div>
  )
}

export default AddNote
