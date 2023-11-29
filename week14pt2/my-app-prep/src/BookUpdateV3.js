import React, {useEffect, useState} from 'react';
import {Link, useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {Table} from "react-bootstrap";
import {Button} from "bootstrap-react";
import Form from "react-bootstrap/Form";

function BookUpdateV3(props) {
    const {id} = useParams();
    let url = `http://localhost:8000/books/${id}` ;
    let {data, error, isPending} = useFetch( url );
    // const [error, setError ] = useState(  null );
    // const [ isPending, setIsPending] = useState(true);
    const [values, setValues] = useState( {
        id: id,
        name: 'name',
        title: '',
        price: '10.99',
        description: 'dd'
    })
    const handleDescriptionChange = (event) => {
        console.log("FLAG->"); console.log( event );
        setValues({...values, description : event.target.value} );
    };
    //---
    // setBooks( data );
    const [title, setTitle] = useState(values.title);
    const [author, setAuthor] = useState(values.author);
    const [price, setPrice] = useState(values.price);
    const [description, setDescription] = useState(values.description);
    // const navigate = useNavigate();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        let URL = `http://localhost:8000/books/${values.id}`;
        fetch( URL , {
            method: 'PUT',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(values)
        }).then(() => {
            console.log("Added new blog");
            // useHistory.go(-1);
            history.push('/');
        })
    }
    // })
    return (
        <div>
            <h2> Book UpdateV2 for id:{id} V3</h2>
            {isPending && <div> Loading </div>}
            {error && <div> {error} </div>}
            {values && (
                <div>
                    <Form onSubmit={handleSubmit}  >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title:</Form.Label>
                            <Form.Control type="text" placeholder="Title"
                                          required
                                          value={values.title || ''}
                                          onChange={ (e) => setValues({...values, title : e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAuthor">
                            <Form.Label>Author:</Form.Label>
                            <Form.Control type="text" placeholder="Author" required
                                          value={values.author || ''}
                                          onChange={ (e) => setValues({...values, author : e.target.value})}
                            />
                        </Form.Group>
                        <Form.Select aria-label="Default select example"
                                     value={values.price || ''}
                                     onChange={ (e) => setValues({ ...values, price: e.target.value} )}
                        >
                            <option value="9.99"> 9.99</option>
                            <option value="10.99" > 10.99</option>
                            <option value="11.99"> 11.99</option>
                        </Form.Select>
                        <label> Price:</label>

                        <Form.Group controlId="description">
                            <Form.Label>Description:</Form.Label>
                            {/* Controlled textarea */}
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={values.description || ''}
                                onChange={handleDescriptionChange}
                            />
                        </Form.Group>
                        {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                        {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}
                        {/*{isPending ? <Button variant="primary" type="submit">Submit</Button>*/}
                        {/*          : <Button disabled variant="primary" type="submit">Adding  Content </Button>}*/}

                    </Form>
                    <ol>
                        <li>title:{values.title || ''}</li>
                        <li>Author:{values.author || ''}</li>
                        <li>{values.price || ''}</li>
                        <li>{values.description || ''}</li>
                    </ol>
                    <Link to="/"> Back Home </Link>
                </div>
            )}
        </div>
    );
}

export default BookUpdateV3;