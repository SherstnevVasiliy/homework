import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import Button from '../UI/Button';
import './style.css'

function ListView({data, onRemove}) {
    return (
            <div>
                {
                    data.map(item => {
                        return (
                            <div key={uuidv4()} className="item-wrap">
                                <p>{item.firstName}</p>
                                <p>{item.lastName}</p>
                                <Button
                                    className="remove-button"
                                    title="удалить"
                                    onSubmit={() => onRemove(item.id)}
                                />
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default ListView