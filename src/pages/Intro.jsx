import React from 'react'
import styled from 'styled-components'
import intro from '../images/intro.jpg'
import Button from '../components/Button'
import Title from '../components/Title'

const Container = styled.div`
    height: calc(100vh - 5rem);
    background-color: white;
    display: flex;
`   
    const Wrapper =styled.div`
    width:70%;
    `
const Left = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    background-color: white;
    `
const Description = styled.p`
    font-size: 2rem;
    margin-bottom: 2rem;
`  
const Right = styled.div`
    width: 50%;
    overflow: hidden;
`   
const Image = styled.img`
    height: 100%;
    width: 100%;
    clip-path: polygon(23% 0, 100% 0, 100% 100%, 0 100%);
    object-fit: cover;
`
const Intro = () => {
    return (
        <Container>
            <Left>
                <Wrapper>
                <Title title={"we made marketing easy."} />
                <Description>
                    A creative agency that spends its days crafting artistic and engaging work for brands and fellow businesses.
                </Description>
                <Button name={"let's talk"} color={"white"} backgroundColor={"#e9696b"} />
                </Wrapper>
            </Left>
            <Right>
                <Image src={intro}/>
            </Right>
        </Container>
    )
}

export default Intro

