import { Container } from './styles'
import axios from 'axios'


const Card = ({title, status, techId, token, loadProfile}) =>{

    console.log(techId)

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
            loadProfile()
        })
        .catch((e) => console.log(`err:${e}`));
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