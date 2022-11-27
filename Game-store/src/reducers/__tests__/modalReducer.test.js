import modalReducer, { modalOpen, modalClose, formClose, formOpen, modalSubmitOpen, modalSubmitClose,} from "../modal.reducer"

describe("Modal window reducer basic", () => {

    test("testing the basic modal window by default ", () => {
        expect(modalReducer(false, {type: undefined })).toEqual(false)
    })

    test("basic modal window open testing ", () => {
        // let state = ({ isModal: false})
        // let action = modalOpen({isModal: true})
        //
        // let newState = modalReducer(state,action)
        // expect(newState).toEqual({isModal: true})

        expect(modalReducer({ isModal: false},modalOpen({isModal: true}))).toEqual({isModal: true})
    })

    test("basic modal window close testing ", () => {

        expect(modalReducer({ isModal: true},modalClose({isModal: false}))).toEqual({isModal: false})
    })
})

describe("Modal form", () => {

    test("testing the form modal window by default ", () => {
        expect(modalReducer(false, {type: undefined })).toEqual(false)
    })

    test("form modal window open testing ", () => {

        expect(modalReducer({ pageForm: false},formOpen({pageForm: true}))).toEqual({pageForm: true})
    })

    test("form modal window close testing ", () => {

        expect(modalReducer({ pageForm: true},formClose({pageForm: false}))).toEqual({pageForm: false})
    })
})



describe("Modal submit", () => {

    test("testing the form modal submit by default ", () => {
        expect(modalReducer(false, {type: undefined })).toEqual(false)
    })

    test("submit modal window open testing ", () => {

        expect(modalReducer({ modalSubmit: false},modalSubmitOpen({modalSubmit: true}))).toEqual({modalSubmit: true})
    })

    test("submit modal window close testing ", () => {

        expect(modalReducer({ modalSubmit: true},modalSubmitClose({modalSubmit: false}))).toEqual({modalSubmit: false})
    })
})