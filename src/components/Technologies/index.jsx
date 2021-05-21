import { Container, Empty } from './styles'
import Card from '../Card'


const Technologies = ({user, token, loadProfile}) =>{

    console.log(user)
    return(
        <>
            {
                user[0]  ?
                <Container>
                    <ul>
                        {
                        user.map((item) => 
                            <Card loadProfile={loadProfile} techId={item.id} key={item.id} token={token} title={item.title} status={item.status}></Card>)
                        }
                    </ul>
                </Container> 
                :
                <Empty >Nenhuma tecnologia cadastrada</Empty>
                
            }
           
        </>
    )
}

export default Technologies;