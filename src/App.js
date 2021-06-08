import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Navigation from './components/Navigation/Navigation';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import Home from './components/HomePage/Home';

const MainSection = styled.section`
  margin: 0;
  padding: 0;
`

function App() {
  return (
    <MainSection>
      <Navigation/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </MainSection>
  );
}

export default App;
