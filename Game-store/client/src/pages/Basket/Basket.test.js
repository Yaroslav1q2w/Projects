import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import {Provider} from "react-redux";
import store from "../../store/store"
import Basket from "./Basket";


describe("Basket", () => {

    test('render Basket' , () => {
        const {container} = render(<Provider store={store}><Basket /></Provider>)

        expect(container).toBeInTheDocument()
    })

    test('render button add order' , () => {
        render(<Provider store={store}><Basket /></Provider>)
        const button = screen.queryByTestId(/оформить заказ/i)
        expect(button).toBeNull()
    })

})