import React, {useEffect, useState} from 'react';
// import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row, Table} from "react-bootstrap";
import BookList from "./BookList";
import useFetch from "./useFetch";

function Home5(props) {
    const myTitle = "My Book List"
    const url = "http://localhost:8000/books";
    const {data: books, isPending, error} = useFetch(url);

    return (
        <div>
            <Row>
                <Col>
                    <h2> Books 4 U! ok?</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    Books over there!!
                </Col>
                <Col >
                    { error && <div> Error: {error} </div> }
                    { isPending && <div> Loading ... </div> }
                    { books && <BookList  books={books} title={myTitle} /> }
                </Col>
            </Row>
        </div>
    );
}

export default Home5;