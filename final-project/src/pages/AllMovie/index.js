import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import classes from './index.module.css';
import api from "../../api/api";
import ListView from '../../components/ListView';
import GridView from '../../components/GridView';
import MovieItem from "./MovieItem";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AllMoviesPage() {
    const [movieList, setMovieList] = useState();
    const [isListView, setIsListView] = useState(true);
    const [isListEmpty, setIsListEmpty] = useState(true);
    const histroy = useHistory();

    useEffect(() => { 
        api.fetchMovieList()
            .then((response) => {
                console.log(response.data);
                setMovieList(response.data);
                if (Object.keys(response.data).length > 0) {
                    setIsListEmpty(false);
                }
            }).catch((error) => {
                console.log(error);
                setIsListEmpty(true);
                setMovieList([]);
            }); 
    }, []);

    function toggleListGridHandler() {
        setIsListView(!isListView);
    }

    function addButtonHandler () {
        histroy.push('/add-movie');
    }

    if (isListEmpty) {
        return (
            <section>
                <Row>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                    <Col className={classes.addButton}>
                        <button title="Add Movie">ADD</button>
                    </Col>
                </Row> 

                <Row>
                    <h4>There is no Movie yet! Do you want to add some?</h4>
                </Row>
            </section>
        );
    }

    return (
        <section>
            <Row>
                <Col>
                    <h2>Home</h2>
                </Col>
                <Col className={classes.addButton}>
                    <button title="Add Movie" onClick={addButtonHandler}>ADD</button>
                </Col>
            </Row> 

            <Row>
                <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Search..." />
                </div>
                <div className="col-md-6 text-right">       
                    <button  onClick={toggleListGridHandler}>
                        {isListView ? "List" : "Grid" }
                    </button>
                </div>
            </Row>

            {isListView ? <ListView movieList={movieList} /> : <GridView movieList={movieList} />}
        </section>
    );
}

export default AllMoviesPage;