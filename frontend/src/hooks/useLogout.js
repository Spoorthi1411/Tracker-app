import React from 'react'

const useLogout = () => {
  const [loading,setLoading] = useState(false)
const{setAuthUser} = userAuthContext()
  const logout =async () =>{
    setLoading(true)
    try {
        const res = await fetch("https://myapp-backend.onrender.com/api/auth/signup", {

            method:"POST",
            headers:{"Content-Type":"application/json"}
        });
        const data = await res.json()
        if(data.error){
            throw new Error(data.error)
        }

        localStorage.removeItem("chat-user")
        setAuthUser(null)
    } catch (error) {
        Toast.error(error.message)
    }finally{
        setLoading(false)
    }
  };

  return { loading, logout};
}

export default useLogout