import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import BookList from "./BookList";
import {Button} from "bootstrap-react";
import useFetch from "./useFetch";

function Books () {
    let url = " http://localhost:8000/books";
    const {data : books, isPending, error} = useFetch( url )
    const myTitle = "Books 4 u 4 Sale V2!!!!!"
    const myTitle14 = " Books at 14.99"
    return (
        <Row>
            <Col sm={3}>
            </Col>
            <Col sm={3}>
                { error && <div> Error: {error} </div> }
                {isPending && <div> Loading ...</div>}
                { books && <BookList books={books} title={myTitle}/>}
            </Col></Row>
    )
}
export default Books;

