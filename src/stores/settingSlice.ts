import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

interface SettingState {
	currentGrid: number
	currentColor: string
}

const initialState: SettingState = {
	currentGrid: 0,
	currentColor: "#02885C",
}

export const settingSlice = createSlice({
	name: "setting",
	initialState,
	reducers: {
		setCurrentGrid: (state, action: PayloadAction<number>) => {
			state.currentGrid = action.payload
		},
		setCurrentColor: (state, action: PayloadAction<string>) => {
			state.currentColor = action.payload
		},
	},
})

export const { setCurrentGrid, setCurrentColor } =
	settingSlice.actions

export default settingSlice.reducer
