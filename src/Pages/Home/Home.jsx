import "./Home.css";
import RightSide from '../../Components/RightSide/RightSide.jsx';
import CenterSide from '../../Components/CenterSide/Center.jsx';
import { useEffect,useState } from "react";
import axios from "axios";
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
      const res = await axios.get("/api/v1/projects/");
      setProjects(res.data);
        console.log(res.data)
    }
    getProjects();
  },[]);
  return (
    
      
          <div className="Home">
        <div className="profileSide">
          <div className="profileCard">
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
                <span style={{fontSize:25}}>L</span>orem ipsum dolor sit amet consectetur adipisicing elit. Veniam ipsa omnis iste reprehenderit nihil culpa animi voluptatem blanditiis corrupti, labore suscipit earum voluptates optio ex repellat voluptatum, magnam magni soluta.
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