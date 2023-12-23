import { findNaughtyStep } from './challenge'

const testCases = [

    {
        id: 1,
        description: 'Find extra step at the end',
        input: { original: '', modified: '' },
        output: ''
    },
    {
        id: 2,
        description: 'Find extra step in middle',
        input: { original: '', modified: '' },
        output: ''
    },
    {
        id: 3,
        description: 'Does not have a extra step',
        input: { original: '', modified: '' },
        output: ''
    },

]

describe('Reto #3: 😏 El elfo travieso', () => {

    describe('Testing work it 🎯', () => {
        it.each(testCases)('test #$id - $description', ({input, output}) => {
            const {original, modified} = input;
            expect( findNaughtyStep(original, modified) ).toEqual(output);
        })
    })

})
