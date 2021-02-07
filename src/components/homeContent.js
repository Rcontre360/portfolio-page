import React from "react";
import styled from "styled-components";
import {initParticles} from "../utils";

const ImageWrapper = styled.div`
	background: url("/assets/code.jpg");
`;

export const HomeContent = (props)=>{

	React.useEffect(()=>{
		initParticles(".image");
	},[]);

	return(
		<main className="home_content" id="home">
			<canvas className="image"></canvas>
			<div className="title_wrapper">
				<h1 className="title">I´m Rafael Contreras</h1>
				<p>and I´m a <span>Frontend Developer</span></p>
			</div>
		</main>
	);
}

