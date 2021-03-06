import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "../../api/api";
import { Row, Col, Card } from 'react-bootstrap';
import classes from './index.module.css';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function ViewMoviePage() {
    const [movie, setMovie] = useState();
    const [isMovieEmpty, setIsMovieEmpty] = useState(true);
    const location = useLocation();  
    const history = useHistory();  

    useEffect(() => {
        api.fetchMovie(location.state.detail)
        .then((response) => {
            setMovie(response.data[0]);
            setIsMovieEmpty(false);
        })
        .catch((error) => { 
            setMovie();
        });
    }, []);

    function deleteMovieHandler() {
        api.deleteMovie(movie.id).then((response) => {
        }).catch((error) => {
            console.log(error);
        })
        history.push('/');
    }

    function editMovieHandler() {
        history.push({
            pathname: '/movie/edit',
            search: `?${movie.id}`,
            state: { detail: movie.id }
        })
    }

    if (isMovieEmpty) {  
        return (
        <section>
            <Row>
                <Col>
                    <h2>Loading...</h2>
                </Col>
            </Row> 
        </section>
        );
    }

    return (
        <section>
            <Row className="page-margin">
                <Col>
                    <h2>{movie.name}</h2>
                </Col>
                <Col onClick={deleteMovieHandler} className={classes.addButton} md="auto">
                    <button title="Add Movie">DELETE</button>
                </Col>
                <Col onClick={editMovieHandler} className={classes.addButton} md="auto">
                    <button title="Add Movie">EDIT</button>
                </Col>
            </Row>
            <Row className="page-margin">
                <div className="col-6">
                    <Card>
                        <div className="col-12 p-2">
                            <img src={movie.image} width="100%"/>
                        </div>
                        <div>
                            <p>Construction Year: {movie.year}</p>
                            <p>{movie.description}</p>
                        </div>
                    </Card>
                </div>
            </Row>
        </section>
        );
}

export default ViewMoviePage;