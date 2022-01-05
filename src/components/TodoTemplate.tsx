import React from 'react';
import styled from 'styled-components';

const Template = styled.div`
    width: 550px;
    height: 700px;
    position: relative;
    background: white;
    border-radius: 8px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
    margin: 100px auto;
    display: flex;
    flex-direction: column;
`;

function TodoTemplate({children}) {
    return (
        <Template>
            {children}
        </Template>
    )
}

export default TodoTemplate
