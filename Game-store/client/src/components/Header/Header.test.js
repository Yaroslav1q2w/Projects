import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import {Provider} from "react-redux";
import store from "../../store/store"
import Header from "./Header"
import {MemoryRouter} from "react-router-dom";
import App from "../../App";


describe("Header", () => {
    test('Header render' , () => {
        const {container} = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header  />
                </Provider>
            </MemoryRouter>)

        expect(container).toBeInTheDocument()
    })

    test('Header snapshot' , () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Header  />
                </Provider>
            </MemoryRouter>)

        expect(component).toMatchSnapshot()
    })
})


describe("App", () => {

    test('render router home-page' , () => {
        render(<Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        const homeLink = screen.getByTestId('home-link')
        userEvent.click(homeLink)
        expect(screen.getByTestId("home-page")).toBeInTheDocument()
    })

    test('render router favorite-page' , () => {
        render(<Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        const favoriteLink = screen.getByTestId('favorite-link')
        userEvent.click(favoriteLink)
        expect(screen.getByTestId("favorite-page")).toBeInTheDocument();
    })

    test('render router basket-page' , () => {
        render(<Provider store={store}>
                <MemoryRouter>
                    <App />
                </MemoryRouter>
            </Provider>
        );
        const basketLink = screen.getByTestId('basket-link')
        userEvent.click(basketLink)
        expect(screen.getByTestId("basket-page")).toBeInTheDocument();
    })
})