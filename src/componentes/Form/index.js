import { useState } from 'react';
import InputSelect from '../InputSelect';
import InputText from '../InputText';
import SaveButton from '../SaveButton';
import './Form.css'


const Form = (props) => {


    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')    
    const [time, setTime] = useState('')    

    const aoSalver = (evento) => {    
        evento.preventDefault()        
        props.onCollaborators({nome,cargo,imagem,time})
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }
    
    return (
        <section className='form'>
            <form onSubmit={aoSalver}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText
                    required={true}
                    label="Nome"
                    placeholder="Digite seu Nome"
                    valor = {nome}
                    onChangedValue={value => setNome(value)}
                />
                <InputText 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    onChangedValue={value => setCargo(value)}
                />
                <InputText 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem}
                    onChangedValue={value => setImagem(value)}
                />
                <InputSelect 
                    required={true} 
                    label="Time" 
                    itens={props.times} 
                    valor={time}
                    onSelectValue={value => setTime(value)}
                />
                <SaveButton>
                    Criar Card
                </SaveButton>

            </form>
        </section>
    )
}

export default Form;