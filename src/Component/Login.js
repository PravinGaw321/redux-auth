import React, { useState } from "react";

const Login=()=>{
    const [name, setname] = useState('');
    const [password, setpassword] = useState('');

    return(
        <React.Fragment>
            <div>Login</div>
            <div class="form">
                <input type="text" name="" id="" placeholder="enter name"  onChange={(e)=> setname(e.target.value)}/>
                <input type="text" name="" id="" placeholder="enter password" onChange={(e)=> setpassword(e.target.value)}/>
                <button >Submit</button>
            </div>
        </React.Fragment>
    )
}

export default Login;