import { useContext } from "react"
import { contextProvider } from "./ContextApp"
import { Navigate, useLocation } from "react-router-dom"

const PrivateRoutes = ({ children }) => {

    const { user, loading } = useContext(contextProvider)

    const location =useLocation()
    
    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }
    if (user) {
        return children
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    )
}

export default PrivateRoutes