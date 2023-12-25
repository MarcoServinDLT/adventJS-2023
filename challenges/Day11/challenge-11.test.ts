import { getIndexsForPalindrome } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Test "aaaabb"',
        input: "aaaabb",
        output: [0,4]
    },
    {
        id: 2,
        description: 'Test "anna"',
        input: "anna",
        output: []
    },
    {
        id: 3,
        description: 'Test "testset"',
        input: "testset",
        output: []
    },
    {
        id: 4,
        description: 'Test "this is not a palindrome"',
        input: "this is not a palindrome",
        output: null
    },
    {
        id: 5,
        description: 'Test "anitalavalatina"',
        input: "anitalavalatina",
        output: []
    },
    {
        id: 6,
        description: 'Test "abac"',
        input: "abac",
        output: null
    },
    {
        id: 7,
        description: 'Test "asdfghjklalkjhgfdsy"',
        input: "asdfghjklalkjhgfdsy",
        output: [9, 18]
    }
]


describe('Reto #11: 📖 Los elfos estudiosos', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            if(output)
                expect( getIndexsForPalindrome(input) ).toStrictEqual(output)
            else 
                expect( getIndexsForPalindrome(input) ).toBeNull()
        })
    })

});
