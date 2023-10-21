import './InputText.css'

const InputText =  (props) => {
    
    const placeholderModify = `${props.placeholder} ...`

    const onTyping = (evento)=>{
        props.onChangedValue(evento.target.value)
    }

    return (
        <div className='input-text'>
            <label>{props.label}</label>
            <input value={props.value} onChange={onTyping} required={props.required} type='text' placeholder={placeholderModify}  />
        </div>
    )
}

export default InputText