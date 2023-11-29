import React, {useState} from 'react';
import {Form} from "react-bootstrap";

function Create(props) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [price, setPrice] = useState(11.99);
    const [desc, setDesc] = useState("");
    const handleDescChange = (event) => (
        setDesc(event.target.value)
    )

    return (
        <div>
            <h2> Add A New Book</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formTitle">
                    <Form.Label>Title:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Title"
                                  value={title}
                                  required
                                  onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAuthor">
                    <Form.Label>Author:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Author"
                                  value={author}
                                  required
                                  onChange={(e) => setAuthor(e.target.value)}
                    />
                    <Form.Label>Price: </Form.Label>
                    <Form.Select aria-label="Default select example"
                                 value={price}
                                 required
                                 onChange={(e) => setPrice(e.target.value)}
                    >
                        <option value="10.99">$10.99</option>
                        <option value="11.99">$11.99</option>
                        <option value="12.99">$12.99</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control as="textarea" rows={3}
                        // value={desc}
                        // required
                        // onChange={(e) => setDesc(e.target.value)}
                                  value={desc} onChange={handleDescChange}
                    />
                </Form.Group>
                <li>Title: {title}</li>
                <li>Author: {author}</li>
                <li>Price: {price}</li>
                <li>Description: {desc}</li>
            </Form>
        </div>
    );
}

export default Create;