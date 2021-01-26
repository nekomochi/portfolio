import React from 'react';
import Anime from 'animejs';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { render } from "react-dom";
import Gallery from "react-photo-gallery";
import { photos } from "./photos";
import logoAD from '../logo_ad.svg';

/* popout the browser and maximize to see more rows! -> */
const BasicRows = () => <Gallery photos={photos} />;

const titleVar = ["Art/Design", ""];


// <AnimeText title="abc testing"></AnimeText>
// const AnimeText = (props) => <Anime {...animeProps}>{props.title}</Anime>;
// let animeProps = {
// 	translateY: {
// 		value: [-100, 0],
// 		duration: 1200
// 	},
// 	opacity:{
// 		value: [0, 1],
// 		delay: 400
// 	},
// 	innerHTML: ["Art/Design", "Art/Development", "Artificial/Design"],
// 	easing: 'easeInOutExpo'
// };
class Home extends React.Component {

	myRef = React.createRef();

	componentDidMount() {
		let basicTimeline = Anime.timeline();
		basicTimeline
			.add({
				targets: this.myRef.current,
				translateY: ["-2em", 0],
				duration: 500,
				easing: "easeInOutExpo"
			});
	}

	componentDidUpdate() {
		// const yFrom = this.props.alterPosition ? "-2em" : "2em";

		// let basicTimeline = Anime.timeline();
		// basicTimeline
		// 	.add({
		// 		targets: this.myRef.current,
		// 		translateY: [-100, 0],
		// 		duration: 500,
		// 		easing: "easeInOutExpo"
		// 	});
	}
	render() {
		const positionClass = this.props.alterPosition ? " otherPosition" : "";
	
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
							<h2>Percieve what you see.</h2>
							<div ref={this.myRef}>
							hello
							</div>
							<p>I believe that design starts with a thought. A thought for people, a thought for the World, et cetera. When I start thinking for others, what could I start and achieve, a passionate spark illuminates in me.
							I am passionate about developing and designing interactive websites with the focus on business goals and user experience. I strive in analyzing and troubleshooting code, accumulating knowledge as I progress. Dynamic and modular aspects in design and code is what inspires my journey.
							</p>
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
}
export default Home;