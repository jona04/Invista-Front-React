import styled from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 15px;
    margin: 80px auto;

    > h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`;

export const NotaList = styled.ul`
    padding: 30px 0;
    margin: 30px 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #eee;
    list-style: none;
`;

export const Nota = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
    border: 5px solid #ccc;
    background: #fff;
    border-radius: 4px;
`;

export const NotaData = styled.div`
    padding-right: 30px;
    margin-right: 10px;
    width: 290px;

    > h1 {
        color: #3a3a3a;
    }

    > span {
        font-weight: bold;
        color: #909090;
    }
`;

export const NotaServico = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    min-width: 300px;
    padding: 5px 10px;
    list-style: none;

    > ul {
        list-style: none;
        > li {
            padding: 7px 10px 0 10px;
            & + li {
                margin-top: 7px;
                border-top: 1px solid #eee;
            }

            strong {
                text-transform: uppercase;
                font-size: 14px;
                color: #3a3a3a;
            }

            p {
                margin-top: 2px;
            }
        }
    }
    > strong {
        color: #3a3a3a;
        margin-top: 15px;
        padding-top: 10px;
        font-size: 14px;
    }
`;
