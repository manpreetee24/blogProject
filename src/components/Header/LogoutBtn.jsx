import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'
function LogoutBtn() {
  const dispatch = useDispatch()
  const logoutHandler = () => {
    authService.logout().then(() => {   
      dispatch(logout())    //logout from store (Redux) after logging out from backend (Appwrite)
    })
  }
  return (
    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
    onClick={logoutHandler}>
      Logout
    </button>
  )
}

export default LogoutBtn

//It renders a red Logout button. When clicked, it logs the user out 
//from the backend (Appwrite) and then updates your React app's global state (Redux) so the app knows the user is logged out.