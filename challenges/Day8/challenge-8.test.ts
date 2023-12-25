import { organizeGifts } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Generic test",
        input: '76a11b',
        output: '[a]{a}{a}(aaaaaa){b}(b)'
    },
    {
        id: 2,
        description: "Generic test",
        input: '510c',
        output: '[c][c][c][c][c][c][c][c][c][c]{c}'
    },
    {
        id: 3,
        description: "Does not have gifts",
        input: '',
        output: ''
    }
]


describe('Reto #8: 🏬 Ordenando el almacén', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( organizeGifts(input) ).toEqual(output);
        })
    })

});
