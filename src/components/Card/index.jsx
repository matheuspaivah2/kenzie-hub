import { Container } from './styles'
import axios from 'axios'
import { toast } from 'react-toastify'


const Card = ({title, status, techId, token, loadProfile}) =>{

   

    const handleDelete = () =>{
        axios
        .delete(`https://kenziehub.me/users/techs/${techId}`,  
            {
            headers: { 
            Authorization: `Bearer ${token}` 
            },
            
        }
        )
        .then((response) => {
            toast.success('Tecnologia excluida com sucesso!')
            loadProfile()
        })
        .catch((e) => {
            toast.error('Falha')
        });
    }
    return(
        <Container>
            <h3>{title}</h3>
            <h3>{status}</h3>
            <button onClick={handleDelete}>Deletar</button>
        </Container>
    )
}

export default Card;