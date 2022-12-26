import favouriteReducer,{increaseFavorite, decreaseFavorite} from "../favourite.reducer"

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
]


describe("Favourite reducer", () => {

    test('render is the default value' , () => {

        expect(favouriteReducer([], {type: undefined })).toEqual([])
    })

    test('adding item to the favourite' , () => {

        let action = increaseFavorite({
            "image": "./game-images/gta_v.jpeg",
            "title": "Grand Theft Auto V",
            "price": 1999,
            "article": 754872
        })
        let newState = favouriteReducer({routeFavorite: todos},action)

        expect(newState.routeFavorite.length).toBe(3)
    })

    test("remove the item to the favourite", () => {

        let action = decreaseFavorite(  {
            "image": "./game-images/30df1186d99409e7_1200xH.jpg",
            "title": "Horizon Forbidden West",
            "price": 3299,
            "article": 741258
        })
        let newState = favouriteReducer({routeFavorite: todos},action)

        expect(newState.routeFavorite.length).toBe(1)
    })

})