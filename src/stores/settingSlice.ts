import { type PayloadAction, createSlice } from "@reduxjs/toolkit"

interface SettingState {
	currentGrid: number
	currentColor: string
	baseFontSize: number
}

const initialState: SettingState = {
	currentGrid: 0,
	currentColor: "#02885C",
	baseFontSize: 50,
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
		setBaseFontSize: (state, action: PayloadAction<number>) => {
			state.baseFontSize = action.payload
		},
	},
})

export const { setCurrentGrid, setCurrentColor, setBaseFontSize } =
	settingSlice.actions

export default settingSlice.reducer
