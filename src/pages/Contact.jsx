import styled from 'styled-components'
import Button from '../components/Button.jsx'
import Title from '../components/Title.jsx'
import Description from '../components/Description.jsx'
import office from '../images/office.svg'
import phone from '../images/phone.svg'
import email from '../images/email.svg'

const Container = styled.div`
    height: 90vh;
    width: 100%;
    padding: 5rem 10rem;
    background: linear-gradient(45deg, #363431 0%, #4e4a45 100%);

`
const Wrapper = styled.div`
    height:70%;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
`   
const FormContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    `
    const InputContainer = styled.div`
        height: 100%;
        display: flex;
        align-items: flex-start;
        justify-content:flex-start;
        flex-direction: column;
        gap: 2rem;
    `
const Input = styled.input`
    min-width: 15rem;
    padding: 1rem 1.5rem;
    border-radius: 5px;
    border: none;
`
const TextArea = styled.textarea`
    min-height:17.5rem;
    min-width: 18rem;
    padding: 1rem 1.5rem;
    resize: none;
    border: none;
    border-radius: 5px;
`
const AddressContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
    justify-content: center;
`
const AddressItem = styled.div`
    display: flex;
    align-items: center;
`
const Icon = styled.img`
    width: 5.2rem;
    margin-right: 1rem;
    border-radius: 5px;
    transition: all ease 0.3s;
    cursor: pointer;
    &:hover{
        opacity: 0.9;
        transform: scale(0.95);
    }
`
const Text = styled.a`
    font-size: 1.2rem;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: all ease 0.3s;
    &:hover{
        color:coral;
    }
`
const Contact = () => {
    return (
        <div>
            <Container>
                    <Description style={{marginBottom:"0"}} desc={"Any questions?"} color={"white"}/>
                    <Title title={"Let's get in touch"} color={"white"}/>
                <Wrapper>
                    <FormContainer>
                        <InputContainer>
                            <Input placeholder="Your Name"/>
                            <Input placeholder="Your Email"/>
                            <Input placeholder="Subject"/>
                            <Button name={"send"}
                            color={"white"} backgroundColor={"#e9696b"}/>
                        </InputContainer>
                        <TextArea placeholder="Your Message"/>
                    </FormContainer>
                    <AddressContainer>
                        <AddressItem>
                            <Icon src={office}/>
                            <Text>Harrogate, UK</Text>
                        </AddressItem>
                        <AddressItem>
                            <Icon src={phone}/>
                            <Text>07830886841</Text>
                        </AddressItem>
                        <AddressItem>
                            <Icon src={email}/>
                            <Text>greghajdukphotography@gmail.com</Text>
                        </AddressItem>
                    </AddressContainer>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Contact

