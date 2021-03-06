import { Card } from 'react-bootstrap';
import classes from './MovieItem.module.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem(props) {
    const history = useHistory();

    function viewModeHandler() {
        history.push({
            pathname: '/movie',
            search: `?${props.id}`,
            state: { detail: props.id }
        })
    }

    return (
        <Card className={props.listCard ? classes.listCard : classes.GridCard} onClick={viewModeHandler}>
            <div>
                <img src={props.image} alt={props.name} />
            </div>
            <div className='mx-auto'>
                <div className='p-3'>
                    <h3>{props.name}</h3>
                </div>
                <div className='p-3'>
                    <p>Construction Year: {props.year}</p>
                </div>
            </div>
        </Card>
    );
}

export default MovieItem;