import { Control } from "@Components/Control"
import { useEffect, useState } from "react"
import { Grid } from "./components/Grid"

function App() {
	const [loading, setLoading] = useState<boolean>(false)
	const [grids, setGrids] = useState<boolean[][]>([])

	useEffect(() => {
		if (localStorage.getItem("0")) {
			setLoading(true)
			let i = 0
			const data = []
			while (localStorage.getItem(String(i))) {
				data.push(JSON.parse(localStorage.getItem(String(i)) ?? ""))
				i++
			}
			setGrids(data)

			setLoading(false)
		} else {
			setGrids([new Array(90).fill(false)])
		}
	}, [])

	if (loading) {
		return <></>
	}

	if (grids.length === 0) {
		return <></>
	}

	return (
		<main>
			<Control />
			<Grid />
		</main>
	)
}

export default App
