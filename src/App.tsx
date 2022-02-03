import React, {useEffect, useState} from 'react'
import Grid from "./Components/Grid";

function App() {

    const [loading, setLoading] = useState<boolean>(false)
    const [grids, setGrids] = useState<boolean[][]>([])
    const [currentGrid, setCurrentGrid] = useState<number>(0)

    const newGrid = () => {
        return new Array(90).fill(false)
    }

    useEffect(() => {
        if (localStorage.getItem('0')) {
            setLoading(true)
            let i = 0
            while (localStorage.getItem(String(i))) {
                setGrids([...grids, JSON.parse(localStorage.getItem(String(i))!)])
                i++
            }
            setLoading(false)
        } else {
            setGrids([newGrid()])
        }
    }, [])

    if (loading){
        return <></>
    }

    useEffect(() => {
        grids.forEach((grid, key) => {
            localStorage.setItem(String(key), JSON.stringify(grid))
        })
    }, [grids])

    function addGrid() {
        setGrids([...grids, newGrid()])
        setCurrentGrid(grids.length)
    }

    function gridUpdateData(id: number){
        let grid = grids[currentGrid]
        grid[id] = !grid[id]
        setGrids([...grids])
    }

    function clear() {
        localStorage.clear()
    }

    if (grids.length === 0){
        return <></>
    }

    return (
        <>
            <button onClick={addGrid}>Ajouter une grille</button>
            <button onClick={clear}>Clear</button>
            {
                grids.map((grid, key) => {
                    return <button key={key} onClick={() => setCurrentGrid(key)}>{key+1}</button>
                })
            }
            <Grid data={grids[currentGrid]} updateData={gridUpdateData}/>
        </>
    )
}

export default App
