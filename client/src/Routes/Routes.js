import { Switch, Route, Redirect } from "react-router-dom";
import Homepage from "../Homepage"
import Generatesql from "../Generatesql"



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

            
{/* 
            <Route exact path="/login">
            <Login login={login}/>
            </Route>


            <Route exact path="/signup">
            <Signup signup={signup}/>
            </Route> */}
            
            {/* <PrivateRoute exact path="/generatesql">
            <Generatesql />
            </PrivateRoute>

            <PrivateRoute exact path="/jobs">
            <Jobs/>
            </PrivateRoute>

            <PrivateRoute exact path="/companies/:handle">
            <CompanyDetail />
            </PrivateRoute>

            <PrivateRoute path="/profile">
            <Profile/>
            </PrivateRoute> */}

            <Redirect to="/" />
        </Switch>
    </div>
    )
}

export default Routes;