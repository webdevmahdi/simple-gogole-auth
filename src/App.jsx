import app from '../firebase.init'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

let auth = new getAuth(app);

function App() {
  let provider = new GoogleAuthProvider();
  let signInGogole = () => {
    signInWithPopup(auth, provider)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  }
  return (
      <div>
        <button onClick={signInGogole}>Sign in</button>
      </div>
  )
}

export default App
