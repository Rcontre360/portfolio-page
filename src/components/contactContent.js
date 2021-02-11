import React from "react";
import {List} from "./list";
import {InputElement,IconElement} from "./units";
import {
	MainContainer,
	Container,
	Form,Input,
	Button,
	BorderedStyled,
	flexStyle
} from "./styledComponents";


export const ContactContent = (props)=>{
	const items=[
	{i:{className:"fab fa-github"},className:"btn",link:true},
	{i:{className:"fa fa-envelope"},className:"btn",link:true},
	{i:{className:"fab fa-linkedin"},className:"btn",link:true},
	{i:{className:"fab fa-stack-overflow"},className:"btn",link:true}
	]

	return(
		<MainContainer css={`
			${flexStyle("row","space-around")}
		`}>
			<Form css={`width:30%;`}>
				<Container css={flexStyle("column")}>
					<h1>Contact me!</h1>
					<InputElement input={{name:"Name"}}/>
					<InputElement input={{name:"Email"}}/>
					<InputElement input={{name:"Content",Input:"textarea"}}/>
					<BorderedStyled 
						css={`
							align-self:center;
							padding:0.3em;
							width:50%;
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
			<section>
				<List listItems={items} Item={IconElement}/>
			</section>
		</MainContainer>
	);
}