import { updateNumber } from "@Stores/gridSlice"
import { useAppDispatch, useAppSelector } from "@Stores/hooks"

interface IProps {
	num: number
	value: boolean
}

export const Case = (props: IProps) => {
	const dispatch = useAppDispatch()

	const grids = useAppSelector((state) => state.grids.value)
	const currentGrid = useAppSelector((state) => state.settings.currentGrid)
	const fontSize = useAppSelector((state) => state.settings.baseFontSize)

	const last = grids[currentGrid][grids[currentGrid].length - 1]

	const handleClick = () => {
		dispatch(updateNumber({ grid: currentGrid, case: props.num }))
	}

	const styles =
		"flex justify-center items-center m-0 border border-black  select-none opacity-100 transition-opacity duration-500"

	return (
		<div
			onClick={handleClick}
			className={`${styles} ${props.value ? "text-white bg-[var(--selected)]" : "text-inherit bg-transparent"} ${props.num === last ? "animate-pulse" : ""}`}
			style={{fontSize:   props.num === last ? fontSize *1.4 : fontSize}}
		>
			{props.num}
		</div>
	)
}
