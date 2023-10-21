import InputSelect from '../InputSelect';
import InputText from '../InputText';
import SaveButton from '../SaveButton';
import './Form.css'


const Form = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'Ux e Desing',
        'Mobile',
        'Inovalção e Gestão'
    ]

    const aoSalver = (evento) =>{
        evento.preventDefault();
        console.log("Form foi submetido")
    }

    return (
        <section className='form'>
            <form onSubmit={aoSalver}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText required={true} label="Nome" placeholder="Digite seu Nome" />
                <InputText required={true} label="Cargo" placeholder="Digite seu Cargo" />
                <InputText label="Imagem" placeholder="Informe o endereço da imagem" />
                <InputSelect required={true}  label="Time" itens={times} />
                <SaveButton>
                    Criar Card
                </SaveButton>

            </form>
        </section>
    )
}

export default Form;