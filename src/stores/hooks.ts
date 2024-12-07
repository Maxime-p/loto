import type { AppDispatch, RootState } from "@Stores"
import {
	type TypedUseSelectorHook,
	useDispatch,
	useSelector,
} from "react-redux"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
