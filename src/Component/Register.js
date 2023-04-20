import React from "react";
import { useState } from "react";

const Register=()=>{
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    return(
        <React.Fragment>
            <div>Register</div>
            <div class="form">
                <input type="text" name="" id="" placeholder="enter name"  onChange={(e)=> setname(e.target.value)}/>
                <input type="text" name="" id="" placeholder="enter password" onChange={(e)=> setpassword(e.target.value)}/>
                <input type="text" name="" id="" placeholder="enter email" onChange={(e)=> setemail(e.target.value)}/>
                <button >Submit</button>
            </div>
        </React.Fragment>
    )
}
export default Register;