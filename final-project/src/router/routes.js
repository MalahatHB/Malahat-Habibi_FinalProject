import AllMoviesPage from "../pages/AllMovie";
import AddMoviePage from "../pages/AddMovie";
import ViewMoviePage from "../pages/ViewMovie";
import EditMoviePage from "../pages/EditMovie";
import path from "../router/paths";

const routes = [
    {
        component: AllMoviesPage,
        path: path.home,
    },
    {
        component: AddMoviePage,
        path: path.addMovie,
    },
    {
        component: ViewMoviePage,
        path: path.viewMovie,
    },
    {
        component: EditMoviePage,
        path: path.editMovie,
    }
];

export default routes;