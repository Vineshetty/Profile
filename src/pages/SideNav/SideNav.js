import "./SideNav.scss"
import SideNavContent from "./SideNavContent";
import SideNavImage from "./SideNavImage";

const SideNav =()=>{
    return(
        <div className="column-flex side-nav">
            <SideNavImage/>
            <SideNavContent/>
        </div>
    )
}

export default SideNav;