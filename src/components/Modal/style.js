import styled from 'styled-components';

export const ButtonContainer = styled.button`
    text-transform: capitalize !important;
    font-size: 1.4rem;
    background: transparent;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    color: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover {
        background: ${props => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
        color: var(--mainBlue);
    }
    &:focus {
        outline: none;
    }
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`