import "./index.css"

import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';

function UpdateForm(props) {
    const [movieName, setMovieName] = useState();
    const [movieConstructionYear, setMovieConstructionYear] = useState();
    const [movieDescription, setMovieDescription] = useState();

    function handleName(e) {
        setMovieName(e.target.value);
    }

    function handleDescription(e) {
        setMovieDescription(e.target.value);
    }

    function handleConstructionYear(e) {
        setMovieConstructionYear(e.target.value);
    }

    function handleSubmit (event) {
        event.preventDefault();
        if (movieName.length > 0 && movieConstructionYear.length > 0 && movieDescription.length > 0) {
            props.onSubmit(movieName, movieConstructionYear, movieDescription);
            handleName('');
            handleDescription('');
            handleConstructionYear('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Row>
                <Col>
                    <h2>Update Form</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="inputs-label" htmlFor="name">Name</label>
                    <input className="inputs" id="name" type="text" required value={movieName}/>
                </Col>
                <Col>
                    <label className="inputs-label" htmlFor="year">Year of construction</label>
                    <input className="inputs" id="year" type="number" min="0" required value={movieConstructionYear}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <label className="inputs-label" htmlFor="description">Description</label>
                    <textarea className="inputs" id="description" rows="7" required value={movieDescription}/>
                </Col>
            </Row>
            <Row>
                <Col className="cancel-button" xs={6}>
                    <button>Cancel</button>
                </Col>
                <Col className="save-button" xs={6}>
                    <button className="save-button">Save</button>
                </Col>
            </Row>
        </form>
    );
}

export default UpdateForm;