import { Row, Col } from 'react-bootstrap';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useLocation } from "react-router-dom";
import api from '../../api/api';
import EditMovieForm from './EditMovieForm';
import './index.css';

function EditMoviePage() {
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

    function editMovieHandler(movieData) {
        api.editMovie(movieData).then((response) => {
            history.push({
                pathname: '/movie',
                search: `?${location.state.detail}`,
                state: { detail: location.state.detail }
            });
        }).catch((error) => {
            console.log(error);
        })
    }

    function cancelHandler() {
        history.push({
            pathname: '/movie',
            search: `?${location.state.detail}`,
            state: { detail: location.state.detail }
        });
    }

    if (isMovieEmpty) {  
        return (
        <section>
            <Row className="page-margin">
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
            </Row> 

            <EditMovieForm onSubmit={editMovieHandler} onCancel={cancelHandler} movie={movie} />
        </section>
    );
}

export default EditMoviePage;