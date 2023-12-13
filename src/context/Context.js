import context from './useContext';
import { useHistory } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Context = (props) => {
    const [ph,setPh]=useState("");
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [msg,setMsg]=useState("");
    const [gpt,setGpt]=useState(true);
    const [cardNo,setCardNo]=useState(1);
    const [gptState,setGptState]=useState("");
    return (
        <context.Provider value={{ph,setPh,name,setName,email,setEmail,msg,setMsg,gpt,setGpt,cardNo,setCardNo}}>
                        {props.children}
        </context.Provider>
    )
}
export default Context;