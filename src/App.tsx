import React, {useEffect, useState} from 'react'
import Grid from "./Components/Grid";
import {ChromePicker} from "react-color";

function App() {

    const [loading, setLoading] = useState<boolean>(false)
    const [grids, setGrids] = useState<boolean[][]>([])
    const [currentGrid, setCurrentGrid] = useState<number>(0)
    const [colorModal, setColorModal] = useState<boolean>(false)
    const [bgColor, setBGColor] = useState<string>("#02885C")

    const newGrid = () => {
        return new Array(90).fill(false)
    }

    useEffect(() => {
        if (localStorage.getItem('0')) {
            setLoading(true)
            let i = 0
            let data = []
            while (localStorage.getItem(String(i))) {
                data.push(JSON.parse(localStorage.getItem(String(i))!))
                i++
            }
            setGrids(data)

            setLoading(false)
        } else {
            setGrids([newGrid()])
        }
    }, [])

    if (loading) {
        return <></>
    }

    function addGrid() {
        setGrids([...grids, newGrid()])
        setCurrentGrid(grids.length)
    }

    function gridUpdateData(id: number) {
        let grid = grids[currentGrid]
        grid[id] = !grid[id]
        localStorage.setItem(String(currentGrid), JSON.stringify(grid))
        setGrids([...grids])
    }

    function updateLocalStorage() {
        localStorage.clear()
        grids.forEach((value, index) => {
            localStorage.setItem(String(index), JSON.stringify(value))
        })
    }

    function clearCurrent() {
        if (window.confirm('Action dangereuse !')) {
            grids[currentGrid].forEach((_, index) => {
                grids[currentGrid][index] = false
            })
            setGrids([...grids])
            updateLocalStorage()
        }
    }

    function clear() {
        if (window.confirm('Action dangereuse !')) {
            setGrids([newGrid()])
            updateLocalStorage()
        }
    }

    function handleColorChange(color: any) {
        setBGColor(color.hex)
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--selected', bgColor)
    }, [bgColor])

    if (grids.length === 0) {
        return <></>
    }

    return (
        <>
            <div className="commands">
                <div>
                    <button onClick={addGrid}>Ajouter une grille</button>
                    {
                        grids.map((grid, key) => {
                            return <button key={key} onClick={() => setCurrentGrid(key)}>{key + 1}</button>
                        })
                    }
                </div>
                <div>
                    <button onClick={() => setColorModal(!colorModal)}/>
                    <button onClick={clearCurrent}>Suppression active</button>
                    <button onClick={clear}>Suppression</button>
                </div>
            </div>
            <ChromePicker
                className={colorModal ? 'color-modal' : 'hidden'}
                color={bgColor}
                onChangeComplete={handleColorChange}
            />
            <Grid data={grids[currentGrid]} updateData={gridUpdateData}/>
        </>
    )
}

export default App
