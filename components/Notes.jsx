import React, { useState, useEffect } from 'react';
import AddNote from './AddNote';
import UpdateNote from './UpdateNote';
import DeleteNote from './DeleteNote';
import Home from './Home';

function Notes(props) {
  const [user, setUser] = useState('');
  const [notes, setNotes] = useState([]);

  //useState's which will help in routing:
  const [addingNote, setAddingNote] = useState(false);
  const [DeletingNote, setDeletingNote] = useState('');
  const [updatingNote, setUpdatingNote] = useState('');
  //Logout
  const [logout,setLogout] = useState(false);


  useEffect(() => {
    setUser(props.user);

    const handleNotes = async () => {
      const url = 'http://127.0.0.1:8000/notes/';
      const data = { username: props.user };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (response.ok) {
          const newNotes = responseData.Notes.map((note) => ({
            id: note.id,
            title: note.title,
            note: note.note,
            dateCreated: note.dateCreated,
            user: note.user,
          }));

          setNotes(newNotes);
          console.log('Array updated successfully');
        } else {
          console.log(user);
          console.log('Error in Fetching: ', responseData);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    handleNotes();
  }, [props.user, user]);

  //Functions for Handling all button Events:
  const handleAddNote = () => {
    setAddingNote(true);
  };

  const handleUpdateNote = (title) => {
    setUpdatingNote(title);
  };

  const handleDeleteNote = (title) => {
    // Perform deletion logic here
    setDeletingNote(title);
  };

  const loggingout = ()=>{
    setLogout(true);
  }

  //Routing to Different Components
  if (addingNote) {
    return <AddNote user={props.user} />;
  }

  if (updatingNote) {
    return <UpdateNote user={props.user} title={updatingNote} />;
  }

  if(DeletingNote){
    return <DeleteNote user={props.user} title={DeletingNote} />;
  }

  if(logout){
    return <Home/>
  }

  return (
    <div>
      HIII {props.user}    <button onClick={loggingout}>Logout</button>
      <br />
      <h1>Notes</h1>
      <button onClick={handleAddNote}>Add Note</button>
      {notes.length > 0 ? (
        <ol>
          {notes.map((note) => (
            <div key={note.id}>
              <li>
                <h3>{note.title}</h3>
                <p>{note.note}</p>
              </li>
              <button onClick={() => handleUpdateNote(note.title)}>Update</button>
              <button onClick={() => handleDeleteNote(note.title)}>Delete</button>
            </div>
          ))}
        </ol>
      ) : (
        <p>No notes found.</p>
      )}
    </div>
  );
}

export default Notes;
