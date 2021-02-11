import Particles from "particlesjs";

export const initParticles = (selector,configure)=>{

	/*const screenArea = window.innerWidth*window.innerHeight;
	const numParticles = Math.floor(screenArea*100/800000);

	console.log(numParticles)

	window.onload = ()=>{
		Particles.init({
			connectParticles:true,
			selector:selector,
			color:"#ffffff",
			maxParticles:numParticles,
			speed:0.4,
			...configure
		});
	}*/
}


/*maxParticles:350,
sizeVariations:5,
speed:5,
minDistance:100*/

export const shortenRouterPath = (str)=>{
	let res="";
	str.split("/").forEach((el,i)=>{
		if (i<str.split("/").length-1)
			res = `${res+str.split("/")[i]}/`;
	})
	return res;
}

export const isElementVisible = (element,visibility=0)=>{
	const rect = element.getBoundingClientRect();
	
	var viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
	return !(rect.bottom < visibility || rect.top - viewportHeight >= -visibility);
}

export const projectsData = [
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
			labels:["javascript","react","node","express","mongo"],
			id:0
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
			labels:["javascript","react"],
			id:1
		},
		{
			name:"Docs page",
			images:[
				{text:"React",src:"/assets/react.png"},
				{text:"Node",src:"/assets/node.png"},
				{text:"CSS",src:"/assets/css.png"},
				{text:"Javascript",src:"/assets/javascript.png"},
			],
			description:"A chat app built with react ad socket.io",
			route:"/docs_page",
			originalRoute:"/docs_page",
			labels:["webpage"],
			id:2
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
			labels:["react","javascript"],
			id:3
		}
	];
