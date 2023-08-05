import React , {useState} from 'react'
import './Signup.css'
import { NavLink , useNavigate  } from 'react-router-dom'

function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", work: "", password: "", cpassword: ""
    });

    let name, value;
    const handleInputs = (e) => {
        console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }

    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, phone, password, cpassword } = user;

        const response = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name, email, phone, password, cpassword


            }),

        });

        const res = await response.json();

        if (res.status === 422 || !response) {
            window.alert("Invalid registration");
            console.log("Invalid registration");
        } else {
            window.alert("Registration Successfull");
            console.log("Successfull Registration");

            navigate("/Login");

        }

    };

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
                                <form method="POST">
                                    <input type="text" className="name" name="name" placeholder="Enter Name" required="" autofocus
                                        value={user.name} onChange={handleInputs}
                                    />
                                    <input type="email" className="email" name="email" placeholder="Enter Email" required="" autofocus
                                        value={user.email} onChange={handleInputs}
                                    />
                                    
                                    <input type="number" className="phone" name="phone" placeholder="Enter Phone Number" required="" autofocus
                                        value={user.phone} onChange={handleInputs}
                                    />
                                    <input type="password" className="password" name="password" placeholder="Enter Password" required="" autofocus
                                        value={user.password} onChange={handleInputs}
                                    />
                                    <input type="password" className="cpassword" name="cpassword" placeholder="Enter Confirm Password" required="" autofocus
                                        value={user.cpassword} onChange={handleInputs}
                                    />
                                    <button className="btn" type="submit" onClick={PostData}>Log In</button>
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
