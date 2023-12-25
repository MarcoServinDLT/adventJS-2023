import { drawGift } from './challenge'

const testsCases = [
    {
        id: 1,
        description: "Box of size 4",
        input: { size: 4, symbol: '+' },
        output: `   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
`
    },
    {
        id: 2,
        description: "Box of size 1",
        input: { size: 1, symbol: '~' },
        output: '#\n'
    },
    {
        id: 3,
        description: "Box of size 5",
        input: { size: 5, symbol: '*' },
        output: `    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
`
    }
]


describe('Reto #7: 📦 Las cajas en 3D', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {size, symbol} = input; 
            expect( drawGift(size, symbol) ).toEqual(output);
        })
    })

});
