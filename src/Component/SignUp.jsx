import React from 'react'
import { Link } from 'react-router-dom';
import './SignUp.css'

function SignUp() {
  return (
    <div className="parentbox" style={{backgroundImage:`url(https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg)`}}>
      <div className="container parent">
        <div className="main">
          <input type="checkbox" id="chk" />
          <div className="signup">
            <form action="">
              <label id="head" htmlFor="chk">
                Sign up
              </label>
              <input
                className="input"
                type="text"
                placeholder="User name"
                required=""
                
              />
              <input
                className="input"
                type="email"
                placeholder="Email"
                required=""
                
              />
              <input
                className="input"
                type="password"
                placeholder="password"
                required=""
                
              />
              <button id="Lbutton" className="Sbutton" >
                Sign up
              </button>
              <p id="new">
                Already have an account ? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp