import './Create.css';
import{userRequest} from '../../AxiosInstance/Axiosinstance.js'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Create = () => {
 const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleProjectSubmit = async(e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.image = filename;
      try { 
        await userRequest.post("/api/v1/upload",data)
      } catch (err) {
        console.log(err);
      }
    }
    userRequest.post("/api/v1/create/new", newPost);
    navigate("/",{replace:true})
  }
  
  return (
    <div className="createProj">
          <form onSubmit={handleProjectSubmit}>
              <div>
                   <label htmlFor="file"></label>
              <input type="file" name="file" id="file" style={{borderBottom:"none"}} onChange={(e)=>setFile(e.target.files[0])} required/>
             </div>
             
               <div>
                    <label>Title</label>
              <input type="text" name="title" required onChange={(e)=>setTitle(e.target.value)} />
            </div>
               <div>
                    <label>Description</label>
              <textarea style={{maxWidth:"100%",outline:"none",padding:"5px"}}type="text" name="description" required onChange={(e)=>setDesc(e.target.value)} ></textarea>
            </div>
   <button className="createBtn" type="submit">SEND</button>
          </form>
          

    </div>
  )
}

export default Create