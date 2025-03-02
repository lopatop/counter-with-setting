import { Button } from "./Button.tsx"
import { ChangeEvent, useEffect, useState } from "react"
import { S } from "../_styled.ts"


export const CounterWithSetting = ()=> {


  const [max, setMax] = useState<number>(5)
  const [start, setStart] = useState<number>(0)
  const [counter, setCounter] = useState<number>(0)
 // const [maxError, setMaxError] = useState<boolean>(false)
 //  const [startError, setStartError] = useState<boolean>(false)
  const [modeModal, setModeModal] = useState<boolean>(false)

  useEffect(() => {
    const storedStart = localStorage.getItem("counterValue");
    const storedMax = localStorage.getItem("counterValueMax");

    if (storedStart) {
      const newValue = JSON.parse(storedStart);
      setStart(newValue);
      setCounter(newValue);
    }

    if (storedMax) {
      setMax(JSON.parse(storedMax));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(start));
    localStorage.setItem("counterValueMax", JSON.stringify(max));
  }, [start, max]);


  const countMax = counter === max
  let maxError = max <= 0 || start >= max;
  let startError = start < 0 || start >= max;

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
    // setStartError(newStart < 0 || newStart >= max)
    // setMaxError(newStart >= max)
    setModeModal(false)
  }

  const onChangeMaxInputHandler =(e:ChangeEvent<HTMLInputElement>)=>{
    const newMax =+e.currentTarget.value
    setMax(newMax)
    // setMaxError(start >= newMax || newMax <= 0 )
    // setStartError(start >= newMax || start < 0)
    setModeModal(false)
  }


  return (
    <S.Container>

      <S.ContainerSettingCounter>
        <S.CounterSettingValue>
          <S.WrapperInput>
            <S.InputLabel>max value:</S.InputLabel>
            <S.InputSetting type="number" value={max} onChange={onChangeMaxInputHandler} className={maxError? 'inputError' : ''} />
          </S.WrapperInput>

          <S.WrapperInput>
            <S.InputLabel>start value:</S.InputLabel>
            <S.InputSetting type="number" value={start} onChange={onChangeStartInputHandler} className={startError ? 'inputError': ''} />
          </S.WrapperInput>

        </S.CounterSettingValue>

        <S.ButtonSettingContainer>
          <Button name='set' onClick={onClickSetButtonHandler} disabled={disabledSetButtonHandler}/>
        </S.ButtonSettingContainer>
      </S.ContainerSettingCounter>


      <S.ContainerCounter>
        <S.CounterValueWrapper>
          {
            modeModal
              ? <S.CounterValue className={classNameCounter}>{counter}</S.CounterValue>
              :
                maxError || startError
                ? <S.MessageSetting className={maxError || startError? 'messageError': ''}>Incorrect value</S.MessageSetting>
                : <S.MessageSetting >enter values and press 'set'</S.MessageSetting>
          }
        </S.CounterValueWrapper>
        <S.ButtonContainer>
          <Button name='inc' onClick={onClickIncButtonHandler} disabled={disabledIncButtonHandler}/>
          <Button name='reset' onClick={onClickResetButtonHandler} disabled={disabledResetButtonHandler}/>
        </S.ButtonContainer>
      </S.ContainerCounter>

    </S.Container>
  )
}
