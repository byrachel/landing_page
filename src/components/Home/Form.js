import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/styles';

import './Home.css'
import '../../../src/App.css'

const MyButton = styled(Button)({
    backgroundColor: "white",
    fontFamily: 'Fira Sans',
    fontSize: '1.4em',
    fontWeight: 700,
    textTransform: 'uppercase',
    padding: '5px 15px',
    color: '#191970',
    letterSpacing: '2px',
    marginTop: '15px'
  });

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
                <br />
                <h2 className="white center vertical-space">10 questions pour auditer votre stratégie :</h2>
                {/* <form onSubmit={this.handleSubmit}> */}
                    <Grid container>
                        <Grid item lg={6}>
                            <p className="white bolder">1. Combien avez-vous de visiteurs par mois ? </p>
                            <div className="custom-select">
                                <select name="visit">
                                    <option value="0">Ne sais pas</option>
                                    <option value="1">Moins de 100 visiteurs uniques / mois</option>
                                    <option value="2">Moins de 1000 visiteurs uniques / mois</option>
                                    <option value="3">Plus de 100 visiteurs uniques / mois</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">2. Avez-vous un blog ? </p>
                            <div className="custom-select">
                                <select name="blog">
                                    <option value="0">Non</option>
                                    <option value="1">Oui</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">3. Combien d'articles publiez-vous en moyenne ? </p>
                            <div className="custom-select">
                                <select name="post">
                                    <option value="0">Moins d'un par trimestre</option>
                                    <option value="1">Au moins 1 par mois</option>
                                    <option value="2">2 à 3 fois par mois</option>
                                    <option value="3">Au moins 1 fois par semaine</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">4. Sur quels réseaux sociaux êtes-vous ? </p>
                            <div>
                                <p className="white"><input type="checkbox" name="social" id="none" value="0" /><label for="none">Aucun</label></p>
                                <p className="white"><input type="checkbox" name="social" id="facebook" value="1" /><label for="facebook">Facebook</label></p>
                                <p className="white"><input type="checkbox" name="social" id="instagram" value="1" /><label for="instagram">Instagram</label></p>
                                <p className="white"><input type="checkbox" name="social" id="linkedin" value="1" /><label for="linkedin">Linkedin</label></p>
                                <p className="white"><input type="checkbox" name="social" id="twitter" value="1" /><label for="twitter">Twitter</label></p>
                                <p className="white"><input type="checkbox" name="social" id="snapchat" value="1" /><label for="snapchat">Snapchat</label></p>
                            </div>
                            <br />
                            <p className="white bolder">5. Votre rythme moyen de publication (tous réseaux confondus) ? </p>
                            <div className="custom-select">
                                <select name="media">
                                    <option value="0">Moins d'une fois par mois</option>
                                    <option value="1">Au moins 1 par semaine</option>
                                    <option value="2">2 à 3 fois par semaine</option>
                                    <option value="3">Au moins 1 fois par jour</option>
                                </select>
                            </div>
                        </Grid>
                        <Grid item lg={6}>
                            <p className="white bolder">6. Combien de pages compte votre site internet ? </p>
                            <div className="custom-select">
                                <select name="pages">
                                    <option value="0">Moins de 20 pages et articles de blog.</option>
                                    <option value="1">Moins de 50 pages et articles de blog.</option>
                                    <option value="2">Moins de 100 pages et articles de blog.</option>
                                    <option value="3">Plus de 100 pages / articles de blog.</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">7. Quel(s) type(s) de contenu publiez-vous ? </p>
                            <div>
                                <p className="white"><input type="checkbox" name="content" id="actu" value="1" /><label for="actu">Les actualités et événements de l'entreprise</label></p>
                                <p className="white"><input type="checkbox" name="content" id="produit" value="1" /><label for="produit">Lancement de nouveaux produits / services</label></p>
                                <p className="white"><input type="checkbox" name="content" id="avis" value="1" /><label for="avis">Témoignages et cas client</label></p>
                                <p className="white"><input type="checkbox" name="content" id="evergreen" value="1" /><label for="evergreen">Articles éducatifs, question utilisateur</label></p>
                                <p className="white"><input type="checkbox" name="content" id="pub" value="0" /><label for="pub">Bonnes affaires, soldes (messages publicitaires)</label></p>
                                <p className="white"><input type="checkbox" name="content" id="itw" value="1" /><label for="itw">Interviews et/ou articles d'invités ciblés</label></p>

                            </div>
                            <br />
                            <p className="white bolder">8. Optimisez-vous vos pages/articles pour le SEO ? </p>
                            <div className="custom-select">
                                <select name="pages">
                                    <option value="0">Non</option>
                                    <option value="1">Oui</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">9. Avez-vous une stratégie d'e-mail marketing ? </p>
                            <div className="custom-select">
                                <select name="mail">
                                    <option value="0">Non</option>
                                    <option value="1">Envoi régulier de newsletter</option>
                                    <option value="1">Envoi d'emailing publicitaire</option>
                                    <option value="2">Stratégie de lead nurturing</option>
                                </select>
                            </div>
                            <br />
                            <p className="white bolder">10. Votre budget publicitaire (Facebook Ads, Google Ads...)</p>
                            <div className="custom-select">
                                <select name="ads">
                                    <option value="0">Moins de 500 € / an</option>
                                    <option value="1">Moins de 1000 € / an</option>
                                    <option value="1">Moins de 1500 € / an</option>
                                    <option value="2">Plus de 1500 € / an</option>
                                </select>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="center vertical-space">
                        <MyButton>Valider</MyButton>

                    </div>
                    {/* </form> */}
                    <br />
                </Container>
            </div>
        )
    }
}
