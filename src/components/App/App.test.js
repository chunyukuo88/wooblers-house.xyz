import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter : new EnzymeAdapter()});



describe('App.js', ()=>{
    describe('ON LOAD:', ()=>{
        test('It renders the App component without crashing, ', ()=>{
            const wrapper = shallow(<App />);
            const appComponent = wrapper.find(`[data-test="component-app"]`);
            expect(appComponent.length).toBe(1);
        });
        // test('and it dispatches temp and humidity to the global store.', ()=>{
        //     const wrapper = shallow(<App />);
        //     const appComponent = wrapper.find(`[data-test="component-app"]`);
        //     const dispatchTempAndHumidity = jest.fn();
        //     expect(dispatchTempAndHumidity).toHaveBeenCalled();
        // })
    });
});
