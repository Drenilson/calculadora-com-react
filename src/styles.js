import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #2E2E2E;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FF8C00;
    width: 50%;
    border: 2px solid #800080;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #800080;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: #FF8C00; /* Laranja escuro */
`
