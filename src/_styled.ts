import styled from "styled-components"

const Container = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px
`

const ContainerSettingCounter = styled.div`
    width: 200px;
    min-height: 150px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    padding: 8px;
`

const CounterSettingValue = styled.div`
    width: 180px;
    min-height: 80px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`
const ButtonSettingContainer = styled.div`
    width: 180px;
    min-height: 44px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const ContainerCounter = styled.div`
    width: 200px;
    min-height: 150px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    padding: 8px;
`
const CounterValueWrapper = styled.div`
    width: 180px;
    min-height: 80px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    `

const ButtonContainer = styled.div`
    width: 180px;
    min-height: 44px;
    border: 1px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
const InputLabel = styled.label`
  color: rgba(28, 211, 232, 0.89);
    font-weight: bold;
    font-size: 12px;
`
const InputSetting = styled.input`
    width: 70px;
    text-align: center;
    font-size: 12px;
    border: 1.5px solid rgba(28, 211, 232, 0.89);
    border-radius: 5px;
    background-color: #ffffff;
    &.inputError{
        background-color: #f47e7e;
        border: 1.5px solid red;
        border-radius: 5px;

    }

`
const WrapperInput = styled.div `
display: flex;
    justify-content: space-around;
    
`
const CounterValue = styled.h6 `
        color: rgba(28, 211, 232, 0.89);
        font-size: 40px;
    &.error {
        color: red;
        font-size: 40px;
    }
    `
const MessageSetting = styled.h6`
    color: rgba(28, 211, 232, 0.89);
    text-align: center;
    &.messageError {
        color: red;
        font-weight: bold;
    }
  `
const CounterGlobalContainer = styled.section `
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(11, 10, 10, 0.96);
  
`

export const S ={
  Container,
  ContainerSettingCounter,
  CounterSettingValue,
  ButtonSettingContainer,
  InputSetting,
  WrapperInput,
  CounterValue,
  MessageSetting,
  InputLabel,
  ButtonContainer,
  CounterValueWrapper,
  ContainerCounter,
  CounterGlobalContainer

}