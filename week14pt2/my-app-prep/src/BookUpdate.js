import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Table} from "react-bootstrap";
import {Button} from "bootstrap-react";

function BookUpdate(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/books/${id}` ;
    // const {data : book, error, isPending} = useFetch( url );
    const [error, setError ] = useState(  null );
    const [ isPending, setIsPending] = useState(true);
    const [values, setValues] = useState( {
        id: id,
        name: '',
        title: '',
        price: '',
        description: ''
    })
    useEffect( () => {
        // let url = " http://localhost:8000/books";
        console.log("URL->" + url);
        const abortContr = new AbortController();
        // setTimeout( () => {
        let book = '';
        fetch(url, {signal: abortContr.signal})
            .then(resp => {
                // console.log( `resp->`); console.log( resp );
                if (!resp.ok) {
                    throw Error("Cannot fetch URL data for resource")
                }
                return resp.json()
            }).then(data => {
            setIsPending(false);
            setValues({
                ...values,
                title: data.title,
                author: data.author,
                price: data.price,
                description: data.description
            })
            console.log("data=>")
            console.log(data);

            setError(null);
        }).catch((err) => {
            if (err.name == 'AbortError') {
                console.log("Udata Fetch Aborted->")
                console.log(err.message);
            } else {
                console.log("Update Error:");
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        })
    })
    // setBooks( data );
    const [title, setTitle] = useState(values.title);
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("11.99");
    const [description, setDescription] = useState("Your comments here");
    // const navigate = useNavigate();
    const history = useHistory();
    const handleClick = () => {
        let URL = `http://localhost:8000/books/${values.id}`;
        // fetch(URL, {
        //     method: 'DELETE',
        // }).then(() => {
        history.push('/');
        // })
    }
    return (
        <div>
            <h2> Book Update for id:{id}</h2>
            {isPending && <div> Loading </div>}
            {error && <div> {error} </div>}
            {values && (
                <div>
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
                        <tr key={values.id}>
                            <td> {values.title}</td>
                            <td> {values.author}</td>
                            <td> {values.price}</td>
                            <td> {values.description}</td>
                            <td><Button onClick={handleClick}> Update this book {values.id}  </Button></td>
                        </tr>
                        </tbody>
                    </Table>
                    <Link to="/"> Back Home </Link>
                </div>
            )}
        </div>
    );
}

export default BookUpdate;