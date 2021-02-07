import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/header";
import {HomeContent} from "./components/homeContent";
import {SkillContent} from "./components/skillContent";
import "./styles/css/main.css";

class App extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
		<BrowserRouter>
			<Header/>
			<div className="container">
				<HomeContent/>
				<SkillContent/>
			</div>
		</BrowserRouter>
		);
	}
}

export default App;