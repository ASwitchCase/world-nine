import React, { useState } from 'react'
import Popup from 'reactjs-popup';

const Register = (props) => {
  const[email,setEmail] = useState();
  const sendConf = (e,close)=>{
    e.preventDefault();
    close()
    alert("lets pretend something happened  (:")
    }
return (
  <Popup trigger={props.trigger} modal>
    {close => (
      <div>
        <a className="close" onClick={close}>
          &times;
        </a>
        <header className='med-large-header'>Create Account</header>
        <hr></hr>
        <form>
          <label>First Name</label>
          <input placeholder='John'></input>
          <label>Last Name</label>
          <input placeholder='Doe'></input>
          <label>Email</label>
          <input onChange={(e) => setEmail(e.target.value)} placeholder='jdoe@gmail.com'></input>
          <button onClick={(e) => sendConf(e,close)}>Submit</button>
        </form>
      </div>
    )}
  </Popup>
);
}

export default Register;