import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store"


import API from "../constants";

export default function Login() {
  const [formValue, setFormValue] = useState({ email: "", password: "", });
  const [rememberMe, setRememberMe] = useState(false);

  const isAlreadyLogged = JSON.parse(localStorage.getItem("token")) 
 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (isAlreadyLogged) getProfile(isAlreadyLogged);
   }, []);

  const handleInput = (e) => {
    const { name, value, } = e.target;
    setFormValue({ ...formValue, [name]: value })

  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetch(`${API}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((res) => { 
        getProfile(res.body.token);
      });   
  }

  const getProfile = (token) => {
    console.log(token)
    fetch(`${API}/user/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        const data = {token : token, ...res.body}
        dispatch(login(data));
        
        if (rememberMe) localStorage.setItem('token', JSON.stringify(data.token))
        
        navigate("/profile");
      });
  }

 

     return (
       <main className="main bg-dark">
         <section className="sign-in-content">
           <i className="fa fa-user-circle sign-in-icon"></i>
           <h1>Sign In</h1>
           <form onSubmit={handleFormSubmit}>
             <div className="input-wrapper">
               <label htmlFor="username">Username</label>
               <input
                 type="email"
                 id="username"
                 name="email"
                 onChange={handleInput}
                 value={formValue.email}
               />
             </div>
             <div className="input-wrapper">
               <label htmlFor="password">Password</label>
               <input
                 type="password"
                 name="password"
                 id="password"
                 value={formValue.password}
                 onChange={handleInput}
               />
             </div>
             <div className="input-remember">
               <input
                 type="checkbox"
                 id="remember-me"
                 onChange={() => {
                   setRememberMe(!rememberMe);
                 }}
               />
               <label htmlFor="remember-me">Remember me</label>
             </div>
             <button type="submit" className="sign-in-button">
               Sign In
             </button>
           </form>
         </section>
       </main>
     );
}
