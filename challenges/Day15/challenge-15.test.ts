import { autonomousDrive } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Simple test',
        input: {
            movements: ['R', 'R', 'D', 'L'],
            store:  ['..!....', '...*.*.']
        },
        output: [".......", "...*!*."]
    },
    {
        id: 2,
        description: 'Blocked robot',
        input: {
            movements: ['U', 'R', 'D', 'L'],
            store:  ['*****', '**!**', '*****']
        },
        output: ['*****', '**!**', '*****']
    },
    {
        id: 3,
        description: 'Test thar it does not out of bounds',
        input: {
            movements: ['U', 'U', 'U', 'U', 'U', 'U', 'U', 'U'],
            store:  ['...*..*.*.*..*.*.','....!.*.*....*.*.','...*..*.*.*..*.*.']
        },
        output: ['...*!.*.*.*..*.*.','......*.*....*.*.','...*..*.*.*..*.*.']
    },
    {
        id: 4,
        description: 'Testing cycle',
        input: {
            movements: ['L', 'U', 'R', 'R', 'D', 'D', 'L', 'L', 'U', 'R'],
            store: ['...', '.!.', '...']
        },
        output: ['...', '.!.', '...']
    },
    {
        id: 5,
        description: 'Store with one cell',
        input: {
            movements: ['U', 'R', 'D', 'L'],
            store: ['!']
        },
        output: ['!'] 
    } 
]


describe('Reto #15: ↔️ Robot autónomo', () => {

    describe('Testing that it works 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            const {movements, store} = input
            expect( autonomousDrive(store, movements) ).toStrictEqual(output)
        })
    })

    describe('Testing performance ⏱️ ', () => {
        test('test #1 - Performance on 100 x 100 map', () => {

            const store = [];
            const movements = [];
            const robot = {
                y: ~~(Math.random()*100),
                x: ~~(Math.random()*100),
            };

            for(let row=0; row<100; row++){
                let mapRow = [];
                for(let col=0; col<100; col++)
                    mapRow.push( ['.','*'][ ~~(Math.random()*2) ] );
                if(row === robot.y)
                    mapRow[robot.x] = '!';
                store.push(mapRow.join(''));
            }
    
            for(let movement=0; movement<100; movement++)
                movements.push( ['U', 'D', 'R', 'L'][ ~~(Math.random()*4) ] );

            const start = performance.now();
            autonomousDrive(store, movements);
            const executionTime = performance.now() - start;

            expect(executionTime).toBeLessThan(1000)
        })
    })



});
