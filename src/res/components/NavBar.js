import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate, useNavigation } from 'react-router-dom';

const checkToken = () => localStorage.getItem('token');

function NavBar() {
    const navigate = useNavigate(); // Correct usage of useNavigate hook

    const signout = () => {
        localStorage.clear();
        navigate("/")
    }

    return (
        <Navbar className="bg-body-tertiary bg-dark text-white" expand="lg">
            <Container className="pl-4 pr-4">
                <Navbar.Brand href="#home" className='text-white'>OneFactor</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='text-white' />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">

                        {/* {checkToken() ? <Nav.Link href="#features" className='text-white'>Opportunities</Nav.Link> : null}
                        {checkToken() ? <Nav.Link href="#inbox" className='text-white'>Inbox</Nav.Link> : null}
                        {checkToken() ? <Nav.Link href="#profile" className='text-white'><Link to="/r/profile" className="text-white">Profile</Link></Nav.Link> : null} */}

                        {checkToken() ? <Nav.Link onClick={() => signout()} className='text-white'>Sign out</Nav.Link> : null}
                        {checkToken() ? <Nav.Link className='text-white' style={{ backgroundColor: "#19927A" }}>

                            <Link to="/referrer/form" className="text-white" style={{ textDecoration: 'none' }}>For referrers</Link>
                        </Nav.Link> : null}
                        {!checkToken() ? <Nav.Link href="#signout" className='text-white'><Link to="/r/signin" className="text-white">Sign in</Link></Nav.Link> : null}
                        {!checkToken() ? <Nav.Link href="#signout" className='text-white'><Link to="/r/signup" className="text-white">Sign up</Link></Nav.Link> : null}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default NavBar;
