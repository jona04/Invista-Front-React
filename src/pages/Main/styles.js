import styled, { keyframes, css } from 'styled-components';
import { darken } from 'polished';

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

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    select {
        flex: 1;
        height: 40px;
        font-size: 16px;
    }
`;

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs((props) => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #235952;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &[disable] {
        cursor: not-allowed;
        opacity: 0.6;
    }

    ${(props) =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const NotaList = styled.ul`
    padding-top: 30px;
    margin-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;
`;

export const Nota = styled.li.attrs((props) => ({
    status: props.status,
    selected: props.selected,
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    justify-content: space-between;
    padding: 40px 10px;
    border: 10px solid
        ${(props) => (props.selected === true ? `#323232` : `#ccc`)};
    background: ${(props) => (props.status === 0 ? `#fde2e2` : `#b9ebcc`)};
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
        color: #3a3a3a;
    }
`;

export const NotaServico = styled.div`
    display: flex;
    align-items: start;
    flex-direction: column;
    min-width: 300px;
    padding: 15px 10px;
    list-style: none;

    > ul {
        list-style: none;
        > li {
            padding: 10px 10px 0 10px;
            & + li {
                margin-top: 15px;
                border-top: 1px solid #eee;
            }

            strong {
                text-transform: uppercase;
                font-size: 15px;
                color: #3a3a3a;
            }

            p {
                margin-top: 5px;
            }
        }
    }
    > strong {
        color: #3a3a3a;
        margin-top: 60px;
        font-size: 16px;
    }
`;
