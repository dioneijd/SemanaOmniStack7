import React, {useState} from 'react'
//import api from '../../services/api'


export default function Login() {
  //  const [email, setEmail] = useState('')

    const [teste, setTeste] = useState({
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
        email:''
    })




    async function handleSubmit(e) {
        e.preventDefault()

        console.log(teste)

        // const reponse = await api.post('/session', { email })

        // const { _id } = reponse.data

        // localStorage.setItem('user', _id)
    }


    function handleFormChanges(e) {
        setTeste({
            ...teste,
            [e.target.name]: e.target.value
        });
        console.log(teste)
    }


    return (
        <>
            <p>
                Teste
            </p>
            

            <form onSubmit={handleSubmit}>
                <label htmlFor="email">E-MAIL *</label>
                <input 
                    type="email" 
                    id="email"
                    placeholder="Seu e-mail"
                    value={teste.email}
                    name="email"
                    //onChange={e => setEmail(e.target.value)}
                    //onChange={e => setTeste({ [teste]: e.target.value })}
                    onChange={handleFormChanges}
                />

                <br/>

                <label htmlFor="author">AUTHOR</label>
                <input 
                    type="text" 
                    id="author"
                    name="author"
                    placeholder="Seu nome"
                    value={teste.author}
                    onChange={handleFormChanges}
                />
                <button type="submit">Entrar</button>
            </form>


        
        </>
    ) 
}