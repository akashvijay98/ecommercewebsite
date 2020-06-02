import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../firestore";
import { Link } from "react-router-dom";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (

    <div>
    <div className= "col-10 mx-auto col-lg-2" >
      <h1>Sign up</h1>
    </div>

      
      <form onSubmit={handleSignUp}>

  
      
            <div className= "col-10 mx-auto col-lg-2"  >
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        </div>
      
       
        <div className= "col-10 mx-auto col-lg-2" >
        
        <label >
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>

        </div>
       

     

        <div className= "col-10 mx-auto col-lg-2" >
        <button 
         className="btn btn-outline-danger text-uppercase mb-3 px-5"
         
        type="submit">Sign Up</button>
        
        </div>
   
     
        <div className= "col-10 mx-auto col-lg-2" >
       <Link to="">
         <button
          className="btn btn-outline-danger text-uppercase mb-3 px-5"
          > Login </button>
         </Link>
         </div>

        
      
      </form>

   
    </div>
    
      
  );
};

export default withRouter(SignUp);