import React from 'react';
import {useState} from 'react';

function Register() {
    const [user, setUser] = useState("");
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleForm = async (event) => {
        event.preventDefault();
    
        const url = "http://127.0.0.1:8000/register/";
        const data = { username: user,email: email ,password: password, };
    
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
            console.log("Registration successful:", responseData);
            window.location.href ="/";
          } else {
            console.log("Registration failed:", responseData);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const handleButtonClick = () => {
        // Navigate to another page
        window.location.href ="/";
      };


  return (

    <>
      <div className="App">
          <form onSubmit={handleForm}>
            <input type="text"  onChange={(e) => setUser(e.target.value)} placeholder='Username' required/>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='Email'required/>
            <input
              type="password"
              placeholder='Password'
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
    </div>
    <button  onClick={handleButtonClick}>Login</button>
    </>
  )
}

export default Register
