import React from "react";
import {BrowserRouter,Route} from "react-router-dom";

import {GlobalStyle} from "./components/styledComponents";
import {Header} from "./components/header";
import {HomeContent} from "./components/homeContent";
import {AboutContent} from "./components/aboutContent";
import {ProjectContent} from "./components/projectContent";
import {ContactContent} from "./components/contactContent";
import {Footer} from "./components/footer";

class App extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
		<BrowserRouter>
			<GlobalStyle/>
			<Header/>
			<div className="container">
				<HomeContent/>
				<AboutContent/>
				<ProjectContent/>
				<ContactContent/>
			</div>
			<Footer/>
		</BrowserRouter>
		);
	}
}

export default App;