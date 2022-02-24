import { Route, Switch } from "react-router-dom";
import routes from "./routes";

const Router = () => {
    return (
        <Switch>
            {routes.map((route) => {
                return <Route key={route.path} path={route.path} component={route.component} exact/>
            })}
        </Switch>
    )
}
export default Router;