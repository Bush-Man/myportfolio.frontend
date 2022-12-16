import { useState,useContext} from "react";
import axios from "axios";
import { Context } from "../../ContextApi/Context.js";

const Login = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch} = useContext(Context);
  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const fetchData = async () => {
        dispatch({
          type:"LOGIN_START"
        })
        const res = await axios.post("/api/v1/auth/mainlogin", { username, password });
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data
          
        })
        
        
      }
    
      fetchData();
      
    } catch (error) {
      dispatch({
        type:"LOGIN_FAILURE"
      })
    }
    
    
     
  }
  return(
      <>
        <form style={{
          display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "5rem", gap: "1rem"
        }}
          onSubmit={handleSubmit}
        >
          <input type="text" value={username} style={{ outline: "none" }} onChange={(e) => setName(e.target.value)} />
          <input type="password" value={password} style={{ outline: "none" }} onChange={(e) => { setPassword(e.target.value) }} />
          <button type="submit" style={{ background: "blue", color: "white", border: "none", padding: "5px 10px" }}>Login</button>
        </form>
      </>
    )
  }

export default Login