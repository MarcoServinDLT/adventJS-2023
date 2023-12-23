import { checkIsValidCopy } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Degraded word',
        input: {original: "Javascript", copy: "Ja#:.crip+"},
        output: true
    },
    {
        id: 2,
        description: 'Maximun degraded character',
        input: {original: "C++", copy: "C  "},
        output: true
    },
    {
        id: 3,
        description: 'Not letters integrity',
        input: {original: "Type5cript", copy: "+ype#crip+"},
        output: false
    },
    {
        id: 4,
        description: 'Incorrect degradation sequence',
        input: {original: "It works on my mach:ne", copy: "it works #n my mach#ne"},
        output: false
    },
    {
        id: 5,
        description: 'Upper case on copy',
        input: {original: "sudo rm -rf", copy: "Sudo RM -rF"},
        output: false
    },
    {
        id: 6,
        description: 'Correct upper case on copy',
        input: {original: "Memory Leak", copy: "M +.ry L#:k"},
        output: true
    }
]


describe('Reto #12: 📸 ¿Es una copia válida?', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {original, copy} = input
            expect( checkIsValidCopy(original, copy) ).toEqual(output)
        })
    })

});
