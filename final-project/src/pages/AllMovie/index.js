import { useEffect, useState } from "react";
import { Row, Col } from 'react-bootstrap';
import classes from './index.module.css';
import api from "../../api/api";
import ListView from '../../components/ListView';
import GridView from '../../components/GridView';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AllMoviesPage() {
    const [movieList, setMovieList] = useState();
    const [isListView, setIsListView] = useState(true);
    const [isListEmpty, setIsListEmpty] = useState(true);
    const [search, setSearch] = useState();
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

    useEffect(() => { 
        if (search) {
            api.fetchFilteredMovieList(search)
            .then((response) => {
                setMovieList(response.data);
                if (Object.keys(response.data).length > 0) {
                    setIsListEmpty(false);
                }
            }).catch((error) => {
                setIsListEmpty(true);
                setMovieList([]);
            });
        }
        else {
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
        }
    }, [search]);


    function searchHandler(e) {
        setSearch(e.target.value);
    }

    function toggleListGridHandler() {
        setIsListView(!isListView);
    }

    function addButtonHandler () {
        histroy.push('/add-movie');
    }

    if (isListEmpty) {
        return (
            <section>
                <Row className={classes.pageMargin}>
                    <Col>
                        <h2>Home</h2>
                    </Col>
                    <Col className={classes.addButton}>
                        <button onClick={addButtonHandler} title="Add Movie">ADD</button>
                    </Col>
                </Row>
                <Row className={classes.pageMargin}>
                    <h4>There is no Movie yet! Do you want to add some?</h4>
                    <h5>You can use the ADD button to add movies.</h5>
                </Row>
            </section>
        );
    }

    return (
        <section>
            <Row className={classes.pageMargin}>
                <Col>
                    <h2>Home</h2>
                </Col>
                <Col className={classes.addButton}>
                    <button title="Add Movie" onClick={addButtonHandler}>ADD</button>
                </Col>
            </Row> 
            <Row className={classes.pageMargin}>
                <Col className={classes.searchBar}>
                    <input type="text" className="form-control" placeholder="Search..." onChange={searchHandler} value={search}/>
                </Col>
                <Col className={classes.toggleButton}>       
                    <button onClick={toggleListGridHandler}>
                        {isListView ? "List" : "Grid" }
                    </button>
                </Col>
            </Row>

            {isListView ? <ListView movieList={movieList} /> : <GridView movieList={movieList} />}
        </section>
    );
}

export default AllMoviesPage;