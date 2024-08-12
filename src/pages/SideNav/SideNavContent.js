import "./SideNav.scss"

const SideNavContent=()=>{
    const sideNavData=["Home","Work Experience","Education","Skills","Contacts","Others","About"]

    return(
        <div className="data-container">
            {
                sideNavData.map(data=>{
                    return(
                       <>
                       <div className="data-item">
                        <p>{data}</p>
                       </div>
                       </>

                    )
                })
            }
        </div>
    )
}

export default SideNavContent;