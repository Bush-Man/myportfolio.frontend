import './Notfound.css';
import { useNavigate } from "react-router-dom";
import NotfoundImg from "../../images/Notfound.jpg";
const Notfound = () => {
  const navigate = useNavigate();
  //navigation to home page
    const handleNavigation = () => {
        navigate('/',{replace:true});
    }
return(
    
  <div className='notFound'>
    <img src={NotfoundImg} alt="" style={{width:"15rem"}}/>
    <h1 style={{display:"flex"}}>
    <span>O</span>
      <span>O</span>
      <span>P</span>
      <span>S</span>
      <span>!</span>


      
    </h1>
    <p style={{marginBottom:"1rem"}}><span>404</span> <span>PAGE NOT FOUND</span></p>
    <p style={{marginBottom: "1rem"}}>The page you are looking for is not available or has not yet been created.</p>
    
      <button className="btn btnBack"style={{background:"blue"}} onClick={handleNavigation}>BACK HOME</button>
    </div>
    
    
  )
}

export default Notfound