import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../firestore";
import { AuthContext } from "./Auth.js";
import { Link } from "react-router-dom";


const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      
      
      

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");

    
      } catch (error) {
        alert(error);
      }
    },
    [history]

  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
    <div className= "col-10 mx-auto col-lg-2" >
      <h1>Log in</h1>
    </div>
    
      <form onSubmit={handleLogin}>
        <div className= "col-10 mx-auto col-lg-2" >
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        </div>
        <div className= "col-10 mx-auto col-lg-2" >
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        </div>
        <div className= "col-10 mx-auto col-lg-2" >
        <button type="submit" className="btn btn-outline-danger text-uppercase mb-3 px-5"
                  >Log in</button>
       </div>
       <div className= "col-10 mx-auto col-lg-2" >

        <Link to='signup'>
          <button
           className="btn btn-outline-danger text-uppercase mb-3 px-5"
           type="button"  > signup 
            </button>


        </Link>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);