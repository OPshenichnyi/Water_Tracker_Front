import HomePage from "pages/HomePage"
import MainPage from "pages/Main"

const PrivateRoute = () => {
const auth = false
return (

    auth ? <HomePage /> : <MainPage />
    
    )

}

export default PrivateRoute