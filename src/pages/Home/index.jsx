import { useEffect, useState } from 'react';
import RegisterTech from '../../components/RegisterTech'
import Technologies from '../../components/Technologies'
import axios from 'axios'
import './styles.css'
import { Redirect } from 'react-router';

const Home = () => {

    const [user, setUser] = useState({});
    

    const [token, setToken] = useState(() => {
        const localToken = localStorage.getItem("token") || "";
        return JSON.parse(localToken);
    });

   

    const loadProfile = () =>{
        axios
        .get("https://kenziehub.me/profile", {
            headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setUser(response.data))
        .catch((e) => console.log(e));
    }
    
    useEffect(() => {
        if ( !token ) {
            return <Redirect to='/login' />;
        }
        loadProfile()
    }, []);

    return(
        <div>
            <h1>{user.name}</h1>
            {
                user && <RegisterTech  token={token} loadProfile={loadProfile}/>
                 
            }
            {
                user.techs && <Technologies token={token} user={user.techs} loadProfile={loadProfile}/> 
            }

        </div>
        )
    }
export default Home;
