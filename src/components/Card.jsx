import React from 'react'
import styled from 'styled-components'

const CardSingle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70%;
    padding:0 0.5rem;
    background-color: #776552;
    border-radius: 10px;
    position: relative;
    transition:all 0.5s ease;
    flex: 1;
        &:not(:last-child){
        margin-right: 1rem;
    };
    &:hover{
        transform: scale(1.02);
        background-color: #615344;
    }

`
const ImageContainer = styled.div`
    height: 40%;
    border-radius: 50%;
    padding:2rem;
    position: absolute;
    background-color: cadetblue;
    top: -20%;
    `

const Image = styled.img`
    width: 100%;
    height: 100%;

    
`
const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #ffffff;
    text-transform: capitalize;
`
const Desc = styled.p`
    font-size: 1.2rem;
    line-height: 1.7;
    text-align: center;
    color: #eeeeee;
`
const Card = ( {title, image, desc} ) => {
    return (
        <CardSingle>
            <ImageContainer>
            <Image src={image}/>
            </ImageContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>  
        </CardSingle>
    )
}

export default Card


