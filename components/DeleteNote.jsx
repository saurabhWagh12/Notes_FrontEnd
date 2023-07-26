import React from 'react';
import { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
import Notes from './Notes';

function DeleteNote(props) {
  // const location = useLocation();
  // const params = new URLSearchParams(location.search);
  // const using = params.get('using');
  // const prev = params.get('prevtit');
  // const [user, setUser] = useState("");
  // const [prevTit, setPrevtit] = useState("");

  // useEffect(() => {
  //   setUser(using);
  //   setPrevtit(prev);
  // }, [using, prev]);

  const [done,setDone] = useState(false);

  useEffect(() => {
    const handleForm = async () => {
      const url = "http://127.0.0.1:8000/deleteNote/";
      const data = { username: props.user, title: props.title };

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
          console.log("Authentication successful:", responseData);
          setDone(true);
        } else {
          console.log("Authentication failed:", responseData);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    handleForm();
  },[]);
  if(done){
    return <Notes user={props.user}/>
  }

  return <div></div>;
}

export default DeleteNote;

