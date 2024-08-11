import Header from "../Header/Header";
import MainBody from "../MainBody/MainBody";
import SideNav from "../SideNav/SideNav";
import "./MainProfile.scss"

const MainProfile = () => {

    return (
        <div className="column-flex ">
            <Header />
            <div className="row-flex">
                <SideNav />
                <MainBody />
            </div>
        </div>
    )
}
export default MainProfile;