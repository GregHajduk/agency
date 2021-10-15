import React from 'react'
import styled from 'styled-components'
import box from '../images/box.jpg'
import Description from '../components/Description'
import Title from '../components/Title'
import Button from '../components/Button'
const Wrapper = styled.div`
    display: flex;
    height: 100%;
    `
const Left = styled.div`
    flex: 2;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`
const Right = styled.div`
    flex: 3;
    height: 100%;
    padding: 0 10rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    background-color: #e9696b;
`
const About = () => {
    return (
        <Wrapper>
            <Left>
                <Image src={box}/>
            </Left>
            <Right>
                <Title title={"get those creative juices flowing"} color={"white"}/>
                <Description desc={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."} color={"snow"}/>
                <Button name={"our work"} color={"white"} backgroundColor={"cadetblue"}/>
            </Right>
        </Wrapper>
    )
}

export default About
