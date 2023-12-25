import { decode } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Decode one word",
        input: 'hola (odnum)',
        output: 'hola mundo'
    },
    {
        id: 2,
        description: "Decode two words",
        input: '(olleh) (dlrow)!',
        output: 'hello world!'
    },
    {
        id: 3,
        description: "Nested decodification",
        input: 'sa(u(cla)atn)s',
        output: 'santaclaus'
    },
    {
        id: 4,
        description: "Nested double decodification",
        input: '(!!!(mundo) (hola))',
        output: 'hola mundo!!!'
    },
    {
        id: 5,
        description: "Message alredy decoded",
        input: 'it is alredy decoded',
        output: 'it is alredy decoded'
    },
]


describe('Reto #4: 😵 Dale la vuelta a los paréntesis', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( decode(input) ).toStrictEqual(output)
        })
    })

});
