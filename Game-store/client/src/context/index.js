import {useState,createContext} from 'react';

export const SelectContext = createContext({});


const ToDoProvider = ({children}) => {
    const [cardList,setCardList] = useState(false)

    const tableGames = () => setCardList(true)
    const cardGames = () => setCardList(false)

    return (
        <SelectContext.Provider value={{cardList,tableGames,cardGames}}>
            {children}
        </SelectContext.Provider>
    );
};

export default ToDoProvider;