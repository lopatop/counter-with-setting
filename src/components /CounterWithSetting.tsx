import { Button } from "./Button.tsx"
import { ChangeEvent, useState } from "react"
import styled from "styled-components"


export const CounterWithSetting = ()=> {


  const [max, setMax] = useState<number>(5)
  const [start, setStart] = useState<number>(0)
  const [counter, setCounter] = useState<number>(0)
  const [maxError, setMaxError] = useState<boolean>(false)
  const [startError, setStartError] = useState<boolean>(false)
  const [modeModal, setModeModal] = useState<boolean>(false)


  const countMax = counter === max

  const disabledSetButtonHandler = maxError || startError || modeModal
  const disabledIncButtonHandler = counter === max || !modeModal;
  const disabledResetButtonHandler = !modeModal;

  const classNameCounter = countMax? 'error' : ''


  const onClickIncButtonHandler =()=>{
    setCounter(counter + 1)
  }

  const onClickResetButtonHandler =()=>{
    setCounter(start)
  }

  const onClickSetButtonHandler =()=>{
    setCounter(start)
    setModeModal(true)
  }

  const onChangeStartInputHandler =(e:ChangeEvent<HTMLInputElement>)=>{
    const newStart =+e.currentTarget.value
    setStart(newStart)
    setStartError(newStart < 0 || newStart >= max)
    setMaxError(newStart >= max)
    setModeModal(false)
  }

  const onChangeMaxInputHandler =(e:ChangeEvent<HTMLInputElement>)=>{
    const newMax =+e.currentTarget.value
    setMax(newMax)
    setMaxError(start >= newMax || newMax <= 0 )
    setStartError(start >= newMax || start < 0)
    setModeModal(false)
  }


  return (
    <Container>

      <ContainerSettingCounter>
        <CounterSettingValue>
          <WrapperInput>
            <InputLabel>max value:</InputLabel>
            <InputSetting type="number" value={max} onChange={onChangeMaxInputHandler} className={maxError? 'inputError' : ''} />
          </WrapperInput>

          <WrapperInput>
            <InputLabel>start value:</InputLabel>
            <InputSetting type="number" value={start} onChange={onChangeStartInputHandler} className={startError ? 'inputError': ''} />
          </WrapperInput>

        </CounterSettingValue>

        <ButtonSettingContainer>
          <Button name='set' onClick={onClickSetButtonHandler} disabled={disabledSetButtonHandler}/>
        </ButtonSettingContainer>
      </ContainerSettingCounter>


      <ContainerCounter>
        <CounterValueWrapper>
          {
            modeModal
              ? <CounterValue className={classNameCounter}>{counter}</CounterValue>
              :
                maxError || startError
                ? <MessageSetting className={maxError || startError? 'messageError': ''}>Incorrect value</MessageSetting>
                : <MessageSetting >enter values and press 'set'</MessageSetting>
          }
        </CounterValueWrapper>
        <ButtonContainer>
          <Button name='inc' onClick={onClickIncButtonHandler} disabled={disabledIncButtonHandler}/>
          <Button name='reset' onClick={onClickResetButtonHandler} disabled={disabledResetButtonHandler}/>
        </ButtonContainer>
      </ContainerCounter>

    </Container>
  )
}

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
