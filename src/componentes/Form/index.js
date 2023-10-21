import InputText from '../InputText';
import './Form.css'


const Form = () => {

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <InputText label="Nome" placeholder="Digite seu Nome" />
                <InputText label="Cargo" placeholder="Digite seu Cargo" />
                <InputText label="Imagem" placeholder="Informe o endereço da imagem" />
            </form>
        </section>
    )
}

export default Form;