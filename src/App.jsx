import { useState, useEffect } from "react"
import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import { currentUser as user} from "./service/auth";
import { Outlet } from "react-router-dom"
function App() {

  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    try {
      user().then((response)=>{setUserDetails(response)});
   } catch (error) {
       console.log(error)
   }
  }, [])

  return (
    <div className='min-h-screen flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header username={userDetails.username} avatar={userDetails.avatar}/>
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
