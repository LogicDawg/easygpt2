import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Homepage from "../Homepage"
import Profile from "../Profile";
import Signup from "../SignupForm";
import Generatesql from "../Generatesql"
import Login from "../LoginForm"



const Routes = ({ login, signup }) => {

    return (

    <div>
        <Switch>
            <Route exact path="/">
            <Homepage />
            </Route>

            <Route exact path="/generatesql">
            <Generatesql />
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

            
{/* 
            <Route exact path="/login">
            <Login login={login}/>
            </Route>


 */}
            
            {/* <PrivateRoute exact path="/generatesql">
            <Generatesql />
            </PrivateRoute>

            <PrivateRoute exact path="/jobs">
            <Jobs/>
            </PrivateRoute>

            <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
            </PrivateRoute>

 */}

            <Redirect to="/" />
        </Switch>
    </div>
    )
}

export default Routes;