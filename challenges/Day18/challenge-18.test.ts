import { drawClock } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Simple test "01:30"',
        input: '01:30',
        output: [
            ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
        ]
    },
    {
        id: 2,
        description: 'Simple test "04:20"',
        input: '04:20',
        output: [
            ['*', '*', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
            ['*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', '*', '*', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'],
            ['*', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*'],
            ['*', '*', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
        ]

    },
    {
        id: 3,
        description: 'Simple test "11:38"',
        input: '11:38',
        output: [
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', ' ', ' ', '*', ' ', '*', ' ', '*'],
            [' ', ' ', '*', ' ', ' ', ' ', '*', ' ', ' ', ' ', '*', '*', '*', ' ', '*', '*', '*']
        ]

    }
]


describe('Reto #14: 🚨 Evita la alarma', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( drawClock(input) ).toStrictEqual(output)
        })
    })

});