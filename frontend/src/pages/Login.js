import React,{useState} from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login(){

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const submit = async(e)=>{

        e.preventDefault();

        const res = await login({

            email,
            password

        });

        localStorage.setItem(
            "token",
            res.data.token
        );

        localStorage.setItem(
            "user",
            JSON.stringify(res.data.user)
        );

        navigate("/");

    };

    return(

        <div className="container mt-5">

            <form onSubmit={submit}>

                <h3>Login</h3>

                <input
                className="form-control m-2"
                placeholder="Email"
                onChange={e=>setEmail(e.target.value)}
                />

                <input
                type="password"
                className="form-control m-2"
                placeholder="Password"
                onChange={e=>setPassword(e.target.value)}
                />

                <button className="btn btn-primary">
                    Login
                </button>

            </form>

        </div>

    );

}

export default Login;