import { useEffect, useState} from "react"

import { addGrid, clearGrid, resetGrids } from "@Stores/gridSlice"
import { useAppDispatch, useAppSelector } from "@Stores/hooks"
import {
	setBaseFontSize,
	setCurrentColor,
	setCurrentGrid,
} from "@Stores/settingSlice"
import {Button} from "@Components/Button";
import {usePopper} from "react-popper";
import { HexColorPicker } from "react-colorful"

export const Control = () => {
	const dispatch = useAppDispatch()

	const [referenceElement, setReferenceElement] = useState<HTMLButtonElement | null>(null)
	const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null)
	const [isPopperVisible, setIsPopperVisible] = useState(false)
	const { styles, attributes } = usePopper(referenceElement, popperElement);

	const grids = useAppSelector((state) => state.grids.value)

	const currentGrid = useAppSelector((state) => state.settings.currentGrid)
	const currentColor = useAppSelector((state) => state.settings.currentColor)
	const fontSize = useAppSelector((state) => state.settings.baseFontSize)

	const handleColorChange = (color: string) => {
		dispatch(setCurrentColor(color))
	}

	useEffect(() => {
		document.documentElement.style.setProperty("--selected", currentColor)
	}, [currentColor])

	return (
		<>
			<div className="flex justify-between items-stretch m-1.5">
				<div className="flex justify-start items-stretch gap-1">
					<Button
						className="p-2"
						onClick={() => {
							dispatch(addGrid())
							dispatch(setCurrentGrid(grids.length))
						}}
					>
						Ajouter une grille
					</Button>
					{grids.map((_grid, index) => {
						return (
							<Button
								className={`p-2 ${currentGrid === index ? "opacity-50" : ""}`}
								key={index}
								onClick={() => dispatch(setCurrentGrid(index))}
							>
								{index + 1}
							</Button>
						)
					})}
				</div>
				<div className="flex justify-start items-stretch gap-1">
					<div className="flex flex-col justify-center"><input
						type="range"
						min="10"
						max="100"
						value={fontSize}
						onChange={(e) => {
							dispatch(setBaseFontSize(Number(e.target.value)))
						}}
						className="p-2 h-4"
					/></div>
					<Button
						className="p-2"
						onClick={() => setIsPopperVisible(!isPopperVisible)}
						ref={setReferenceElement}
					/>
					{isPopperVisible && (
						<div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
							<HexColorPicker
								color={currentColor}
								onChange={handleColorChange}
							/>
						</div>
					)}
					<Button
						className="p-2"
						onClick={() => {
							if (window.confirm("Action dangereuse !")) {
								dispatch(clearGrid(currentGrid))
							}
						}}
					>
						Suppression active
					</Button>
					<Button
						className="p-2"
						onClick={() => {
							if (window.confirm("Action dangereuse !")) {
								dispatch(resetGrids())
								dispatch(setCurrentGrid(0))
							}
						}}
					>
						Suppression
					</Button>
				</div>
			</div>
		</>
	)
}
