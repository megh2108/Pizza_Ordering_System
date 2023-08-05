import React from 'react'
import './Signup.css'
import { NavLink } from 'react-router-dom'

function Signup() {
    return (
        <>
            <section class="w3l-hotair-form">

                <div className="container">

                    <div className="workinghny-form-grid">
                        <div className="main-hotair">
                            <div className="w3l_form align-self">
                                <div className="left_grid_info">
                                    <img src="" alt="" className="img-fluid" />
                                </div>
                            </div>
                            <div className="content-wthree">
                                <h2>Sign Up</h2>
                                <form action="#" method="post">
                                    <input type="text" className="name" name="name" placeholder="Enter Name" required="" autofocus />
                                    <input type="email" className="email" name="eamil" placeholder="Enter E-mail" required="" autofocus />
                                    <input type="number" className="phone" name="phone" placeholder="Enter Phone Number" required="" autofocus />
                                    <input type="password" className="password" name="password" placeholder="Enter Password" required="" autofocus />
                                    <input type="password" className="cpassword" name="cpassword" placeholder="Enter Confirm Password" required="" autofocus />
                                    <button className="btn" type="submit">Log In</button>
                                </form>

                                <p className="account">Already have an account? <NavLink to="/Login">Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup
