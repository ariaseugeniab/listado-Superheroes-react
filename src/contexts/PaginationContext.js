import React, {useState} from 'react'

const Context = React.createContext({})

export function PaginationContext({children}){
    const [currentPage, setCurrentPage] = useState(1)

    return <Context.Provider value={{currentPage, setCurrentPage}} >
        {children}
    </Context.Provider>

}

export default Context