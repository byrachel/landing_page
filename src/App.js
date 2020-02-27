import React from 'react';
import Container from '@material-ui/core/Container';import './App.css';
import Home from './components/Home/Home';
import Grid from '@material-ui/core/Grid';
import { MailOutline, Instagram } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';
import { indigo } from '@material-ui/core/colors';

// const MyButton = styled(Button)({
//   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//   border: 0,
//   borderRadius: 3,
//   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//   color: 'white',
//   height: 48,
//   padding: '0 30px',
// });

const MyButton = styled(Button)({
  fontFamily: 'Fira Sans',
  fontSize: '1em',
  fontWeight: 300,
  textTransform: 'uppercase',
  padding: '0 10px',
  color: '#191970'
});

function App() {
  return (
    <div>

        <header>
        <Container maxWidth="lg">  
          <Grid container direction="row" justify="center" alignItems="center">
              <Grid item lg={4}>
                <p className="logo">macoma</p>
              </Grid>
              <Grid item lg={6} >
                <nav>
                  <ul >
                    <li className="inline"><MyButton>Ressources</MyButton></li>
                    <li className="inline"><MyButton>Services</MyButton></li>
                    <li className="inline"><MyButton>A propos</MyButton></li>
                  </ul>
                </nav>
              </Grid>
              <Grid item lg={2}>
                <Instagram style={{ color: indigo[900], paddingRight: '5px' }} />
                <MailOutline style={{ color: indigo[900] }} />
              </Grid>
          </Grid>
          </Container>
        </header>
        <Home></Home>

    </div>
  );
}

export default App;
