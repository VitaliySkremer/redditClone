import {configure, shallow} from "enzyme";
import {DropDown} from "../DropDown";
import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Dropdown',()=>{
  test('should render',()=>{
    const wrapper = shallow(<DropDown button={<button/>} children={<div/>}/> )
    expect(wrapper).toBeDefined();
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  })

  test('should render (snapshot)',()=>{
    const wrapper = shallow(<DropDown button={<button/>} children={<div/>}/> )

    expect(wrapper).toMatchSnapshot()
  })
})