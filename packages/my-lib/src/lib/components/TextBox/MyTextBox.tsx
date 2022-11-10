import styled from 'styled-components';

const TextBox = styled.input`
    border: 1px solid;
    border-radius: 0.5rem;
    border-color: #186faf;
    color: black;
    padding: 0.75rem;
    &:hover {
        border-color: #0a558c;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px #62b0e8;
        border-color: #0a558c;
    }
`;

const MyTextBox = () => {
    return <TextBox id="123" />;
};

export default MyTextBox;
