import React from "react";
import { Route, Switch} from "react-router-dom"
import HomePage from "./pages/homepages";

const Routes = () => {
    return <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>

        <Route exact path="/equipamentos">
            <h1>Equipamentos</h1>
        </Route>

        <Route exact path="/reservas">
            <h1>Reservas</h1>
        </Route>
    </Switch>
}

export default Routes