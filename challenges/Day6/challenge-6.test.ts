import { maxDistance } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Same backward and forward movements",
        input: '<><><><><><><><><><>',
        output: 0
    },
    {
        id: 2,
        description: "More foreward",
        input: '>>*<',
        output: 2
    },
    {
        id: 3,
        description: "More backward",
        input: '<<<>',
        output: 2
    },
    {
        id: 4,
        description: "Same backward and forward but more asterisc",
        input: '>***>',
        output: 5
    },
    {
        id: 5,
        description: "Only asterisc",
        input: '**********',
        output: 10
    },
]


describe('Reto #6: 🦌 Los renos a prueba', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( maxDistance(input) ).toEqual(output)
        })
    })

});
