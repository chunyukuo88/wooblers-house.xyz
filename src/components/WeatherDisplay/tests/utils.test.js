import { getDegreesF, getDegreesC } from '../utils';

describe('utils.js', ()=>{
    describe('getDegreesC()', ()=>{
        describe('GIVEN: A number in degreesKelvin,', ()=>{
           it('THEN: It returns the degrees in Celsius.', ()=>{
               const degreesKelvin = 301;
               const expectedResult = 28;

               const result = getDegreesC(degreesKelvin);

               expect(result).toEqual(expectedResult);
           });
        });
    describe('getDegreesF()', ()=>{
        describe('GIVEN: A number in degreesKelvin,', ()=>{
               it('THEN: It returns the degrees in Fahrenheit.', ()=>{
                    const degreesKelvin = 270;
                    const expectedResult = 27;

                    const result = getDegreesF(degreesKelvin);

                    expect(result).toEqual(expectedResult);
               });
           });
        });
    });
});
