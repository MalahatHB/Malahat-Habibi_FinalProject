import classes from './ListView.module.css';
import MovieItem from '../pages/AllMovie/MovieItem';

function ListView(props) {
    return (
        <ul className={classes.list + " ml-5 mr-5"}>
            {props.movieList.map(movie => <li key={movie.id}><MovieItem id={movie.id} name={movie.name} image={movie.image} year={movie.year} listCard={true}/></li>)}
        </ul>
    );
}

export default ListView;