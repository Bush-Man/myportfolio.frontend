import "./Update.css";
import { useState } from 'react';
import { userRequest } from '../../AxiosInstance/Axiosinstance';
import {
    useLocation, useNavigate} from 'react-router-dom';
const Update = () => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const location = useLocation();
    const projId = location.pathname.split("/")[3]
    
    const navigate = useNavigate();
    const updateProject = async (e) => {
        e.preventDefault();
        const newProject = {
            title, 
            desc
        };
        if (file) {
            const post = new FormData();
            const filename = new Date() + file.name;
            post.append("name", filename);
            post.append("file", file);
            newProject.image = filename;
            try { 
                await userRequest.post("/api/v1/new", post);
                
      } catch (err) {
                throw (err);
      }
        }
        
        await userRequest.put(`/api/v1/update/${projId}`, newProject);
        
        navigate("/", { replace: true });
        
    }
    //navigation to home page
    const handleNavigation = () => {
        navigate('/',{replace:true});
    }
  return (
      <div className="update">
          <form onSubmit={updateProject}>
              <div>
             <label htmlFor="image">Image</label>
              <input type="file" id="image" onChange={(e)=>setFile(e.target.files[0])}/>

              </div>
              <div>
                  <label>Title</label>
                  <input type="text"onChange={(e)=>setTitle(e.target.value)} required/>
              </div>
              <label>Description</label>
              <textarea name="" id="" type="text"cols="30" rows="10" onChange={(e)=>setDesc(e.target.value)} required></textarea>
              
                  <button type="submit" className="updateBtn">UPDATE</button>
                
                  
        
        
          </form>
    <button onClick={handleNavigation } className="btn" style={{background:"blue",color:"white"}}>HOME</button>
                            
    </div>
  )
}

export default Update