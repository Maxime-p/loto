import React from "react";
import styled from "styled-components";

interface NumberProps {
    num: number
    value: boolean
    updateValue: (id: number) => void
}

export default function Number(props: NumberProps) {

    const NumberText = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
      border: 1px solid black;
      color: ${props.value ? '#fff' : 'inherit'};
      background-color: ${props.value ? 'var(--selected)' : 'transparent'};
      user-select: none;
    `

    return <NumberText onClick={() => props.updateValue(props.num-1)}>
        {props.num}
    </NumberText>
}
