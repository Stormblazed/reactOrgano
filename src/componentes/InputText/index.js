import './InputText.css'

const InputText =  (props) => {
    
    const placeholderModify = `${props.placeholder} ...`;

    return (
        <div className='input-text'>
            <label>{props.label}</label>
            <input type='text' placeholder={placeholderModify}  />
        </div>
    )
}

export default InputText