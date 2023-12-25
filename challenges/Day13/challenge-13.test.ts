import { calculateTime } from './challenge';

const testsCases = [
    {
        id: 1,
        description: 'Delivery with plenty time',
        input: ['00:10:00', '01:00:00', '03:30:00'],
        output: '-02:20:00'
    },
    {
        id: 2,
        description: 'Time over delivery limit',
        input: ['02:00:00', '05:00:00', '00:30:00'],
        output: '00:30:00'
    },
    {
        id: 3,
        description: 'Just time for delivery',
        input: ['04:00:00', '00:38:00','00:00:50', '00:00:05','00:00:05', '02:11:00', '00:10:00'],
        output: '00:00:00'
    },
    {
        id: 4,
        description: 'Testing seconds',
        input: ['02:11:52'],
        output: '-04:48:08'
    },
    {
        id: 5,
        description: 'Over 24 hours of delivery limit',
        input: ['1587:20:45'],
        output: '1580:20:45'
    } 
]


describe('Reto #13: ⌚️ Calculando el tiempo', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( calculateTime(input) ).toEqual(output)
        })
    })

});
