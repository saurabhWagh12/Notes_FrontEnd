import React from 'react'
import {useState} from 'react'
import Notes from './Notes';

function Home() {
  
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [using,setUsing] = useState();

    
    const handleForm = async (event) => {
      event.preventDefault();
  
      const url = "http://127.0.0.1:8000/login/";
      const data = { username: user, password: password };
  
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
          console.log("Authentication successful:", responseData);
          //Taking user to home page to see his notes:
          setUsing(user)
          // window.location.href ="/getNotes?using=" + user;
          
        } else {
          console.log("Authentication failed:", responseData);
        }
      } catch (error) {
        console.error("Error:", error);
      }


    };

    const handleButtonClick = () => {
        // Navigate to another page
        window.location.href ="/register/";
      };

        // Render the Notes component when user is set
  if (using) {
    return <Notes user={using} />;
  }
  
    return (
      <>
        <div className="App">
          <form onSubmit={handleForm}>
            <input type="text" placeholder='Username' onChange={(e) => setUser(e.target.value)} required/>
            <input
              type="password"
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>

          <button onClick={handleButtonClick}>Register</button>
        </div>
      </>
    )
  
}


export default Home
