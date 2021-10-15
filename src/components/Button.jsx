import React from 'react'
import styled from 'styled-components'
const Btn = styled.a`
    padding: 0.5rem 3rem;
    border-radius: 8px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`
const Button = ( {name, color, backgroundColor} ) => {
    return (
        <Btn style={{color: `${color}`, backgroundColor:`${backgroundColor}`}}>
            {name}
        </Btn>
    )
}

export default Button
