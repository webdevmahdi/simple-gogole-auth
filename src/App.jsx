import { useState } from 'react';
import app from '../firebase.init'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';

let auth = new getAuth(app);

function App() {
  let [user, setUser] = useState({});
  let provider = new GoogleAuthProvider();
  let signInGogole = () => {
    signInWithPopup(auth, provider)
    .then(result => {
      let user = result.user;
      setUser(user)
      console.log(result)
    })
    .catch(error => console.log(error));
  }
  let signOutAccount = () => {
    signOut(auth)
    .then(result => setUser({}))
    .catch(error => console.log(error))
  }
  return (
      <div>
        {
          user.uid ? <button onClick={signOutAccount}>Sign out</button> : <button onClick={signInGogole}>Sign in</button>
        }
        
        <h1>Name: {user.displayName}</h1>
        <img src={user.photoURL} />
      </div>
  )
}

export default App
