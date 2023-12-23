import { optimizeIntervals } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Sample test',
        input: [[5, 8], [2, 7], [3, 4]],
        output: [[2, 8]]
    },
    {
        id: 2,
        description: 'Sample test',
        input: [[1, 3], [8, 10], [2, 6]],
        output: [[1, 6], [8, 10]]
    },
    {
        id: 3,
        description: 'Sample test',
        input: [[3, 4], [1, 2], [5, 6]],
        output: [[1, 2], [3, 4], [5, 6]]
    },
    {
        id: 4,
        description: 'Closed intervals',
        input: [[1, 15], [38, 52], [78, 100], [15, 38], [52, 78]],
        output: [[1, 100]]
    },
    {
        id: 5,
        description: 'Testing limit of intervals',
        input: [[4, 7], [17, 9999], [6, 17]],
        output: [[4, 9999]]
    } 
]


describe('Reto #17: 🛷 Optimizando el alquiler', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( optimizeIntervals(input) ).toStrictEqual(output)
        })
    })

});
