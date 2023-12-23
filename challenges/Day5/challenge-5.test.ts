import { cyberReindeer } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Reindeers did not have to wait",
        input: { road: 'S....|..||||.|.', time: 6 },
        output: [
            'S....|..||||.|.',
            '.S...|..||||.|.',
            '..S..|..||||.|.',
            '...S.|..||||.|.',
            '....S|..||||.|.',
            '.....S..****.*.'
        ]
    },
    {
        id: 2,
        description: "Reindeers have to wait",
        input: { road: 'S..|...|..', time: 10 },
        output: [
            'S..|...|..',
            '.S.|...|..',
            '..S|...|..',
            '..S|...|..',
            '..S|...|..',
            '...S...*..',
            '...*S..*..',
            '...*.S.*..',
            '...*..S*..',
            '...*...S..'
        ]
    },
    {
        id: 1,
        description: "Reindeers did not have to wait",
        input: { road: 'S||||||||||||', time: 3 },
        output: [
            'S||||||||||||',
            'S||||||||||||',
            'S||||||||||||'
        ]    
    }
]


describe('Reto #5: 🛷 El CyberTruck de Santa', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {road, time} = input
            expect( cyberReindeer(road, time) ).toStrictEqual(output)
        })
    })

});
