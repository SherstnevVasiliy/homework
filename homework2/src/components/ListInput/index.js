import React, {useState} from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

function ListInput(props) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const addNewList = () => {
        if (!firstName || !lastName) {
            alert('Поля не должны быть пустыми')
         } else{
             props.onSubmit(firstName, lastName)
             setFirstName('')
             setLastName('')
         }
    }

    return (
        <div className="input-wrap">
            <Input
                value={firstName} 
                setValue={setFirstName}
                className="input" 
                placeholder="Имя..." 
                type="text"
            />
            <Input 
                value={lastName}
                setValue={setLastName}
                className="input" 
                placeholder="Фамилия..." 
                type="text"
            />
            <Button
                className="form-button"
                title="Добавить"
                onSubmit={addNewList}
            />
        </div>
    )
}

export default ListInput