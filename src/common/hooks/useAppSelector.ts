import { RootState } from "../../app/store.ts"
import { useSelector } from "react-redux"

export const useAppSelector = useSelector.withTypes<RootState>()