/* eslint-disable */

import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, NavDropdown, Nav, Carousel } from 'react-bootstrap';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';


function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return ( //<p>모든 사진 데이터는 다크빅토리의 최소윤님입니다.</p>
        <Carousel activeIndex={index} onSelect={handleSelect} >

            <Carousel.Item>
                <img
                    className="Cimg"
                    src="img/SY01.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First, Lovely</h3>
                    <p>Green Cardigan</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Cimg"
                    src="img/SY02.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second, RockChic</h3>
                    <p>Black Leather jacket</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="Cimg"
                    src="img/SY03.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third, Feminine</h3>
                    <p>White Off shoulder blouse</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function App() {

    let [item, item변경] = useState(Data);

    return (

        <div className="App" style={{ backgroundColor: "#eeeeee" }}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">SnapShop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path="/">
                    <div style={{ margin: "3%" }} />
                    <ControlledCarousel />
                    <hr style={{
                        margin: "3%",
                        height: "5px",
                        textAlign: "center",
                        border: "solid 3px #75a8b6"
                    }} />
                    <div className="container">
                        <div className="row">
                            {
                                item.map((a, i) => {
                                    return <Card item={item[i]} i={i} key={i} />
                                })
                            }
                        </div>
                    </div>
                </Route>

                <Route path="/detail/:id">  {/*URL 파라미터 문법 예시로 id 지정*/}
                    <Detail item={item} />
                </Route>

                <Route path="/:id">
                    <div>잘못된 경로입니다.</div>
                </Route>

            </Switch>

            <div style={{ padding: "50px" }} />
        </div >
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <Link to={"/detail/" + props.i}>
                <img src={"./img/item0" + props.i + ".jpg"} width="100%" />
            </Link>
            <h5>{props.item.title}</h5>
            <h6>{props.item.content}</h6>
            <p>\{props.item.price}</p>
        </div >
    )
}

export default App;
