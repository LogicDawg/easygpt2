import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../Homepage"
import Profile from "../Profile";
import Signup from "../SignupForm";
import Generatesql from "../gpt/Generatesql"
import Generateimage from "../gpt/Generateimage"
import Generateessay from "../gpt/Generateessay";
import Login from "../LoginForm"



const Routes = ({ login, signup }) => {

    return (

    <div>
        <Switch>
            <Route exact path="/">
            <Homepage />
            </Route>

            <Route exact path="/login">
            <Login login={login}/>
            </Route>

            <Route exact path="/signup">
            <Signup signup={signup}/>
            </Route>

            <PrivateRoute path="/profile">
            <Profile/>
            </PrivateRoute>
            
            <PrivateRoute path="/generatesql">
            <Generatesql />
            </PrivateRoute>

            <PrivateRoute path="/generateimage">
            <Generateimage />
            </PrivateRoute>

            <PrivateRoute path="/generateessay">
            <Generateessay />
            </PrivateRoute>

            <Redirect to="/" />
        </Switch>
    </div>
    )
}

export default Routes;