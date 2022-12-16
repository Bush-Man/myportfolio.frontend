import './Center.css';
import dateFormat from "dateformat";
import { Context } from '../../ContextApi/Context';
import { useContext,useRef } from 'react';
import { Link } from "react-router-dom";
import Javascript from '../../images/javascript.png';
import Mongodb   from '../../images/mongodb.png';
import Node from '../../images/node-js.png';
import Reactimg from '../../images/react.png';
import Redux from '../../images/redux.png';

const Center = ({projects}) => {
    const { dispatch,dark} = useContext(Context);
    const ref = useRef(false);
    
    const darkTheme = () => {
       
        dispatch({
            type: "CHANGE_THEME",
            payload: ref.current=!ref.current
        })
        
    }
    
  return (
      <div className="centerSide">
          <div className="skills">
              <h3>My Skills</h3>
              <hr style={{width:80}}/>
              <ul className="skillList">
                  <li>
                      <img src={Javascript} alt="Javascript logo"/>
                      <span>Javascript</span>
                  </li>
                  
                  <li>
                      <img src={Reactimg} alt="React logo"/>
                      
                      <span>React</span>
                  </li>
                  <li>
                      <img src={Redux} alt="Redux logo"/>
                      
                      <span>Redux</span>
                  </li>
                  <li>
                      <img src={Node} alt="Node.js logo"/>
                      
                      <span>Node</span>
                  </li>
                  <li>
                      <img src={Mongodb} alt="Mongo-db logo"/>
                      
                      <span>MongoDb</span>
                  </li>
              </ul>
             <button 
                  className="btnToggle" onClick={darkTheme}ref={ref} >Change Theme</button>
          </div>
         
          
          <div >
              <h3>Projects</h3>
              <hr style={{width:80}}/>
              <div className="projectList">
                  {/*Single project start */}
                  {projects.map(project => 
                      <div className={`projectContainer ${dark?"darkBackground":""}`} key={project._id}>
                          <Link style={{all:"unset"}} to={`/project/${project._id}`}>
                       <div className="projectInfo">
                          <div className="projTop">
                                  <h3 style={{ margin: "5px 0px" }}>{project.title}</h3>
                                  
                              <div className="projTime">
                                  <h4 style={{fontSize:12,marginRight:2,fontWeight:400}}>Created: </h4>
                                  <span style={{fontSize:11}} > {dateFormat(project.createdAt)}</span>

                                  
                              </div>
                          </div>
                          <p >
                            {project.desc} <span style={{fontWeight:'semi-bold'}}>see more...</span>
                            
                          </p>
                          
                      </div>
                      <div className="projImg">
                            
                              <img src={project.image ? process.env.REACT_APP_PUBLIC_FOLDER + project.image : "some diagram"} alt=""/>
                      </div>
                      <div className="likesAndComm" style={{ display: 'flex', justifyContent:'flex-start',alignItems:"center",marginTop:5}}>
                          </div>
            </Link>
                  </div>
                )}
                  {/*Single project end */}
                 
                
              </div>
              
          
    

          </div>
      </div>
)}

export default Center
