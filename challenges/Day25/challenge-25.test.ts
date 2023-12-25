import { travelDistance } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Testing multiplication operation',
        input: `.....1....
..S.......
..........
....3.....
......2...`,
        output: 12
    },
    {
        id: 2,
        description: 'Testing loop',
        input: `..S.1...`,
        output: 2
    },
    {
        id: 3,
        description: 'Testing loop without checkpoint',
        input: `.......................9.
.1.......................
.........................
.........................
.........................
............2...4........
......S..................
.........................
.......................6.
.....3...................
.........................
....8....................
....7....................
..................5......`,
        output: 125
    }
]


describe('Reto #25: 🗺️ Calculando distancias', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( travelDistance(input) ).toStrictEqual(output)
        })
    })

});
