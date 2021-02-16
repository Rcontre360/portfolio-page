import React from "react";
import {css} from "styled-components";
import marked from "marked";
import {Route,Link,useHistory} from "react-router-dom";
import projectsData from "../utils/projectContent.json";
import {
	shortenRouterPath,
	useWindowResize,
	setRelativeUrl
} from "../utils";
import {
	AnimatedElement,
	moveAnimation,
	fadeAnimation,
	flexStyle,
	hoverStyles,
	Container,
	MainContainer,
	colors,
	media
} from "./styledComponents";
import {
	List,
	Navbar,
	ListLink
} from "./list";
import {
	Carousel,
	PopUp,
	ResultsDisplay,
	CardElement
} from "./units";

const setProjectsUrl = projects=>{
	return projects.map(project=>{
		project.images = project.images.map(img=>{
			img.src = setRelativeUrl(img.src);
			return img;
		});
		return project;
	});
}

export const ProjectContent = (props)=>{
	const [projects,setProjects] = React.useState(projectsData);

	const appearProjects = async e=>{
		if (e.target.className==="nav-link"){
			const path = e.target.href.split("/")[4];

			let projectsShown = projectsData.filter(el=>{
				const pass = el.labels.find(label=>label===path);
				return pass;
			}).map(el=>{
				el.route = `/${path+el.originalRoute}`;
				return el;
			});

			await setProjects([]);
			await setProjects([...projectsShown]);
		}
	}

	const items = [
		{children:"React",to:"/react",router:true,onClick:appearProjects.bind(this)},

		{children:"Javascript",to:"/javascript",router:true,onClick:appearProjects.bind(this)},

		{children:"Node",to:"/node",router:true,onClick:appearProjects.bind(this)},

		{children:"Express",to:"/express",router:true,onClick:appearProjects.bind(this)},

		{children:"Mongo",to:"/mongo",router:true,onClick:appearProjects.bind(this)},

		{children:"Plain webpage",to:"/webpage",router:true,onClick:appearProjects.bind(this)}
	];

	return(
	<MainContainer
		id="Projects"
		css={`
			padding-top:3em;

			background-image:
			linear-gradient(to top,rgba(144, 55, 73, 0.7),${colors["primary"]}),
			url(${setRelativeUrl("/assets/code-low.jpg")});
			

			background-size:cover;
			.project_title{ margin:0.5em; }
		`}
	>
		<AnimatedElement
			animation={[fadeAnimation]}
		>
			<h1 className="project_title">Projects</h1>
		</AnimatedElement>
		<ResultsDisplay 
			height={"auto"}
			animated
			navItems={items} 
			width="80vw"
			css={`
				${media("normal",`
					width:95%;
				`)}
				max-width:1000px;
				.nav-item{
					padding:1em;
				}
			`}
		>
			<List 
				css={`
					${flexStyle()}
					flex-wrap:wrap;
				`} 
				listItems={setProjectsUrl(projects)} 
				Item={Project}
			/>
		</ResultsDisplay>
	</MainContainer>
	);
}

export const Project = (props)=>{
	const [activePopup,setActivePopup] = React.useState(false);
	const {
		name,
		images,
		description,
		route,
		id,
		projectPages,
		links
	} = props;
	const history = useHistory();

	const windowMedium = !useWindowResize(600);
	const windowNormal = !useWindowResize(750);
	const windowHuge = useWindowResize(1200);
	const windowOverHuge = useWindowResize(1700);

	return(
	<React.Fragment>
		<AnimatedElement
			animation={[moveAnimation,fadeAnimation]}
			delay="0.5s"
			initialAppear
			time={id*100}
		>
			<CardElement 
				title={name} 
				image={images[0].src} 
				appear
				width="30vw"
				height="30vw"
				onClick={e=>{
					if (!e.target.classList.contains("no_popup")){
						history.push(`${route}/description`);
						setActivePopup(true);
					}
				}}
				css={css`
					${media("normal",`
						width:35vw;
						height:35vw;
					`)}
					${media("medium",`
						width:50vw;
						height:50vw;
					`)}
					${media("small",`
						width:80vw;
						height:80vw;
					`)}
					margin:0.5em; 
					position:relative;
					p{font-size:130%;}
					.card_body{flex-direction:column;}
					.links{
						${flexStyle("row","space-around")}
						position:absolute;
						bottom:0;
						width:100%;
						margin-bottom:0.5em;
						a{
							${hoverStyles("scale")}
							display:block;
							text-aling:center;
							transition:0.5s;
						}
					}
				`}
			>	

				<p>{description}</p>
				<div className="links no_popup">
					<a 
						className="no_popup" 
						href={links.live} 
						target="_blank"
					>
						<i className="i fa fa-eye no_popup"></i>
						<p className="no_popup">live</p>
					</a>
					<a 
						className="no_popup" 
						href={links.code} 
						target="_blank"
					>
						<i className="fa fa-code no_popup"></i>
						<p className="no_popup" >repository</p>
					</a>
				</div>
			</CardElement>
		</AnimatedElement>
		<Route path={`${route}`}>
			<AnimatedElement
				animation={[fadeAnimation]}
				delay="0.5s"
				initialAppear
			>
				<PopUp 
					setOff={()=>history.push(shortenRouterPath(route))}
					css={css`
						.popup_close{
							${media("medium",`
								top:calc(-12.5px - 1em);
							`)}
						}
					`}
				>
					<Container css={css`
						${windowHuge && `align-items:flex-start;`}
						${media("normal",`
							${flexStyle("column")}
						`)}
					`}>
						<Carousel 
							images={images} 
							width={
							windowHuge?
								(windowOverHuge?"30vw":"25vw")
								:
								windowNormal?
									(windowMedium?"70vw":"50vw")
								:"30vw"
							}
							height={
							windowHuge?
								(windowOverHuge?"30vw":"25vw")
								:
								windowNormal?
									(windowMedium?"70vw":"50vw")
								:"30vw"
							}
							unit="vw"
						/>
						<ResultsDisplay 
							width={windowNormal?"70vw":"50vw"} 
							height="60vh" 
							navItems={
							projectPages.map(page=>{
								page.children = page.title
								return {...page,to:`${route}${page.to}`}
							})}
							css={`
								${media("huge",`
									font-size:130%;
								`,false)}
								${media("normal",`
									margin-top:1em;
								`)}
								margin-left:0.5em;
								.nav-item{
									padding:1em 5px;
								}
							`}
						>
						{
							projectPages.map((page,id)=>{
								const {to,title,content} = page;

								return(
								<Route 
									path={`${route}${to}`} 
									key={id}
								>
									<Container 
										flex="column" 
										align="flex-start"
									>
										<h2>{title}</h2>
										<div dangerouslySetInnerHTML={
											{__html:marked(content)}
										}>
										</div>
									</Container>
								</Route>
								);
							})
						}
						</ResultsDisplay>
					</Container>
				</PopUp>
			</AnimatedElement>
		</Route>
	</React.Fragment>
	);
}