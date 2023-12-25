import { createChristmasTree } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Create tree of height 10",
        input: {ornaments: '~', height: 10},
        output: `         ~
        ~ ~
       ~ ~ ~
      ~ ~ ~ ~
     ~ ~ ~ ~ ~
    ~ ~ ~ ~ ~ ~
   ~ ~ ~ ~ ~ ~ ~
  ~ ~ ~ ~ ~ ~ ~ ~
 ~ ~ ~ ~ ~ ~ ~ ~ ~
~ ~ ~ ~ ~ ~ ~ ~ ~ ~
         |
`
    },
    {
        id: 2,
        description: "Create tree of height 4",
        input: {ornaments: 'xo', height: 4},
        output: `   x
  o x
 o x o
x o x o
   |
`
    },
    {
        id: 3,
        description: "Create tree of height 5",
        input: {ornaments: '123', height: 5},
        output: `    1
   2 3
  1 2 3
 1 2 3 1
2 3 1 2 3
    |
`
    },
    {
        id: 4,
        description: "Create tree of height 1",
        input: {ornaments: '*', height: 1 },
        output: `*
|
`
    }
]


describe('Reto #10: 🎄 Crea tu propio árbol de navidad', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {ornaments, height} = input;
            expect( createChristmasTree(ornaments, height) ).toStrictEqual(output)
        })
    })

});
