import { Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import api from '../../api/api';
import AddMovieForm from './AddMovieForm';

function AddMoviePage() {
    const history = useHistory();

    function addMovieHandler(movieData) {
        api.addMovie(movieData).then((response) => {
        }).catch((error) => {
            console.log(error);
        })
        history.push('/'); 
    }

    function cancelHandler() {
        history.push('/');
    }

    return (
        <section>
            <Row>
                <Col>
                    <h2>Add Movie</h2>
                </Col>
            </Row> 

            <AddMovieForm onSubmit={addMovieHandler} onCancel={cancelHandler} />
        </section>
    );
}

export default AddMoviePage;