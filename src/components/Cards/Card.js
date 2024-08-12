import "./Card.scss"

const Card=({children})=>{
    return(
        <div className="card-view">
            {children}
        </div>
    )
}

export default Card;