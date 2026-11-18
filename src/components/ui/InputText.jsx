import React from 'react'
import styled from 'styled-components';

export default function InputText({inputValue,inputChange, Icon, ...extraProps}) {
    return (
        <InputTextStyled>
            {Icon}
            <input value={inputValue} onChange={inputChange} type="text" {...extraProps} />
        </InputTextStyled>
    )
}

const InputTextStyled = styled.div`
    border: 1px solid black;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px;
    .icon {
      border: none;
      margin-left: 8px;
      color: #92a2b1;
    }

    input {
      width: 100%;
      border: none;
      font-size: 15px;
      color: #17171a;
    }

    &::placeholder {
      background: white;
      color: lightgrey;
    }
`;
