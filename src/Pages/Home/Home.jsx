import "./Home.css";
import RightSide from '../../Components/RightSide/RightSide.jsx';
import CenterSide from '../../Components/CenterSide/Center.jsx';
import { useEffect,useState } from "react";
import axios from "axios";
import{useNavigate}from "react-router-dom";
import Facebook from "../../images/facebook.png";
import Twitter from "../../images/twitter.png";
import Instagram from "../../images/instagram.png";
import Linkedin from '../../images/linkedin.png';
import Youtube from "../../images/youtube.png";
import { Link } from "react-router-dom";
const Home = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const getProjects = async () => {
      const res = await axios.get("https://server-ujbx.onrender.com/api/v1/projects");
      setProjects(res.data);
        console.log(res.data)
    }
    getProjects();
  },[]);
  
  const navigate = useNavigate();
  //navigation to home page
    const handleNavigation = () => {
        navigate('/start',{replace:true});
    }
  return (
    
      
          <div className="Home">
        <div className="profileSide">
          <div className="profileCard">
           <button onClick={handleNavigation} style={{background:"white",border:"none",outline:"none"}}>.</button>
            <div className="profImages">
                 
                <img className="coverImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo8PBlksM5ycqP8YRhDcsl853_G5tcwZKt5AS8yGJoIw&s" alt="" />
                <img className="profImage" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgSqts8X18zypMacdVpsMo5GDHpet_qGAtSQCnzJfnGA&s" alt=""  />
            </div>
            <div className="profNames">
              <h3>Bush Man</h3>
              <h3 style={{fontSize:12,fontWeight:500}}>Web Developer</h3>
              
            </div>
            <div className="about">
              <h3>About Me</h3>
              <hr style={{width:80,marginBottom:4}} />
              <p>
                <span style={{fontSize:25}}>H</span>i I am Dennis a Fullstack web developer having been in this field for more than 2 years as a freelancer i am able to develop for you your next big website using the MERN Stack which allows devlopment of both the front-end part and back-end part of your website. MERN Stack is a mnemonic word where M stands for Mongo.db which is a database,while E represents Express.js which is a serverside node.js framework and R for React.js which builds the front-end part finally N Node.js.The main advantages of developing your website using MERN Stack are:
                 <br>
                     1. Development takes a short time.<br>
                     2. Your website is more secure.<br>
                     3. Easy to update.<br>
                     4. Low maintainance cost.<br>
                     5. Fast.<br>
               Welcome..
               </p>  
            
            </div>
              
          </div>
          <div>
            <ul className="socialMedia">
              <Link to="*">
                <li>
                <img src={Linkedin} alt=""/>
              </li>
              </Link>
              <Link to="*">
                <li>
                <img src={Twitter} alt=""/>
              </li>
              </Link>
              <Link to ="*">
                <li>
                <img src={Facebook} alt=""/>
              </li>
              </Link>
              <Link to="*">
                <li>
                <img src={Youtube} alt=""/>
              </li>
              </Link>
              <Link to="*">
                <li>
                <img src={Instagram} alt=""/>
              </li>
              </Link>
            </ul>
          </div>
        </div>
        <CenterSide projects={projects} />
         
        <RightSide />
          </div>
      
      
      
  )
}

export default Home
