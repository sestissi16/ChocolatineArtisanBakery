import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
// import { FacebookProvider, Page } from 'react-facebook';
import Iframe from 'react-iframe'
import topBorder from '../assets/blackFractalVarietyEuropeanPatterBorders-Top3.png'
import bottomBorder from '../assets/blackFractalVarietyEuropeanPatterBorders-Bottom3.png'
import titleDivider from '../assets/blackFlowerDivider-Transparent-Cropped.png'
// import titleBottom from '../assets/blackFleurDivider-Transparent.png'
import formTop from '../assets/flowerGoldenRectangularBorderTransparent-Top2.png'
import formBottom from '../assets/flowerGoldenRectangularBorderTransparent-Bottom2.png'
import './Contact.css'

class Contact extends Component {
    constructor () {
        super()

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            width: '500',
        }

        this.handleChange = this.handleChange.bind(this)
        this.resetContact = this.resetContact.bind(this)
    }

    /**
     * Calculate & Update state of width
     */
    updateDimensions() {
        if(window.innerWidth < 500 && window.innerWidth > 450) {
            this.setState({ width: '450'});
        } else if(window.innerWidth < 450 && window.innerWidth > 400) {
            this.setState({ width: '400'})
        } else if(window.innerWidth < 400 && window.innerWidth > 340){
            this.setState({ width: '340'})
        } else if(window.innerWidth < 340){
            this.setState({ width: '320'})
        } else if(window.innerWidth > 500){
            this.setState({width: '550'})
        } else {
        // let update_width  = window.innerWidth-100;
        // let update_height = Math.round(update_width/4.4);
        // this.setState({ width: update_width, height: update_height });
        }
    }

    /**
     * Add event listener for updating the width state
     */
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    /**
     * Remove event listener for updating the width state
     */
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    handleChange(e) {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    stringifyStateValue(stateObject) {
        let stateString = '';

        for (const key in stateObject) {
            stateString = stateString + `${stateObject[key]}`;
        }

        return stateString
    }

    resetContact(e) {
        e.preventDefault();

        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }

    keyboardResetContact(e) {
        e.preventDefault();

        if(e.keyCode === 13){
            this.setState({
                name: '',
                email: '',
                subject: '',
                message: '',
            })
        }

    }

    render() {
        return (
            <section id="contact">
                <div id="contactContainer">
                    <div id="contactTitle">
                        <h1 id="contactSectionTitle">Contact Us:</h1>
                        <img src={titleDivider} id="titleDivider" alt="ornate black flower divider"/>
                        <h2 id="contactSectionSubTitle">Here you can send us an email with the Contact Form or check out our Facebook page below.</h2>
                    </div>
                    <form name="contact-us" id="contactForm">
                        <img src={formTop} alt="Gold ornate top border" id="formTopBorder"/>
                        <h2 id="contactFormTitle">Contact Form:</h2>
                        <h3 id="contactFormSubTitle">
                            This form will help craft an email to artisanbakeriesusa@gmail.com. 
                            Once you fill out the form it will open up your default mail app and fill everything out for you. 
                            You'll just have to press send!
                        </h3>
                        <div className="form-group">
                            <label className="contactFormLabel" for="contactFormEmail">Enter your email address: </label>
                            <input 
                                id="contactFormEmail" 
                                className="contactFormInput" 
                                name="email" 
                                type="email" 
                                placeholder="Email" 
                                value={ this.state.email }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
        
                        <div className="form-group">
                            <label className="contactFormLabel" for="contactFormName">Enter your name:</label>
                            <input 
                                id="contactFormName" 
                                className="contactFormInput" 
                                name="name" 
                                type="text" 
                                placeholder="Name" 
                                value={ this.state.name }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
                        
                        <div className="form-group">
                            <label className="contactFormLabel" for="contactFormSubject">Enter the subject:</label>
                            <input 
                                id="contactFormSubject" 
                                className="contactFormInput" 
                                name="subject" 
                                type="text" 
                                placeholder="Subject" 
                                value={ this.state.subject }
                                onChange={this.handleChange}
                                required
                            />
                        </div>
        
                        <div className="form-group">
                            <label className="contactFormLabel" for="contactFormMessage">Enter the message you'd like to send:</label>
                            <textarea 
                                id="contactFormMessage" 
                                className="contactFormInput" 
                                name="message" 
                                type="text-area" 
                                placeholder="Message you'd like to send"
                                value={ this.state.message }
                                onChange={this.handleChange}
                                required
                            />
                        </div>

                        <div id="buttonGroup">
                            <Button
                                variant='success' 
                                type='submit'
                                className="contactFormButton"
                                href={`mailto:artisanbakeriesusa@gmail.com?subject=Note%20From%20${this.state.name}-${this.state.subject}&body=${this.state.message}`}
                            >
                                Send                          
                            </Button>
                            <Button
                                variant='success'
                                className="contactFormButton" 
                                onClick={this.resetContact}
                                onKeyDown={(e) => this.keyboardResetContact(e)}
                            >Clear Form</Button>
                        </div>
                        <img src={formBottom} alt="Gold ornate bottom border" id="formBottomBorder"/>
                    </form>
                </div>
                <div id="fb-container">
                    <img src={topBorder} alt="top ornamental border" id="fbTopBorder"/>
                    <h2 id="contactFacebookTitle">Our <a id="contactFacebookLink" href="www.facebook.com/ArtisanBakeries">Facebook Page</a>:</h2>
                    <h3 id="contactFacebookSubTitle">Here you can message us and check out our posts and events for new specialities and promos.</h3>
                    <Iframe url={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FArtisanBakeries&tabs=timeline%2C%20messages%2C%20events&width=${this.state.width}&height=700&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=605332897003313`} 
                        height="700px"
                        id="fb-iframe"
                        style={{border: 'none' , overflow: 'hidden'}}
                        display="initial"
                        scrolling="yes" 
                        frameborder="0px"
                        allowTransparency="true"
                        allow="encrypted-media"
                    /> 
                    <img src={bottomBorder} alt="bottom ornamental border" id="fbBottomBorder"/>
                </div>
            </section>
        );
    }
};

export default Contact;
