import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import GameCard from "./components/GameCard";
import {Provider} from "react-redux";
import store from "../../store/store"
import userEvent from "@testing-library/user-event";
import Button from "../Button";
import GameList from "./components/GameList";


describe("test GameCard", () => {

    test('render GameCard' , () => {
        const {container} = render(<Provider store={store}><GameCard cardProps={true} /></Provider>)

        expect(container).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    test('render button in GameCard' , () => {
        render(<Provider store={store}><GameCard cardProps={true} /></Provider>)

        const button = screen.getByText(/add game/i)
        expect(button).toBeInTheDocument()
    })

    test('add button in GameCard' , () => {
        const handlerButton = jest.fn()
        render(<Button onClick={handlerButton}>Add game</Button>)
        userEvent.click(screen.getByText(/add game/i))
        expect(handlerButton).toHaveBeenCalledTimes(1)
    })
})


describe("test GameList", () => {

    test('render GameList' , () => {
        const {container} = render(<Provider store={store}><GameList cardProps={true} /></Provider>)

        expect(container).toBeInTheDocument()
        expect(container).toMatchSnapshot()
    })

    test('add button in GameList' , () => {
        render(<Provider store={store}><GameList cardProps={true} /></Provider>)

        const button = screen.getByText(/add game/i)
        expect(button).toBeInTheDocument()
    })

    test('add button in GameList' , () => {
        const handlerButton = jest.fn()
        render(<Button onClick={handlerButton}>Add game</Button>)
        userEvent.click(screen.getByText(/add game/i))
        expect(handlerButton).toHaveBeenCalledTimes(1)
    })
})