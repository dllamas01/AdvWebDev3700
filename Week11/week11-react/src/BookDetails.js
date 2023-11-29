import React from 'react';
import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Table} from "react-bootstrap";

function BookDetails(props) {
    const {id} = useParams();
    const url = `http://localhost:8000/books/${id}`;
    const {data : book, isPending, error} = useFetch(url);
    return (
        <div>
            {error && <div> {error}</div>}
            {isPending && <div> Loading...... </div>}

            {book && (
                <div>
                    <h2> Book Details are Here for {id}</h2>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th> Title</th>
                            <th> Author</th>
                            <th> Price</th>
                            <th> Description</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.price}</td>
                            <td>{book.description}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            )}
        </div>
    );
}

export default BookDetails;