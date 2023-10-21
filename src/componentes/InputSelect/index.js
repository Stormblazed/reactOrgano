import './InputSelect.css'

const InputSelect = (props) => {
    console.log(props.itens)
    return (
        <div className='input-select'>
            <label>{props.label}</label>
            <select required={props.required} >
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default InputSelect