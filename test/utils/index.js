import React from "react";
import {shallow} from "enzyme";
import checkPropTypes from "check-prop-types";

export const findChild = (component,attr)=>{
	return component.find(`[data-test="${attr}"]`);
}

export const setComponent = (Component,props)=>{
	return shallow(<Component {...props}/>);
}

export const checkProps = (component,expectedProps)=>{
	return checkPropTypes(component.propTypes,expectedProps,"props",component.name);
}