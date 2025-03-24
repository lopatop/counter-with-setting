import { S } from './_styled.ts'
import '../App.css'
import { CounterWithSetting } from "../components /CounterWithSetting.tsx"

export const App = () => {



  return (
      <S.CounterGlobalContainer>
        <CounterWithSetting/>
      </S.CounterGlobalContainer>
  )
}


