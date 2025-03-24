import { Button } from "./Button.tsx"
import { ChangeEvent, useEffect } from "react"
import { S } from "../app/_styled.ts"
import { useAppDispatch } from "../common/hooks/useAppDispatch.ts"
import { useAppSelector } from "../common/hooks/useAppSelector.ts"
import { selectMax } from "../model/max-selectors.ts"
import { selectStart } from "../model/start-selectors.ts"
import { selectCounter } from "../model/counter-selectors.ts"
import { selectModeModal } from "../model/modeModal-selectors.ts"
import { incrementCounterAC, resetCounterAC } from "../model/counter-reducer.ts"
import { createModeModalAC } from "../model/modeModal-reducer.ts"
import { maxCounterValueAC } from "../model/max-reducer.ts"
import { startCounterValueAC } from "../model/start-reducer.ts"


export const CounterWithSetting = () => {

  const dispatch = useAppDispatch()

  const max = useAppSelector(selectMax)
  const start = useAppSelector(selectStart)
  const counter = useAppSelector(selectCounter)
  const modeModal = useAppSelector(selectModeModal)


  useEffect(() => {
    const storedStart = localStorage.getItem("counterValue")
    const storedMax = localStorage.getItem("counterValueMax")

    if (storedStart) {
      const newValue = JSON.parse(storedStart)
      dispatch(startCounterValueAC(newValue))
      dispatch(incrementCounterAC(newValue))
    }

    if (storedMax) {
      const newValueMax = JSON.parse(storedMax)
      dispatch(maxCounterValueAC(newValueMax))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(start))
    localStorage.setItem("counterValueMax", JSON.stringify(max))
  }, [start, max])


  const countMax = counter === max
  let maxError = max <= 0 || start >= max
  let startError = start < 0 || start >= max

  const disabledSetButtonHandler = maxError || startError || modeModal
  const disabledIncButtonHandler = counter === max || !modeModal
  const disabledResetButtonHandler = !modeModal


  const classNameCounter = countMax ? "error" : ""
  const classNameMessageSetting = maxError || startError ? "messageError" : ""
  const inputStartError = startError ? "inputError" : ""
  const inputMaxError = maxError ? "inputError" : ""


  const onClickIncButtonHandler = () => {
    dispatch(incrementCounterAC())
  }

  const onClickResetButtonHandler = () => {
    dispatch(resetCounterAC(start))
  }

  const onClickSetButtonHandler = () => {
    dispatch(resetCounterAC(start))
    dispatch(createModeModalAC(true))
  }

  const onChangeStartInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStart = +e.currentTarget.value
    dispatch(startCounterValueAC(newStart))
    dispatch(createModeModalAC(false))
  }

  const onChangeMaxInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newMax = +e.currentTarget.value
    dispatch(maxCounterValueAC(newMax))
    dispatch(createModeModalAC(false))
  }


  return (
    <S.Container>

      <S.ContainerSettingCounter>
        <S.CounterSettingValue>
          <S.WrapperInput>
            <S.InputLabel>max value:</S.InputLabel>
            <S.InputSetting type="number" value={max} onChange={onChangeMaxInputHandler}
                            className={inputMaxError} />
          </S.WrapperInput>

          <S.WrapperInput>
            <S.InputLabel>start value:</S.InputLabel>
            <S.InputSetting type="number" value={start} onChange={onChangeStartInputHandler}
                            className={inputStartError} />
          </S.WrapperInput>
        </S.CounterSettingValue>

        <S.ButtonSettingContainer>
          <Button name="set" onClick={onClickSetButtonHandler} disabled={disabledSetButtonHandler} />
        </S.ButtonSettingContainer>
      </S.ContainerSettingCounter>


      <S.ContainerCounter>
        <S.CounterValueWrapper>
          {
            modeModal
              ? <S.CounterValue className={classNameCounter}>{counter}</S.CounterValue>
              : maxError || startError
                ? <S.MessageSetting className={classNameMessageSetting}>Incorrect
                  value</S.MessageSetting>
                : <S.MessageSetting>enter values and press 'set'</S.MessageSetting>
          }
        </S.CounterValueWrapper>
        <S.ButtonContainer>
          <Button name="inc" onClick={onClickIncButtonHandler} disabled={disabledIncButtonHandler} />
          <Button name="reset" onClick={onClickResetButtonHandler} disabled={disabledResetButtonHandler} />
        </S.ButtonContainer>
      </S.ContainerCounter>

    </S.Container>
  )
}