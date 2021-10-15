import React from 'react'
import styled, { keyframes } from 'styled-components'
import Card from '../components/Card'
import Title from '../components/Title'
import robot from '../images/robot.jpg'
import document from '../images/document.svg'
import develop from '../images/monitor.svg'
import applications from '../images/applications.svg'

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    background-color: #fcd866;
`
const Left = styled.div`
    width: 60%;
    padding-left: 10rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`
const CardsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 65%;
    width:100%;
`

const Right = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`
    const RobotMove = keyframes`
        0% {transform:translateY(0px)};
        50% {transform:translateY(-50px)}
        100% {transform:translateY(0px)};
    
    `
const Image = styled.img`
    height: 80%;
    width: 80%;
    object-fit: cover;
    animation-name:${RobotMove};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`
const Services = () => {
    return (
        <Wrapper>
            <Left>
                <Title title={"services"}/>
                <CardsWrapper>
                    <Card title={"web design"} image={document} desc={"lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do."}/>
                    <Card title={"web developement"} image={develop} desc={"lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do."}/>
                    <Card title={"web application"} image={applications} desc={"lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do."}/>
                </CardsWrapper>
            </Left>
            <Right>
                <Image src={robot} />
            </Right>
        </Wrapper>
    )
}

export default Services
