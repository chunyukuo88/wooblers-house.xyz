import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Code from './Code.jsx';
import Root from '../../Root.js';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;
beforeEach(()=>{
  const initialState = {
    language: 'russian',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Code />
    </Root>
  );
});
afterEach(()=>{
  wrapper.unmount();
});

describe('Code.jsx', ()=>{
  describe('On load,', ()=>{
    test('It loads without crashing, ', ()=>{
      const component = wrapper.find("[data-test='code']");
      expect(component.length).toBe(1);
    });
    test('and it renders the initial language.', ()=>{
      const component = wrapper.find("[data-test='code']");
      expect(component.text()).toBe('Код');
      expect(component.render().text()).toBe('Код');
    });
  });
});
