import { compile } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Testing multiplication operation',
        input: '++*-', 
        output: 3 
    },
    {
        id: 2,
        description: 'Testing loop',
        input: '++%++<',
        output: 6
    },
    {
        id: 3,
        description: 'Testing loop without checkpoint',
        input: '++<--', 
        output: 0
    },
    {
        id: 4,
        description: 'Testing take conditional segment',
        input: '++¿+?', 
        output: 3
    },
    {
        id: 5,
        description: 'Testing skip conditional segment',
        input: '--¿+++?', 
        output: -2
    },
    {
        id: 6,
        description: 'Increase in coditional after loop',
        input: '-%+¿+++?<', 
        output: 4
    }
]


describe('Reto #22: 🚂 Lenguaje de programación', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( compile(input) ).toEqual(output)
        })
    })

});
