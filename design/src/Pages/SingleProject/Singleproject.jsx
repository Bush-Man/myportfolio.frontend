import './SingleProject.css';
import { useState, useEffect,useContext } from "react";
import axios from 'axios';
import{useLocation,useNavigate}from "react-router-dom"
import dateFormat from "dateformat";
import { Context } from '../../ContextApi/Context';
import { userRequest } from '../../AxiosInstance/Axiosinstance';
const Singleproject = () => {
    

    
    const [project, setProject] = useState({});
    const location = useLocation();
    const projectId = location.pathname.split("/")[2];
    const navigate = useNavigate();
    const isAdmin = useContext(Context).user?.isAdmin;
    

    //navigate to update page
    const updateProject = () => {
       navigate(`/project/update/${projectId}`)
    }
    //delete a project
    
    const deleteProject = async (e) => {
        e.preventDefault();
        await userRequest.delete(`/api/v1/remove/${projectId}`);
         navigate('/',{replace:true});
        
        }
        
    
    //navigation to home page
    const handleNavigation = () => {
        navigate('/',{replace:true});
    }
    //fetch project by id 
    useEffect(() => {
        const fetchProject = async () => {
            const res = await axios.get(`/api/v1/project/${projectId}`);
            setProject(res.data);
            console.log(res.data);
        }
        fetchProject();
    },[projectId])
        
    
    
  return (
    <div className="singleProject">
          {/*Single project start */}
          
              
              
              <div className="sinprojectContainer"key={project._id}>
              
                       <div className="projectInfo">
                          <div className="projTop">
                              <h3 style={{margin:"5px 0px"}}>{project.title}</h3>
                              <div className="sinprojTime">
                                  <h4 style={{fontSize:12,marginRight:2}}>Created On:</h4>
                                  <span style={{fontSize:11}} >{dateFormat(project.createdAt)}</span>

                                  
                              </div>
                  </div>
                   <div className="sinprojImg">
                       
                        <img src={project.image? process.env.REACT_APP_PUBLIC_FOLDER + project.image : `${project.title} illustration diagram`} alt=""  />
                  </div>
                  
                          <p>
                              {project.desc}

                          </p>
                          
                      </div>
                     
              <div className="buttons">
                  <button className="btn btnBack"style={{background:"blue"}} onClick={handleNavigation}>BACK</button>
                  {
                      isAdmin &&<>
                    <button className="btn btnDelete" style={{background:"red"}} onClick={deleteProject}>DELETE</button>
                     <button className="btn btnUpdate" style={{background:"green"}} onClick={updateProject}>UPDATE</button>
                      </> 
            }

                  
                </div>
                  </div>
   
                  {/*Single project end */}
    
    
    
    
      </div>
  )
}

export default Singleproject