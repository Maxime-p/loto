import { Case } from "@Components/Case"

import { useAppSelector } from "@Stores/hooks"

export const Grid = () => {
	const grids = useAppSelector((state) => state.grids.value)
	const currentGrid = useAppSelector((state) => state.settings.currentGrid)

	const fullArray = Array.from(Array(90), (_, i) => i)

	return (
		<div className="w-screen h-screen grid grid-cols-10 grid-rows-9 gap-0">
			{fullArray.map((_value, index) => {
				return (
					<Case
						key={index}
						num={index + 1}
						value={grids[currentGrid].includes(index + 1)}
					/>
				)
			})}
		</div>
	)
}
