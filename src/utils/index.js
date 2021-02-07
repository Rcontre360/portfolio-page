import Particles from "particlesjs";

export const initParticles = (selector)=>{

	const screenArea = window.innerWidth*window.innerHeight;
	const numParticles = Math.floor(screenArea*100/650000);

	console.log(numParticles)

	window.onload = ()=>{
		Particles.init({
			connectParticles:true,
			selector:selector,
			color:"#ffffff",
			maxParticles:numParticles,
			speed:0.4,
		});
	}
}

/*maxParticles:350,
sizeVariations:5,
speed:5,
minDistance:100*/