import { useEffect } from "react"
import { Footer } from "./components/footer/Footer"
import Header from "./components/header/Header"
import { currentUser } from "./service/auth";
import { Outlet } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
function App() {

  const dispatch = useDispatch();
  const state = useSelector((state)=> state.auth);

  useEffect(() => {
    dispatch(currentUser());
  }, [])

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-neutral-900'>
      <div className='w-full block'>
        <Header username={state.userData.username} avatar={state.userData.avatar}/>
        <main>
         <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App