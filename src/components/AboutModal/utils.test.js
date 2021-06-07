import buildStringProps from './utils';

describe('utils.js', ()=>{
    describe('buildStringProps()', ()=>{
        test('When given strings, it packages them into an object', ()=>{
            const lang = 'wooblerese';
            const label = 'test';
            const result = buildStringProps(lang, label);
            const expectedResult = {
                language: lang,
                stringLabel: label
            };
            expect(result).toStrictEqual(expectedResult);
        });
    });
});