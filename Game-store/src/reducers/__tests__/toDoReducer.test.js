import todoReducer, {actionFetchCards} from "../todo.reducer"

const mockTodos = [{
    "image": "./game-images/Call_of_Duty-_Modern_Warfare_II.jpeg",
    "title": "Call of Duty: Modern Warfare",
    "price": 5780,
    "article": 785633
}]

global.fetch = jest.fn()

describe("Testing async thunk", () => {

    test("shoult actionFetchCards with resolved response", async() => {

        fetch.mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockTodos)
        })

        const dispatch = jest.fn()
        const thunk = actionFetchCards()

        await thunk(dispatch)

        const {calls}= dispatch.mock
        expect(calls).toHaveLength(2)

        const [start, end] = calls

        expect(start[0].type).toBe("todos/fetchCards/pending")
        expect(end[0].type).toBe("todos/fetchCards/fulfilled")

    })

    test("testing extraReducers", () => {

        const state = todoReducer({todos: []},actionFetchCards.fulfilled(mockTodos))

        expect(state).toEqual({todos: mockTodos })
    })
})