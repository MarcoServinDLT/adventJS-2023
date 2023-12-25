import { findFirstRepeated } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Unique repeated number",
        input: [2, 1, 3, 5, 3],
        output: 3
    },
    {
        id: 2,
        description: "More than one repeated number",
        input: [2, 1, 3, 5, 3, 2],
        output: 3
    },
    {
        id: 3,
        description: "No repeated number",
        input: [4, 1, 3, 5, 2],
        output: -1
    },
]


describe('Reto #1: 🎁 ¡Primer regalo repetido!', () => {

    describe('Testing that it work🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( findFirstRepeated(input) ).toEqual(output)
        })
    })

    describe('Testing performance', () => {
        test('test #1 - Performance on 1M of elements', () => {
            const performanceInput = Array<number>();

            for(let i=1; i<=1_000_000; i++)
                performanceInput.push(i);

            performanceInput.push(1_000_000);

            const start = performance.now();
            const result = findFirstRepeated(performanceInput);
            const executionTime = performance.now() - start;

            expect(result).toEqual(1_000_000);
            expect(executionTime).toBeLessThan(1000)
        })
    })

});
