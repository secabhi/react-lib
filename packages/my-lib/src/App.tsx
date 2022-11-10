import styled from 'styled-components';
import MyButton from './lib/components/Button/MyButton';

function App() {
    return (
        <Wrapper>
            <MyButton>Click me</MyButton>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: 2rem;
    display: flex;
    justify-content: center;
`;

export default App;
