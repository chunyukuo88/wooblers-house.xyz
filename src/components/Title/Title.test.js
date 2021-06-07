import React from 'react';
import Enzyme, {mount} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Title from './Title';
import Root from '../../Root';
import {ChineseTitle} from "./Chinese";

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
beforeEach(()=>{
  const initialState = {
    language: 'english',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Title />
    </Root>
  );
});
afterEach(()=>{
  wrapper.unmount();
});

describe('Title.js', ()=>{
  describe('On load,', ()=>{
    test('the Title component renders without crashing.', ()=>{
      const component = wrapper.find("[data-test='title-container']");
      expect(component.length).toBe(1);
    });
  });
  describe('When the global language state changes to Chinese', ()=>{
    test('the Chinese title is displayed', ()=>{
      wrapper = mount(
        <Root initialState={{language: 'chinese'}}>
          <Title />
        </Root>
      );
      const child = wrapper.find("[data-test='chinese-title']");
      console.log(child);
      expect(child.text()).toEqual('小巫之屋');
    });
  });
});
