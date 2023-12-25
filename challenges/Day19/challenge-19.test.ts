import { revealSabotage } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Map of 4 x 4',
        input: [
            ['*', ' ', ' ', ' '],
            [' ', ' ', '*', ' '],
            [' ', ' ', ' ', ' '],
            ['*', ' ', ' ', ' ']
        ],
        output: [
            ['*', '2', '1', '1'],
            ['1', '2', '*', '1'],
            ['1', '2', '1', '1'],
            ['*', '1', ' ', ' ']
        ]
    },
    {
        id: 2,
        description: 'Map of 3 x 3',
        input: [
            ['*', '*', '*'],
            ['*', ' ', '*'],
            ['*', '*', '*'],
        ],
        output: [
            ['*', '*', '*'],
            ['*', '8', '*'],
            ['*', '*', '*'],
        ],
    },
    {
        id: 3,
        description: 'Map of 4 x 5',
        input: [
            [' ', ' ', ' ', ' ', ' '],
            [' ', '*', '*', ' ', ' '],
            [' ', ' ', ' ', '*', ' '],
            ['*', ' ', ' ', ' ', ' ']
        ],
        output: [
            ['1', '2', '2', '1', ' '],
            ['1', '*', '*', '2', '1'],
            ['2', '3', '3', '*', '1'],
            ['*', '1', '1', '1', '1']
        ]
    }
]


describe('Reto #19: 💣 Enfrenta el sabotaje', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( revealSabotage(input) ).toStrictEqual(output)
        })
    })

});
