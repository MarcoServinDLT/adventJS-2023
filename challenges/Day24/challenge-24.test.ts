import { getStaircasePaths } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Testing multiplication operation',
        input: {steps: 2, maxJump: 1},
        output: [[1, 1]] 
    },
    {
        id: 2,
        description: 'Testing loop',
        input: {steps: 3, maxJump: 3},
        output: [[1, 1, 1], [1, 2], [2, 1], [3]]
    },
    {
        id: 3,
        description: 'Testing loop without checkpoint',
        input: {steps: 5, maxJump: 1}, 
        output: [[1, 1, 1, 1, 1]]
    },
    {
        id: 4,
        description: 'Testing take conditional segment',
        input: {steps: 5, maxJump: 2}, 
        output: [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 2],
            [1, 1, 2, 1],
            [1, 2, 1, 1],
            [1, 2, 2],
            [2, 1, 1, 1],
            [2, 1, 2],
            [2, 2, 1],
        ]
    }
]


describe('Reto #24: 🪜 Brincos en la escalera', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {steps, maxJump} = input
            expect( getStaircasePaths(steps, maxJump) ).toStrictEqual(output)
        })
    })

});
