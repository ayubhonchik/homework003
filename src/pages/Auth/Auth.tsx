import { Outlet } from "react-router-dom";
import LogIn from "../LogIn/LogIn";
import { useStore } from "../../zustand/counter";


const Auth = () => {
  const {token} = useStore()
    const ttoken = token
  return ttoken ? <Outlet/> : <LogIn/>;
}

export default Auth;