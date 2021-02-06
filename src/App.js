import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./components/header";
import "./styles/css/main.css";

class App extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
		<BrowserRouter>
			<div className="container">
				<Header/>
				<h1>epa</h1>
			</div>
		</BrowserRouter>
		);
	}
}

export default App;