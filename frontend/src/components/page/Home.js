import Input from "../form/input"
import styles from '../form/Form.module.css'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'


import api from "../../utils/api"



function Home(){
    const [imc,setImc] = useState({})
    const navigate = useNavigate()
   // const {calculo} = useContext(Context)

    function handleChange(e){
     setImc({...imc, [e.target.name]: e.target.value})
    }

    async function calculo(imc) {
         api
        .post(`/imc/salve`, imc)
        .then((response) => {
         
          return response.data
        })
        .catch((err) => {
          console.log(err)
         
          return err.response.data
        })

       
    }

    
    function handleSubmit(e){
        e.preventDefault()
        calculo(imc)
        navigate('/list',{replace:true})
    }
   
    return (
        <section className={styles.form_container}>
            <h1 className={styles.title}>Calculadora IMC</h1>
            <form onSubmit = {handleSubmit}>
                <Input text="Nome" type="text" name="name" placheholder="Digite seu nome" handleOnChange={handleChange}/>
                <Input text="Peso" type="text" name="weight" placheholder="Digite seu peso" handleOnChange={handleChange} />
                <Input text="Altura" type="text" name="height" placheholder="Digite seu altura" handleOnChange={handleChange} />

                <input type="submit" value="Cadastrar" />
            </form>
        </section>
    ) 
}

export default Home