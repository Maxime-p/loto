import React from "react";
import styled from "styled-components";
import Number from "./Number";

export default function Grid() {

    function generateNumbers(){
        let result = []
        for (let i = 1; i < 91; i++) {
            result.push(i)
        }
        return result
    }

    const GridContainer = styled.div`
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-columns: repeat(10, 1fr);
      grid-template-rows: repeat(9, 1fr);
      gap: 0 0;
    `

    return <GridContainer>
        {
            generateNumbers().map((e) => {
                return <Number key={e} num={e} />
            })
        }
    </GridContainer>
}
