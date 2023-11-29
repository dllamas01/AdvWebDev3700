import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
// import { useNavigate } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function Create(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState("11.99");
    const [description, setDescription] = useState("Your comments here");

    const [ isPending, setIsPending ] = useState(false);
    // const navigate = useNavigate();
    const history = useHistory();

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page refresh
        const book = {  description, price, author, title } // create book object
        console.log( `book=`); console.log( book );
        setIsPending( true );
        let URL = "http://localhost:8000/books";
        fetch( URL , {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            console.log("Added new blog");
            setIsPending( false );
            // useHistory.go(-1);
            history.push('/');

        })
    }
    return (
        <div>
            <h2> Add A New Book </h2>
            <Form onSubmit={handleSubmit} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="Title"
                              required
                              value={title}
                              onChange={ (e) => setTitle(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicAuthor">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Author" required
                              value={author}
                              onChange={ (e) => setAuthor(e.target.value)}/>
            </Form.Group>
            <Form.Select aria-label="Default select example"
                         value={price}
                         onChange={ (e) => setPrice(e.target.value)}
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
                    value={description}
                    onChange={handleDescriptionChange}
                />
            </Form.Group>
                {!isPending && <Button variant="primary" type="submit">Submit</Button>}
                {isPending && <Button disabled variant="primary" type="submit">Adding  Content </Button>}
                {isPending ? <Button variant="primary" type="submit">Submit</Button>
                          : <Button disabled variant="primary" type="submit">Adding  Content </Button>}

            </Form>
            <ol>
                <li>title:{title}</li>
                <li>Author:{author}</li>
                <li>{price}</li>
                <li>{description}</li>
            </ol>
        </div>
    );
}

export default Create;