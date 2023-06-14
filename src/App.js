import './App.css';
import './madetailwind.css'
import NavBar from "./routes/NavBar";
import StoreContext from "./StoreContext";
import {useEffect, useState} from "react";
import Footer from "./routes/Footer";
import MainFile from "./routes/MainFile";

function App() {
    const selam = 'selam'
    const [darkmode,setDarkmode] = useState(false)
    const [musicon,setMusicon] = useState(false)
    const [durum,setDurum] = useState(false)
    useEffect(() => {
        const modes = localStorage.getItem('modes');
        if (modes === 'light') {
            setDarkmode(false);
            document.documentElement.classList.remove('dark');
        } else if (modes === 'dark') {
            setDarkmode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);
    const todarkmode = () => {
        setDarkmode(!darkmode)
        document.documentElement.classList.toggle('dark')
        if (darkmode === true){
            localStorage.setItem('modes','light')
        }else{
            localStorage.setItem('modes','dark')
        }

    }
  return (
          <div className={'scroll-smooth w-screen h-screen flex justify-center flex-col items-center bg-light-bg1 dark:bg-dark-bg1 overflow-x-hidden'}>
                  <StoreContext.Provider value={{darkmode,durum,setDurum, setDarkmode, todarkmode,setMusicon,musicon}}>
                      <MainFile/>
                  </StoreContext.Provider>
          </div>
  );
}

export default App;
