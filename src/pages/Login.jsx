import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../constants";

export default function Login() {
  const [formValue, setFormValue] = useState({ email: "", password: "", });
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();
 

  const handleInput = (e) => {
    const { name, value, } = e.target;
    setFormValue({ ...formValue, [name]: value })

  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    fetch(`${API}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValue),
    })
      .then((res) => res.json())
      .then((res) => { 
        console.log(res.body.token)
        getProfile(res.body.token);
        // navigate("/profile");
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
        const data = res.body
        console.log(data);
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
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          {/* <a href="./user.html" className="sign-in-button">
            Sign In
          </a> */}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}
