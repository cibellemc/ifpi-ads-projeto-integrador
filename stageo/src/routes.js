import React from "react";
import { Route, Switch} from "react-router-dom"
import HomePage from "./pages/home/homepages";
import ReservaPage from "./pages/reservas/reservas";

const Routes = () => {
    return <Switch>
        <Route exact path="/">
            <HomePage />
        </Route>

        <Route exact path="/equipamentos">
            <h1>Equipamentos</h1>
        </Route>

        <Route exact path="/reservas">
            <ReservaPage />
        </Route>
    </Switch>
}

export default Routes