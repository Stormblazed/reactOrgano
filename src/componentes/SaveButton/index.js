import './SaveButton.css'

const SaveButton = (props)=>{
    return(
        <div className="save-button">
            <button>{props.children}</button>
        </div>
    )
}

export default SaveButton