import React, {useState} from "react";
import styled from "styled-components";

interface NumberProps {
    num: number
}

export default function Number({num}: NumberProps) {

    const [selected, setSelected] = useState(false)

    const NumberText = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      border: 1px solid black;
      background-color: ${selected ? 'var(--selected)' : 'transparent'};
      user-select: none;
    `

    return <NumberText onClick={() => setSelected(!selected)}>
        {num}
    </NumberText>
}
