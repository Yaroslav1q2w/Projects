import basketReducer, {increaseBasket, decreaseBasket, clearItems} from "../basket.reducer"

const todos =  [
    {
        "image": "./game-images/Call_of_Duty-_Modern_Warfare_II.jpeg",
        "title": "Call of Duty: Modern Warfare",
        "price": 5780,
        "article": 785633
    },
    {
        "image": "./game-images/30df1186d99409e7_1200xH.jpg",
        "title": "Horizon Forbidden West",
        "price": 3299,
        "article": 741258
    },
    {
        "image": "./game-images/capsule_616x353.jpg",
        "title": "Far Cry Primal",
        "price": 3650,
        "article": 798973
    }
]


describe("Basket reducer", () => {

    test('render is the default value' , () => {

        expect(basketReducer([], {type: undefined })).toEqual([])
    })

    test('adding item to the basket' , () => {

        let action = increaseBasket({
            "image": "./game-images/gta_v.jpeg",
            "title": "Grand Theft Auto V",
            "price": 1999,
            "article": 754872
        })
        let newState = basketReducer({routeBasket: todos},action)

        expect(newState.routeBasket.length).toBe(4)
    })

    test("remove the item to the basket", () => {

        let action = decreaseBasket(  {
            "image": "./game-images/capsule_616x353.jpg",
            "title": "Far Cry Primal",
            "price": 3650,
            "article": 798973
        })
        let newState = basketReducer({routeBasket: todos},action)

        expect(newState.routeBasket.length).toBe(2)
    })

    test("cleaning the basket", () => {

        let newState = basketReducer({routeBasket: todos},clearItems())

        expect(newState.routeBasket.length).toBe(0)
    })
})