import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import '../Home/Home.css'
import Button from '@material-ui/core/Button';
import Form from './Form';

function Home() {
  return (
    <div>
        <div className="home-header vertical-space">
            <Container maxWidth="lg">
                <Grid container>
                    <Grid item lg={6}>
                    <img src="/img/optimisation-de-site-internet.png" alt="Création et optimisation SEO de site internet" className="img-header"></img>
                    </Grid>
                    <Grid item lg={6}>
                    <div id="home-slogan">
                            <h1 className="white">Votre site web a-t'il activé <br />
                            <span className="bolder">ses supers pouvoirs ?</span></h1>
                            <br />
                            <div className="underline"></div>
                            <p className="white vertical-space">Disponible H24, il est votre meilleur ambassadeur. Il accueille et présente votre entreprise et vos valeurs à tous vos visiteurs.</p>
                            {/* <MyButton>évaluer mon site</MyButton> */}
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
        <Container maxWidth="lg" className="arguments">
            <h2 className="center">Votre site est bien plus qu'une carte de visite numérique</h2>
            <p className="center purple">à condition d'avoir activé ces 6 supers pouvoirs :</p>
            <br />
            <Grid container>
                <Grid item lg={4}>
                    <h3 className="vertical-space"><span style={{color: '#a27df5', fontWeight: 700, fontSize: '1.5em'}}>01. </span>Être accessible partout, tout le temps.</h3>
                    <h3 className="vertical-space"><span style={{color: '#fa983a', fontWeight: 700, fontSize: '1.5em'}}>02. </span>Inspirer confiance.</h3>
                    <h3 className="vertical-space"><span style={{color: '#f9628e', fontWeight: 700, fontSize: '1.5em'}}>03. </span>Véhiculer votre image de marque, vos valeurs.</h3>
                </Grid>
                <Grid item lg={4}>
                    <img src="/img/creation-site-web.png" alt="Création de site internet" className="img-home"></img>
                </Grid>
                <Grid item lg={4}>
                    <h3 className="vertical-space"><span style={{color: '#fa983a', fontWeight: 700, fontSize: '1.5em'}}>04. </span>Être inspirant, intéressant, voire convaincant.</h3>
                    <h3 className="vertical-space"><span style={{color: '#f9628e', fontWeight: 700, fontSize: '1.5em'}}>05. </span>Offrir une expérience agréable....</h3>
                    <h3 className="vertical-space"><span style={{color: '#a27df5', fontWeight: 700, fontSize: '1.5em'}}>06. </span>Qui donne envie de venir à nouveau !</h3>
                </Grid>
            </Grid>
        </Container>

        <div className="home-header vertical-space diagonal">
            <Form />
        </div>

    </div>
  );
}

export default Home;
