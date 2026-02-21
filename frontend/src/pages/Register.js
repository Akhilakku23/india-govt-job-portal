import React,{useState} from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register(){

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const navigate = useNavigate();

    const submit = async(e)=>{

        e.preventDefault();

        await register({

            name,
            email,
            password

        });

        navigate("/login");

    };

    return(

        <div className="container mt-5">

            <form onSubmit={submit}>

                <h3>Register</h3>

                <input
                className="form-control m-2"
                placeholder="Name"
                onChange={e=>setName(e.target.value)}
                />

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

                <button className="btn btn-success">
                    Register
                </button>

            </form>

        </div>

    );

}

export default Register;