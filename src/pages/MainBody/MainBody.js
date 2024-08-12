import Card from "../../components/Cards/Card";
import Content from "../../components/Content/Content";
import "./MainBody.scss"
import MainHeader from "./MainHeader";
const MainBody = () => {
    return (
        <div className="main-body column-flex">
            {/* <Card>
            <Content/>
            </Card> */}
<MainHeader/>
        </div>
    )
}
export default MainBody;