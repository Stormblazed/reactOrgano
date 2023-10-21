import './InputSelect.css'

const InputSelect = (props) => {    

    const onSelectChangeValue = (evento)=>{
        props.onSelectValue(evento.target.value)
    }

    return (
        <div className='input-select'>
            <label>{props.label}</label>
            <select onChange={onSelectChangeValue} value={props.value} required={props.required} >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default InputSelect