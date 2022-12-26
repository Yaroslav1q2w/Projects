import {fireEvent, render, screen} from '@testing-library/react';
import Modal from "../Modal";
import Button from "../Button";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom"


jest.mock("react-redux")


describe("Modal", () => {

    test("should create snapshot", () => {
        const component = render(<Modal/>)

        expect(component).toMatchSnapshot()
    })

    test("testing modal button 'ok' dispatch", () => {
        const modalOk = jest.fn()
        render(<Button onClick={modalOk}>Ok</Button>)
        userEvent.click(screen.getByText(/ok/i))
        expect(modalOk).toHaveBeenCalledTimes(1)
    })

    test("testing modal button 'cancel' dispatch", () => {
        const modalCancel = jest.fn()
        render(<Button onClick={modalCancel}>Cancel</Button>)
        userEvent.click(screen.getByText(/cancel/i))
        expect(modalCancel).toHaveBeenCalledTimes(1)
    })

    test("testing modal button 'exit' dispatch", () => {
        render(<Modal/>)

        fireEvent.click(screen.getByTestId("modal-exit"))

        const modal = screen.queryByTestId("modal")

        expect(modal).not.toBeNull()
    })

})