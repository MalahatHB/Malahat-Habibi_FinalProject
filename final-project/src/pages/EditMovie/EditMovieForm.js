import './EditMovieForm.css';

import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function EditMovieForm(props) {
    const [movieName, setMovieName] = useState(props.movie.name);
    const [movieImage, setMovieImage] = useState(props.movie.image);
    const [movieYear, setMovieConstructionYear] = useState(props.movie.year);
    const [movieDescription, setMovieDescription] = useState(props.movie.description);

    function handleName(e) {
        setMovieName(e.target.value);
    }

    function hanldeImage(e) {
        setMovieImage(e.target.value);
    }

    function handleConstructionYear(e) {
        setMovieConstructionYear(e.target.value);
    }

    function handleDescription(e) {
        setMovieDescription(e.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        const movieData = {
            id: props.movie.id,
            name: movieName,
            image: movieImage,
            year: movieYear,
            description: movieDescription,
        }
        props.onSubmit(movieData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row className="page-margin">
                <Col>
                    <label className="inputs-label" htmlFor="name">Name</label>
                    <input className="inputs" id="name" type="text" required onChange={handleName} value={movieName}/>
                </Col>
                <Col>
                    <label className="inputs-label" htmlFor="image">Image Url</label>
                    <input className="inputs" id="image" type="url" required onChange={hanldeImage} value={movieImage}/>
                </Col>
                <Col>
                    <label className="inputs-label" htmlFor="year">Year of construction</label>
                    <input className="inputs" id="year" type="number" min="0" required onChange={handleConstructionYear} value={movieYear}/>
                </Col>
            </Row>
            <Row className="page-margin">
                <Col>
                    <label className="inputs-label" htmlFor="description">Description</label>
                    <textarea className="inputs" id="description" rows="7" onChange={handleDescription} required value={movieDescription}/>
                </Col>
            </Row>
            <Row className="page-margin">
                <Col className="cancel-button" xs={6}>
                    <button onClick={props.onCancel}>Cancel</button>
                </Col>
                <Col className="save-button" xs={6}>
                    <button className="save-button">Save</button>
                </Col>
            </Row>
        </form>
    );
}

export default EditMovieForm;