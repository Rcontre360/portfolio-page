import React from "react";
import styled,{css} from "styled-components";
import {initParticles} from "../utils";
import {
	BorderedStyled,
	customStyled,
	flexStyle,
	Container,
	colors,
	media
} from "./styledComponents";

const ImageWrapper = styled.div`
	background: url("/assets/code.jpg");
`;

const Main = customStyled("main",`
	position: relative;
	width:100%;
	height: 100vh;
	span{
		color:${colors["text"]};
	}
`);

const Canvas = customStyled("canvas",`
	${flexStyle()}
	width:100%;
	height: 100%;
	background-size:cover;
	background:
		linear-gradient(to bottom,${colors["primary"]} 40%,${colors["auxiliar"]});
`);

export const HomeContent = (props)=>{

	React.useEffect(()=>{
		initParticles(".image",{});
	},[]);

	return(
		<Main id="Home">
			<Canvas className="image"></Canvas>
			<Container 
				css={`
					${media("tiny",`
						top:25%;
					`)}
					${media("normal",`
						font-size:120%;
						width:100%;
					`)}
					${flexStyle("column")}
					width:50%;
					color:lightgrey;
					position:absolute;
					right:50%;
					transform: translateX(50%);
					top:35%;
					font-size:150%;
					text-align: center;
				`}
			>
				<h1>Hello I´m <span>Rafael Contreras</span>
				</h1>
				<p>and I´m a 
					<span>Frontend Developer</span>
				</p>
				<a href="#Projects"> 
					<BorderedStyled css={css`margin:1em;padding:1em;font-size:75%;`}>
						See my work 
					</BorderedStyled>
				</a>
			</Container>
		</Main>
	);
}

