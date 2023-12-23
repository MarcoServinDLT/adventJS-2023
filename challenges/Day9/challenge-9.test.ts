import { adjustLights } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "",
        input: ['🟢', '🔴', '🟢', '🟢', '🟢'],
        output: 1
    },
    {
        id: 2,
        description: "More foreward",
        input: ['🔴', '🔴', '🟢', '🔴', '🟢'],
        output: 1
    },
    {
        id: 3,
        description: "More backward",
        input: ['🔴', '🔴', '🟢', '🟢', '🔴'],
        output: 2
    },
    {
        id: 4,
        description: "Same backward and forward but more asterisc",
        input: ['🟢', '🔴', '🟢', '🔴', '🟢'],
        output: 0
    },
    {
        id: 5,
        description: "Only asterisc",
        input: ['🔴', '🔴', '🔴'],
        output: 1
    },
    {
        id: 6,
        description: "Only asterisc",
        input: ['🟢', '🔴', '🔴', '🔴', '🟢', '🟢', '🔴', '🟢', '🔴'],
        output: 4
    }
]


describe('Reto #9: 🚦 Alterna las luces', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( adjustLights(input) ).toEqual(output)
        })
    })

});
