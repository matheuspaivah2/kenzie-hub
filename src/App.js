import "./App.css";

import Menu from "./components/Menu";
import Routes from "./routes";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [isValidated, setIsValidated] = useState(false);

  useEffect(()=>{
    const token = JSON.parse(localStorage.getItem('token'));

    if( token) {
        return setIsValidated(true)
    }
}, [isValidated])

  return (
    <div className="App">
      
      <Menu isValidated={isValidated} setIsValidated={setIsValidated}/>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <ToastContainer />
      <Routes isValidated={isValidated} setIsValidated={setIsValidated}/>
    </div>
  );
}

export default App;
