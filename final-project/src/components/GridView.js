import classes from './GridView.module.css';
import MovieItem from '../pages/AllMovie/MovieItem';
import { Row } from 'react-bootstrap';

function GridView(props) {
    return (
        <Row className={classes.grid}>
            {props.movieList.map(movie => <div className='col-md-3' key={movie.id}><MovieItem id={movie.id} name={movie.name} image={movie.image} year={movie.year} listCard={false} /></div>)}                        
        </Row>
    );
}

export default GridView;