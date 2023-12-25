import { findBalancedSegment } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Sample test "11011011"',
        input: [1, 1, 0, 1, 1, 0, 1, 1], 
        output: [2, 5] 
    },
    {
        id: 2,
        description: 'Begin segment',
        input: [1, 0, 1],
        output: [0, 1]
    },
    {
        id: 3,
        description: 'Sample test "110"',
        input: [1, 1, 0], 
        output: [1, 2]
    },
    {
        id: 4,
        description: 'No balance segment with 1s',
        input: [1, 1, 1, 1, 1], 
        output: []
    },
    {
        id: 5,
        description: 'Balance segment at the end',
        input: [1, 1, 1, 1, 1, 1, 0, 0], 
        output: [4, 7]
    },
    {
        id: 6,
        description: 'Find bigger segment',
        input: [1, 1, 0, 0, 1, 1, 1, 1, 0, 0], 
        output: [2, 9]
    },
    {
        id: 7,
        description: 'Find first balance segment',
        input: [1, 1, 0, 1, 0, 1, 1, 1 ,1, 0, 0], 
        output: [1, 4]
    },
    {
        id: 8,
        description: 'Inverted test sample "00100100"',
        input: [0, 0, 1, 0, 0, 1, 0, 0], 
        output: [2, 5]
    },
    {
        id: 9,
        description: 'Saple test "011110111001"',
        input: [0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1], 
        output: [5, 10]
    },
    {
        id: 10,
        description: 'No balace segment with 0s',
        input: [0, 0, 0, 0, 0, 0],
        output: []
    }
]


describe('Reto #21: 🪐 Mensaje binario', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( findBalancedSegment(input) ).toStrictEqual(output)
        })
    })

});
