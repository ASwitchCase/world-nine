import React from 'react'
import NavBar from '../components/NavBar'
import charsimg from '../images/w9Chars.png'
import Register from '../components/Register.jsx'
const Start = () => {
  return (
    <React.Fragment>
        <NavBar></NavBar>
        <div className='page-container'>
            <div className='welcome-container'>
                <header className='large-header'>Welcome!</header>
                <h1>To World Nine, A place where normal people play games competitively.
                    A community of Gamers who have a life...
                </h1>

                <div className='sign-up-container'>
                    <button>Log In</button>
                    <Register trigger={<button>Sign Up</button>}></Register>
                </div>
            </div>
            <div className='welcome-img-container'>
                <img src={charsimg}></img>
            </div>
        </div>
    </React.Fragment>
    
  )
}

export default Start
