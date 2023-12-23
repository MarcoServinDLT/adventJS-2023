import { manufacture } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Can manufacture more than one gift",
        input: { gifts: ['tren', 'oso', 'pelota'], materials: 'tronesa' },
        output: ["tren", "oso"]
    },
    {
        id: 2,
        description: "Can manufacture one gift",
        input: { gifts: ['juego', 'puzzle'], materials: 'jlepuz' },
        output: ['puzzle']
    },
    {
        id: 3,
        description: "Can't manufacture any gift",
        input: { gifts: ['libro', 'ps5'], materials: 'psli' },
        output: []
    },
    {
        id: 4,
        description: "Doesn't have a gifts list",
        input: { gifts: [], materials: 'gifts' },
        output: []
    },
    {
        id: 5,
        description: "Doesn't have materials",
        input: { gifts: ['where', 'are', 'the', 'materials'], materials: '' },
        output: []
    },
]


describe('Reto #2: 🏭 Ponemos en marcha la fábrica', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const { gifts, materials } = input
            expect( manufacture(gifts, materials) ).toStrictEqual(output)
        })
    })

    describe('Testing performance ⏱️ ', () => {
        test('test #1 - Performance on 100K of elements', () => {

            const data = 'stress-'.repeat(100_000)
            const gifts = data.split('-')
            const materials = 'stre'

            const start = performance.now();
            manufacture(gifts, materials);
            const executionTime = performance.now() - start;

            expect(executionTime).toBeLessThan(1000)
        })
    })

});
