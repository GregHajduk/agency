import React from 'react'
import styled from 'styled-components'

const Desc = styled.p`
    font-size: 2rem;
`
const Description = ( {desc, color} ) => {
    return (
        <Desc style={{color: `${color}`}}>
            {desc}
        </Desc>
    )
}

export default Description
