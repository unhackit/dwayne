import React from 'react'

const ListItem = (props) => {
    return (
        <p style={{color:'blue', fontWeight:'bold'}}>{props.name}</p>
    )
}

export default ListItem