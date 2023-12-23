import { transformTree } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Sample test',
        input: [3, 1, 0, 8, 12, null, 1],
        output: {
            value: 3,
            left: {
                value: 1,
                left: {
                    value: 8,
                    left: null,
                    right: null
                },
                right: {
                    value: 12,
                    left: null,
                    right: null
                }
            },
            right: {
                value: 0,
                left: null,
                right: {
                    value: 1,
                    left: null,
                    right: null
                }
            }
        }
    },
    {
        id: 2,
        description: 'Full left tree',
        input: [10, 12, null, 8, null, null, null, 5],
        output: {
            value: 10, 
            left: {
                value: 12,
                left: {
                    value: 8,
                    left: {
                        value: 5,
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        }
    },
    {
        id: 3,
        description: 'Full right tree',
        input: [87, null, 16, null, null, null, 20],
        output: {
            value: 87,
            left: null,
            right: {
                value: 16,
                left: null,
                right: {
                    value: 20,
                    left: null,
                    right: null
                }
            }
        }
    },
    {
        id: 4,
        description: 'Empty tree',
        input: [],
        output: null
    }
]


describe('Reto #16: ❌ Despliegue en viernes', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( transformTree(input) ).toStrictEqual(output)
        })
    })

});
