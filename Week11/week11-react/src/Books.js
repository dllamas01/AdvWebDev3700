import React from 'react';
import {Table} from "react-bootstrap";

function Books() {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th> Title</th>
                    <th> Author</th>
                    <th> Price</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td> The Hobbit</td>
                    <td> J R Tolkien </td>
                    <td> 12.99 </td>
                </tr>
                <tr>
                    <td> Dune </td>
                    <td> F. Herbert </td>
                    <td> 13.99 </td>
                </tr>
                <tr>
                    <td> I Robot</td>
                    <td> Asimov </td>
                    <td> 14.99 </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Books;