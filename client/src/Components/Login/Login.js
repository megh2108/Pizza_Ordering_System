import React from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'

function Login() {
    return (
        <>
            <section class="w3l-hotair-form">

                <div className="container">

                    <div className="workinghny-form-grid">
                        <div className="main-hotair">
                            <div className="content-wthree">
                                <h2>Log In</h2>
                                <form  method="post">
                                    <input type="email" className="email" name="email" placeholder="Enter email iD" required="" autofocus />
                                    <input type="password" className="password" name="password" placeholder="Enter Password" required="" autofocus />
                                    <button className="btn" type="submit">Log In</button>
                                </form>

                                <p className="account">Don't have an account? <NavLink to="/Signup">Register</NavLink></p>
                            </div>
                            {/* <div className="w3l_form align-self">
                                <div className="left_grid_info"> */}
                                    <img src="assets/img/logo/1.png" alt="" className="img-fluid" />
                                {/* </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Login
