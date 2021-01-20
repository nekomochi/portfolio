import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import logoAD from '../logo_ad.svg';

/* popout the browser and maximize to see more rows! -> */
const BasicRows = () => <Gallery photos={photos} />;

function Home(){
	return (
		<Container className="colour-row" fluid>
			<div className="home-margin">
				<Row>
					<Col lg={2}>
						Logo
						<div className="home-top">
							<img src={logoAD} className="home-logo" alt="Art&Design" />
						</div>
					</Col>
					<Col id="photos" xs lg={10}>
						<BasicRows />
					</Col>
				</Row>
				<Row>
					<Col lg={5} className="text-left">
						<h2>Perceive what you see.</h2>
						<p>I believe that design starts with a thought. A thought for people, a thought for the World, et cetera. When I start thinking for others, what could I start and achieve, a passionate spark illuminates in me.</p>
						<a href="#">Download Resume</a>
					</Col>
					<Col lg={7}>
						<img src="https://source.unsplash.com/Dm-qxdynoEc/800x799" alt="" />
					</Col>
				</Row>
			</div>
		  <Row className="justify-content-md-center">
		    <Col xs lg="2">
		      1 of 3
		    </Col>
		    <Col md="auto">Variable width content</Col>
		    <Col xs lg="2">
		      3 of 3
		    </Col>
		  </Row>
		  <Row>
		    <Col>1 of 3</Col>
		    <Col md="auto">Variable width content</Col>
		    <Col lg="2">
		      3 of 3
		    </Col>
		  </Row>
		  <Row>
		    <Col sm={8}>sm=8</Col>
		    <Col sm={4}>sm=4</Col>
		  </Row>
		  <Row>
		    <Col sm>sm=true</Col>
		    <Col sm>sm=true</Col>
		    <Col sm>sm=true</Col>
		  </Row>
		</Container>
	);
}
export default Home;