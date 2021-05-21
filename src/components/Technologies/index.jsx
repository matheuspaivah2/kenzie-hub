import { Container } from './styles'
import Card from '../Card'


const Technologies = ({user, token, loadProfile}) =>{

    return(
        <>
            {
                user && 
                <Container>
                    <ul>
                        {
                        user.map((item) => 
                            <Card loadProfile={loadProfile} techId={item.id} key={item.id} token={token} title={item.title} status={item.status}></Card>)
                        }
                    </ul>
                </Container>
                
            }
           
        </>
    )
}

export default Technologies;