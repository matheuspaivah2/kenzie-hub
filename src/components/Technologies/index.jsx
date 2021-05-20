import { useEffect, useState } from 'react';
import Card from '../Card'
import axios from 'axios'

const Technologies = ({token, user}) =>{

    
    
    const [techs, setTechs] = useState([])
   
    

    useEffect(() => {
        axios
        .get("https://kenziehub.me/profile", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setTechs(response.data.techs))
        .catch((e) => console.log(e));
    }, []);
    return(
        <>
            <ul>
                {
                    techs && techs.map((item, index) => <Card key={index} title={item.title}></Card>)
                }
            </ul>
        </>
    )
}

export default Technologies;