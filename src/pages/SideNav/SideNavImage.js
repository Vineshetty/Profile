import "./SideNav.scss";
import profilePic from "../..//assets/profile.jpg"
const SideNavImage=()=>{
    return (
        <div className="image-container">
        <img className="image-container" src={profilePic} alt={":"}/>
        </div>
    )
}

export default SideNavImage;