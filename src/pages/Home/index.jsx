import { useEffect, useState } from 'react';
import RegisterTech from '../../components/RegisterTech'
import Technologies from '../../components/Technologies'
import axios from 'axios'

const Home = () => {

    const [user, setUser] = useState({});

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || "";
        return JSON.parse(localToken);
    });
    
    useEffect(() => {
        axios
        .get("https://kenziehub.me/profile", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
        .catch((e) => console.log(e));
    }, []);

    return(
        <div>
            <h3>{user.name}</h3>
            {
                user && <RegisterTech token={token} />
                 
            }
            {
                user && <Technologies token={token} user={user}/>
            }

        </div>
        )
    }
export default Home;
