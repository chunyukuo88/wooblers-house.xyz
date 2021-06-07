import { getFotoSource } from './urls';

describe('GIVEN an integer representing fot foto number, ', ()=>{
    it('returns a URL that includes that integer.', ()=>{
        const result = getFotoSource(1);
        const expectedResult = 'https://woobler-photos.s3.amazonaws.com/1 (Custom).JPG';
        expect(result).toEqual(expectedResult);
    });
});