import { maxGifts } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Simple test',
        input: [2, 4, 2],
        output: 4
    },
    {
        id: 2,
        description: 'Simple test',
        input: [5, 1, 1, 5],
        output: 10
    },
    {
        id: 3,
        description: 'Simple test',
        input: [4, 1, 1, 4, 2, 1],
        output: 9
    },
    {
        id: 4,
        description: 'Simple test',
        input: [1, 3, 1, 3, 100],
        output: 103
    },
    {
        id: 5,
        description: 'Testing with big numbers',
        input: [85, 165684, 365165, 5165475, 7984561, 15, 75, 4, 6516861, 651],
        output: 14866747 
    } 
]


describe('Reto #14: 🚨 Evita la alarma', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( maxGifts(input) ).toEqual(output)
        })
    })

});
