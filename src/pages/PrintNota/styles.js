import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const NotaList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
`;

export const Nota = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    padding: 40px 10px;
    border: 10px solid #ccc;
    background: #fff;
    border-radius: 4px;
`;

export const NotaData = styled.div`
    border-right: 1px solid #eee;
    padding-right: 30px;
    margin-right: 10px;
`;

export const NotaServico = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    min-width: 300px;
    padding: 15px 10px;
    list-style: none;
`;
