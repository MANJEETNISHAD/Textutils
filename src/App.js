import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
// import About from './Component/About';
import TextForm from './Component/TextForm';
import { useState } from 'react';
import Alert from './Component/Alert';


function App() {
  const[Mode,setMode]=useState('light')
  const[alert,setAlert]=useState(null)
  const showAlert=(massage,type)=>
  {
    setAlert({
      msg:massage,
      type:type
    })
    setTimeout(()=>{
      showAlert(null)
    },4000)
  }
  const showMode=()=>{
    if(Mode==='light'){
      setMode("dark")
      document.body.style.backgroundColor ='#042743';
      showAlert("Dark moode Enable","success")
    }
    else{

      setMode("light")
      document.body.style.backgroundColor ='white';
      showAlert("Light moode Enable","success")
      
    }
  }
  return (
   <>
   <Navbar title="TextUtils" mode={Mode} showMode={showMode}/>
   <Alert alert={alert}/>
   
   <TextForm mode={Mode} showAlert={showAlert}heading="Enter your text to analyze below"/>
   {/* <About/> */}
   </>
  );
}

export default App;
