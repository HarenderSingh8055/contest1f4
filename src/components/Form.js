import { useState } from "react";

const Form = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [error,setError] = useState(false);
    const [success,setSuccess] = useState(false);
    const [passError,setPassError] = useState(false);


    function handleSubmit(e){
        e.preventDefault();

        validate();
        console.log(name,email,password,confirmPassword);

    }

    function validate(e){
        if(name.trim()===""||email.trim()===""||password.trim()===""||confirmPassword.trim()===""){
            setError(true);
            setSuccess(false);
            setPassError(false);
            return;
        }

        if(password.trim()!==confirmPassword.trim()){
            setPassError(true);
            setError(false);
            setSuccess(false);
            return;
        }
        setError(false);
        setPassError(false);
        setSuccess(true);
    }


  return (
    <div className="main">
      <div className="wrapper">
        <div className="heading">Signup</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
          <div className="msg">
            {passError && <div className="error">Password didn't match.</div>}
            {error && <div className="error">Error : All the fields are mandatory</div>}
            {success && <div className="success">Successfully Signed Up!</div>}
          </div>

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
