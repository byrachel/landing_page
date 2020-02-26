import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './Home.css'
import '../../../src/App.css'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    
    }

    render() {
        return (
            <div>
            <Container>
                <h2 className="white center vertical-space">10 questions pour auditer votre stratégie :</h2>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <Grid container>
                        <Grid item lg={6}>
                            <p className="white">1. Combien avez-vous de visiteurs par mois ? </p>
                            <div className="custom-select">
                                <select name="visit">
                                    <option value="0">Ne sais pas</option>
                                    <option value="1">Moins de 100 visiteurs uniques / mois</option>
                                    <option value="2">Moins de 1000 visiteurs uniques / mois</option>
                                    <option value="3">Plus de 100 visiteurs uniques / mois</option>
                                </select>
                            </div>
                            <br />
                            <p className="white">2. Avez-vous un blog ? </p>
                            <div className="custom-select">
                                <select name="blog">
                                    <option value="0">Non</option>
                                    <option value="1">Oui</option>
                                </select>
                            </div>
                            <br />
                            <p className="white">3. Combien d'articles publiez-vous en moyenne ? </p>
                            <div className="custom-select">
                                <select name="post">
                                    <option value="0">Moins d'un par trimestre</option>
                                    <option value="1">Au moins 1 par mois</option>
                                    <option value="2">2 à 3 fois par mois</option>
                                    <option value="3">Au moins 1 fois par semaine</option>
                                </select>
                            </div>
                            <br />
                            <p className="white">4. Sur quels réseaux sociaux êtes-vous ? </p>
                            <div className="custom-select">
                                <p className="white"><input type="checkbox" name="social" id="none" value="0" /><label for="none">Aucun</label></p>
                                <p className="white"><input type="checkbox" name="social" id="none" value="1" /><label for="none">Facebook</label></p>
                                <p className="white"><input type="checkbox" name="social" id="none" value="1" /><label for="none">Instagram</label></p>
                                <p className="white"><input type="checkbox" name="social" id="none" value="1" /><label for="none">Linkedin</label></p>
                                <p className="white"><input type="checkbox" name="social" id="none" value="1" /><label for="none">Twitter</label></p>
                                <p className="white"><input type="checkbox" name="social" id="none" value="1" /><label for="none">Snapchat</label></p>
                            </div>
                            <br />
                            <p className="white">5. Quel type de contenu publiez-vous ? </p>
                            <div className="custom-select">
                                <select name="content">
                                    <option value="0">Les actualités et événements de l'entreprise</option>
                                    <option value="1">Lancement de nouveaux produits / services</option>
                                    <option value="2">Témoignages et cas client</option>
                                    <option value="3">Articles éducatifs, question utilisateur (ever green)</option>
                                    <option value="3">Bonnes affaires, soldes (messages publicitaires)</option>
                                </select>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <p className="white">6. Combien de pages compte votre site internet ? </p>
                            <div className="custom-select">
                                <select name="pages">
                                    <option value="0">Moins de 20 pages et articles de blog.</option>
                                    <option value="1">Moins de 50 pages et articles de blog.</option>
                                    <option value="2">Moins de 100 pages et articles de blog.</option>
                                    <option value="3">Plus de 100 pages / articles de blog.</option>
                                </select>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="center vertical-space">
                        {/* <input type="submit">évaluer mon site</input> */}
                    </div>
                    {/* </form> */}
                </Container>
            </div>
        )
    }
}
