import './App.css';
import {Navbar, Nav, Container} from "react-bootstrap";
import {useAuth} from "./auth";
function NavBar () {
    const auth = useAuth();
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/create">Create</Nav.Link>
                    <Nav.Link href="/profile">Profile</Nav.Link>
                    {
                        !auth.user && <Nav.Link to='/Login' >
                            Login </Nav.Link>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;