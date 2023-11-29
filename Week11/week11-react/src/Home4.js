import React, {useEffect, useState} from 'react';
// import Books from "./Books";
import {Button} from "bootstrap-react";
import {Col, Row, Table} from "react-bootstrap";
import BookList from "./BookList";

function Home4(props) {
    const myTitle = "My Book List"

    const [ books, setBooks ] = useState( null );
    const[ isPending, setIsPending ] = useState( true);
    const[ error, setError ] = useState( null );
    useEffect( () => {
        let url ="http://localhost:8000/books";
        setTimeout( () => {
            fetch ( url )
                .then( resp => {
                    if ( !resp.ok ){
                        throw Error( "Cannot fetch URL for data resource");
                    }
                    return resp.json()
                }).then( data => {
                setIsPending( false)
                setBooks( data );
                setError( null );
            }).catch( ( err ) => {
                console.log( "Error->");
                console.log( err.message );
                setError( err.message );
            })
        }, 2000)
    }, []);
    return (
        <div>
            <Row>
                <Col>
                    <h2> Books 4 U!</h2>
                </Col>
            </Row>
            <Row>
                <Col sm={2}>
                    Books over there
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

export default Home4;