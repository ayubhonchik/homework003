import { useStore } from "../../zustand/counter"


const LogIn = () => {
  const {setToken} = useStore()
  return (
    <>
    <input type="text" placeholder='username' />
    <input type="text" placeholder='password' />
    <button onClick={setToken}>Log In</button>
    </>
  )
}

export default LogIn