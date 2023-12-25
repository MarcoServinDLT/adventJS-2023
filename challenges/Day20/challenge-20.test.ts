import { distributeGifts } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Sample test case',
        input: [
            [4, 5, 1],
            [6, null, 3],
            [8, null, 4]
        ],
        output: [
            [5, 3, 3],
            [6, 5, 3],
            [7, 6, 4]
        ] 
    },
    {
        id: 2,
        description: 'No weight to distribute',
        input: [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ],
        output: [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0],
        ],
    },
    {
        id: 3,
        description: 'Cell with not distribution.',
        input: [
            [7, null, 45, 0, 10],
            [null, null, null, 5, 2],
            [4, null, 23, 105, 78],
            [35, 99, 20, 63, 15]
        ],
        output: [
            [7, 26, 23, 15, 4],
            [6, 0, 24, 28, 24],
            [20, 42, 49, 55, 50],
            [46, 51, 51, 51, 52]
        ]
    }
]


describe('Reto #20: 🏋️Distribuye el peso', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( distributeGifts(input) ).toStrictEqual(output)
        })
    })

});
