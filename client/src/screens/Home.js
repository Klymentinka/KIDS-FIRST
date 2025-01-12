import React from 'react'
import { Button, Dropdown } from 'react-bootstrap'
import '../css/home.css'
import logo from '../img/kids_first_logo_beta.png'
import value_1 from '../img/home/value_1.png'
import value_2 from '../img/home/value_2.png'
import value_3 from '../img/home/value_3.png'
import feature_1 from '../img/home/feature_1.png'
import feature_2 from '../img/home/feature_2.png'
import feature_3 from '../img/home/feature_3.png'
import video from '../img/home/video_placeholder.png'

export default function Home() {
    return (
        <>
            <header class="banner-section" id="header-banner">
                <div class="header-nav">
                    <div class="site-nav">
                        <img src={logo} alt="" />
                        <div class="nav-links">
                            <li><a href="#" data-text='Features'>Features</a></li>
                            <li><a href="#" data-text='About us'>About us</a></li>
                            <li><a href="#" data-text='Contact us'>Contact us</a></li>
                        </div>
                    </div>
                    <div class="profile-nav">
                        <Dropdown>
                            <Dropdown.Toggle className="lang-menu" id="langDropdown" size="sm">EN</Dropdown.Toggle>
                            <Dropdown.Menu className="lang-menu">
                                <Button type="button" className="lang-option">FR</Button>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button className="home-login-btn" href="/Signin">Log in</Button>
                        <Button className="home-signup-btn" href="/Signup">Sign up</Button>
                    </div>
                </div>
                <div class="left-blurb">
                    <h1>A co-parenting app solution</h1>
                    <p>Maintain harmony in your kid’s lives with the help of one click</p>
                    <Button className="home-signup-btn-2" href="/Signup">Sign up now</Button>
                </div>
            </header>
            <section class="site-section">
                <h1 className="value">Kids First Values</h1>
                <div class="features-prev">
                    <div class="feature-1">
                        <p>Help children have more harmony in their upbringing by reducing conflicts that arise when divorced parents schedule who has the kids.</p>
                        <img src={value_1} alt=""></img>
                    </div>
                    <div class="feature-1">
                        <p>Provide a fair and simple co-parenting solution that has less chance for conflict and more time and focus on the children's well-being.</p>
                        <img src={value_2} alt=""></img>
                    </div>
                    <div class="feature-1">
                        <p>Allow parents to grow and improve their parenting by making helpful information on child health and Ontario law more accessible.</p>
                        <img src={value_3} alt=""></img>
                    </div>
                </div>
            </section>
            <section class="banner-section" id="middle-banner">
                <div class="right-blurb">
                    <h1>Children happiness is our priority</h1>
                    <p>KIDS FIRST aspires to help families with simpler custody scheduling by providing an interactive shared calendar solution that reduces misunderstandings and conflict.</p>
                </div>
            </section>
            <section class="site-section">
                <h1 className="value">Kids First Features</h1>
                <div class="features-prev">
                    <div class="feature-2">
                        <img src={feature_1} alt=""></img>
                        <p>Interactive Calendar</p>
                    </div>
                    <div class="feature-2">
                        <img src={feature_2} alt=""></img>
                        <p>Child Information</p>
                    </div>
                    <div class="feature-2">
                        <img src={feature_3} alt=""></img>
                        <p>Law Pop-Ups</p>
                    </div>
                </div>
                <span class="more-link"><a href="#">More Features</a></span>
            </section>
            <section class="site-section">
                <h1>Why Kids First</h1>
                <div class="feature-3 video">
                    <img src={video} alt=""></img>
                </div>
            </section>
            <footer>
                <a href="#">Terms of use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a href="#">Our team</a>
            </footer>

        </>
    )
}