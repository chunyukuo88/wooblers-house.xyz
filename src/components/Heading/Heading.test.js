import React from 'react';
import Enzyme, { mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Heading from './Heading';
import Root from '../../Root';

Enzyme.configure({ adapter: new EnzymeAdapter()});

let wrapper;

beforeEach(()=>{
  const initialState = {
    language: 'english',
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <Heading />
    </Root>
  );
});

afterEach(()=>{
  wrapper.unmount();
});


describe('Heading.js', ()=>{
   describe('On load,', ()=>{
       test('the Heading component renders without crashing.', ()=>{
           const heading = wrapper.find("[data-test='heading']");
           expect(heading.length).toBe(1);
       });
   });
   describe('WHEN: The user clicks the localization icon, ', ()=>{
      test('THEN: It switches to the next language', ()=>{
            const locButton = wrapper.find("[data-test='locbutton']");
            expect(locButton.text()).toEqual('English');
            locButton.simulate('click');
            expect(locButton.text()).toEqual('正體中文');
            locButton.simulate('click');
            expect(locButton.text()).toEqual('русский');
            locButton.simulate('click');
            expect(locButton.text()).toEqual('English');
      });
   });
});

