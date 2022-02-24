import './AddMovieForm.css';

import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function AddMovieForm(props) {
    const [movieName, setMovieName] = useState();
    const [movieImage, setMovieImage] = useState();
    const [movieYear, setMovieConstructionYear] = useState();
    const [movieDescription, setMovieDescription] = useState();

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
            name: movieName,
            image: movieImage,
            year: movieYear,
            description: movieDescription,
        }
        props.onSubmit(movieData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
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
            <Row>
                <Col>
                    <label className="inputs-label" htmlFor="description">Description</label>
                    <textarea className="inputs" id="description" rows="7" onChange={handleDescription} required value={movieDescription}/>
                </Col>
            </Row>
            <Row>
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

export default AddMovieForm;