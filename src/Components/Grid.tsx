import React from "react";
import styled from "styled-components";
import Number from "./Number";

interface GridProps{
    data: boolean[]
    updateData: (id: number) => void
}

export default function Grid(props: GridProps) {

    const GridContainer = styled.div`
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(9, 1fr);
      gap: 0 0;
    `

    function updateValue(id: number) {
        props.updateData(id)
    }

    return <GridContainer>
        {
            props.data.map((value, key) => {
                return <Number key={key} num={key+1} value={value} updateValue={updateValue} />
            })
        }
    </GridContainer>
}
