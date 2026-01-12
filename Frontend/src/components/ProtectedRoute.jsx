import { Navigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function ProtectedRoute({ children }) {
    const { user, loading } = useAuth()

    if (loading) return null   // or spinner

    if (!user) {
        return <Navigate to="/auth" replace />
    }
    console.log("USER:", user)
    console.log("LOADING:", loading)

    return children
}

export default ProtectedRoute
