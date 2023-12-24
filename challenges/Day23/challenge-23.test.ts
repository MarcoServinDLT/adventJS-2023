import { organizeChristmasDinner } from './challenge'

const testsCases = [
    {
        id: 1,
        description: 'Sample test',
        input: [
            ["christmas turkey", "turkey", "sauce", "herbs"],
            ["cake", "flour", "sugar", "egg"],
            ["hot chocolate", "chocolate", "milk", "sugar"],
            ["pizza", "sauce", "tomato", "cheese", "ham"]
        ], 
        output: [
            ["sauce", "christmas turkey", "pizza"],
            ["sugar", "cake", "hot chocolate"]
        ] 
    },
    {
        id: 2,
        description: 'Unordered recipes and ingredients',
        input: [
            ["fruit salad", "apple", "banana", "orange"],
            ["berry smoothie", "blueberry", "banana", "milk"],
            ["apple pie", "apple", "sugar", "flour"]
        ],
        output: [
            ["apple", "apple pie", "fruit salad"],
            ["banana", "berry smoothie", "fruit salad"]
        ]
    },
    {
        id: 3,
        description: 'Unique ingredients in dishes',
        input: [
            ["snowflake cookies", "flour", "sugar", "vanilla"],
            ["winter stew", "beef", "carrots", "potatoes"],
            ["holiday punch", "cranberry juice", "orange juice", "sparkling water"],
            ["festive salad", "lettuce", "cranberries", "walnuts"]
        ], 
        output: []
    },
    {
        id: 4,
        description: 'Sample test case 5',
        input: [
            ["pumpkin pie", "pumpkin", "cinnamon", "sugar", "flour"],
            ["mashed potatoes", "potatoes", "butter", "milk"],
            ["cinnamon rolls", "flour", "cinnamon", "butter", "sugar"],
            ["turkey stuffing", "bread crumbs", "celery", "onion", "butter"]
        ], 
        output: [
            ["butter", "cinnamon rolls", "mashed potatoes", "turkey stuffing"],
            ["cinnamon", "cinnamon rolls", "pumpkin pie"],
            ["flour", "cinnamon rolls", "pumpkin pie"],
            ["sugar", "cinnamon rolls", "pumpkin pie"]
        ]
    }
]


describe('Reto #23: 🍽️ La comida de Navidad', () => {

    describe('Testing work it 🎯', () => {
        it.each(testsCases)('test #$id - $description', ({input, output}) => {
            expect( organizeChristmasDinner(input) ).toStrictEqual(output)
        })
    })

});
