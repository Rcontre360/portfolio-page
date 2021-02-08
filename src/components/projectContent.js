import React from "react";
import {css} from "styled-components";
import {Route,useHistory,useLocation} from "react-router-dom";
import {List,Navbar,ListLink} from "./list";
import {Carousel,PopUp,ResultsDisplay,CardElement} from "./units";

const projectsData = [
		{
			name:"Chat Application",
			images:[
				{text:"React",src:"/assets/react.png"},
				{text:"Node",src:"/assets/node.png"},
				{text:"CSS",src:"/assets/css.png"},
				{text:"Javascript",src:"/assets/javascript.png"},
			],
			description:"A chat app built with react ad socket.io",
			route:"/chat_app",
			originalRoute:"/chat_app",
			labels:["javascript","react","node","express","mongo"]
		},
		{
			name:"Calculator",
			images:[
				{text:"React",src:"/assets/react.png"},
				{text:"Node",src:"/assets/node.png"},
				{text:"CSS",src:"/assets/css.png"},
				{text:"Javascript",src:"/assets/javascript.png"},
			],
			description:"A chat app built with react ad socket.io",
			route:"/calculator",
			originalRoute:"/calculator",
			labels:["javascript","react"]
		},
		{
			name:"Documentation page",
			images:[
				{text:"React",src:"/assets/react.png"},
				{text:"Node",src:"/assets/node.png"},
				{text:"CSS",src:"/assets/css.png"},
				{text:"Javascript",src:"/assets/javascript.png"},
			],
			description:"A chat app built with react ad socket.io",
			route:"/docs_page",
			originalRoute:"/docs_page",
			labels:["webpage"]
		},
		{
			name:"Movie Searcher",
			images:[
				{text:"React",src:"/assets/react.png"},
				{text:"Node",src:"/assets/node.png"},
				{text:"CSS",src:"/assets/css.png"},
				{text:"Javascript",src:"/assets/javascript.png"},
			],
			description:"A chat app built with react ad socket.io",
			route:"/movie_searcher",
			originalRoute:"/movie_searcher",
			labels:["react","javascript"]
		}
	];

export const ProjectContent = (props)=>{
	const [projects,setProjects] = React.useState(projectsData);
	const location = useLocation();

	const items = [
		{children:"React",to:"/react",router:true},
		{children:"Javascript",to:"/javascript",router:true},
		{children:"Node",to:"/node",router:true},
		{children:"Express",to:"/express",router:true},
		{children:"Mongo",to:"/mongo",router:true},
		{children:"Plain webpage",to:"/webpage",router:true}
	];

	React.useEffect(()=>{

		const path = location.pathname.split("/");
		setProjects(prev=>{
			let projectsShown = projectsData.filter(el=>{
				const pass = el.labels.find(label=>label===path[1]);
				return pass;
			}).map(el=>{
				el.route = `/${path[1]+el.originalRoute}`;
				return el;
			});
			return projectsShown;
		});

	},[location]);

	return(
	<div className="project_container" id="Projects">
		<h1 className="project_title">Projects</h1>
		<ResultsDisplay navItems={items} width="50vw">
			<List className="project_list" listItems={projects} Item={Project}/>
		</ResultsDisplay>
	</div>
	);
}

export const Project = (props)=>{
	const [activePopup,setActivePopup] = React.useState(false);
	const {name,images,description,route} = props;
	const history = useHistory();

	const projectPages = [
		{children:"Description",
		to:`${route}/description`,
		router:true},

		{children:"features",
		to:`${route}/features`,
		router:true},

		{children:"Technologies/Dependencies",
		to:`${route}/details`,
		router:true},

		{children:"Links",
		to:`${route}/links`,
		router:true},
	]

	return(
	<React.Fragment>
		<CardElement 
			title={name} 
			image={images[0].src} 
			appear
			width="200px"
			height="200px"
			onClick={()=>{
				history.push(`${route}/description`);
				setActivePopup(true);
			}}
			css={css`
				margin:0.5em; 
				p{font-size:130%;}
				.card_body{flex-direction:column;}
			`}
		>
			<p>{description}</p>
		</CardElement>
		<Route path={`${route}`}>
			<PopUp setOff={()=>history.push(route)}>
				<div className="project_popup">
					<Carousel 
						images={images} 
						width="30vw"
						height="50vh"
						unit="vw"
					/>
					<ResultsDisplay 
						width="50vw" 
						height="80vh" 
						navItems={projectPages}
					>
					{
						projectPages.map((page,id)=>
							<Route path={page.to} key={id}>
								<h1>{page.children}</h1>
							</Route>
						)
					}
					</ResultsDisplay>
				</div>
			</PopUp>
		</Route>
	</React.Fragment>
	);
}