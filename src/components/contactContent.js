import React from "react";
import styled,{keyframes,css} from "styled-components";
import {List} from "./list";
import {InputElement,IconElement} from "./units";
import {
	MainContainer,
	Container,
	Form,Input,
	Button,
	BorderedStyled,
	flexStyle,
	media,
	colors
} from "./styledComponents";

const test = keyframes`
	from{
		transform:rotate(0deg);
	}
	to{
		transform:rotate(360deg);
	}
`;

const RotatingIcon = styled(IconElement)`
	position:relative;
	width:100%;
	.icon{
		font-size:200%;
		transition:0.7s;
		&:hover{
			transition:0.7s;
			transform:rotate(360deg);
			color:${colors["primary"]};
		}
	}
	&:hover::before{
		transition:transform 1s;
		transform:scale(1);
		animation:4s linear 0.7s infinite ${test};
	}
	&::before{
		content:"";
		position:absolute;
		top:-1em;
		left:-0.1em;
		width:2em;
		height:2.5em;
		border-radius:100%;
		z-index:-100;
		transform:scale(0);
		background:${colors["text"]};
	}
	.icon_text{
		position:absolute;
		top:-0.5em;
		left:2.5em;
		display:block;
		padding:2px;
		transform:scaleX(0);
		transform-origin:left;
		border-radius:20px;
		transition:0.5s;
		visibility:hidden;
		border:solid ${colors["text"]} 3px;
		z-index:-100;
	}
	&:hover .icon_text{
		visibility:visible;
		transform:scaleX(1);
		transform-origin:left;
		transition:0.7s;
	}
`

export const ContactContent = (props)=>{
	const items=[
	{
		i:{className:"fab fa-github icon"},
		className:"btn",
		link:true,
		children:<p href="https://github.com/Rcontre360/" target="_black" className="icon_text">https://github.com/Rcontre360/</p>
	},
	{
		i:{className:"fa fa-envelope icon"},
		className:"btn",
		link:true,
		children:<p className="icon_text">rcontreraspimentel@gmail.com</p>
	},
	{
		i:{className:"fab fa-linkedin icon"},
		className:"btn",
		link:true,
		children:<p href="https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203" target="_blank"className="icon_text">https://www.linkedin.com/in/rafael-contreras-pimentel-8b0b67203</p>
	}
	]

	return(
		<MainContainer 
			id="Contact"
			css={`
				${media("normal",`
					${flexStyle("column")}
				`)}
				${flexStyle("row","space-around")}
				align-items:flex-start;
				h1{
					margin:0.3em;
					font-size:30px;
				}
			`}
		>
			<Form css={`
				${media("normal",`
					width:60vw;
				`)}
				${media("small",`
					.input_element{
						${flexStyle("column","flex-start")}
					}
				`)}
				width:30vw;
				text-align:center;
				.input_element{
					width:100%;
					padding:0.2em;
					margin:0.2em;
					font-size:20px;
				}
			`}>
				<h1>Contact me!</h1>
				<Container css={flexStyle("column","flex-start")}>
					<InputElement 
						className="input_element"
						input={{name:"Name"}}
					/>
					<InputElement 
						className="input_element"
						input={{name:"Email"}}
					/>
					<InputElement 
						className="input_element"
						input={{name:"Content",Input:"textarea"}}
					/>
					<BorderedStyled 
						css={`
							align-self:center;
							padding:0.3em;
							width:50%;
							margin:1em;
							${flexStyle()}
						`}
					>
						<Button 
							type="submit" 
							css={`
								background:transparent;
							`}
						>
						Submit
						</Button>
					</BorderedStyled>
				</Container>
			</Form>
			<Container css={`
				${media("normal",`
					width:50vw;
				`)}
				${media("small",`
					width:90%;
				`)}
				${flexStyle("column","flex-start")}
				width:30vw;
				h1{
					width:100%;
					text-align:center;
				}
			`}>
				<h1>Know more at</h1>
				<List 
					listItems={items} 
					Item={RotatingIcon}
					css={`
						${flexStyle("column","flex-start")}
						li{
							margin:0.5em;
							padding:0.5em;
							width:100%;
						}
					`}
				/>
			</Container>
		</MainContainer>
	);
}