import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';

const MainSection = styled.section`
  margin: 0;
  padding: 0;
`

function App() {
  return (
    <MainSection>
      <Navigation/>
    </MainSection>
  );
}

export default App;
