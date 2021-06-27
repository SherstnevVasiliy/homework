import React, { useState } from 'react'
import ListView from '../../components/ListView'
import ListInput from '../../components/ListInput'

function ListContainer() {
    const [list, setList] = useState([])

        const addNote = (firstName, lastName) => {
        setList(prev => [
            ...prev,
            {
                id: Date.now().toString(),
                firstName,
                lastName
            }
        ])
    }

    const removeNote = (id) => {
        setList(prev => prev.filter(list => list.id !== id))
    }
    
    return (
        <>
            <ListInput onSubmit={addNote}/>
            <ListView data={list} onRemove={removeNote}/>
        </>
    )
}

export default ListContainer