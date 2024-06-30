import context from './useContext';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Context = (props) => {
    const [ph,setPh]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState("");
    const [gpt,setGpt]=useState(true);
    const [current,setCurrent]=useState(0);
    const [cardNo,setCardNo]=useState(1);
    const [gptState,setGptState]=useState("");
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [data,setData]=useState([]);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState("error");
    const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };
    return (
        <context.Provider value={{snackbarSeverity,showSnackbar,setSnackbarMessage,snackbarMessage,setOpenSnackbar,openSnackbar,ph,setPh,name,setName,email,setEmail,msg,setMsg,gpt,setGpt,cardNo,setCardNo,current,setCurrent,data,setData}}>
                        {props.children}
        </context.Provider>
    )
}
export default Context;