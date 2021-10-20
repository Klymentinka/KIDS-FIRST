import React from 'react'
import logo from '../img/kids_first_logo_beta.png'
import value_1 from '../img/value_1.png'
import value_2 from '../img/value_2.png'
import value_3 from '../img/value_3.png'
import value_4 from '../img/value_4.png'
import feature_1 from '../img/feature_1.png'
import feature_2 from '../img/feature_2.png'
import feature_3 from '../img/feature_3.png'
import feature_4 from '../img/feature_4.png'
import kidsfirst_intro_1 from '../img/kidsfirst_intro_1.png'
import kidsfirst_intro_2 from '../img/kidsfirst_intro_2.png'

export default function Home() {
    return (
        <>
            <header class="banner-section" id="header-banner">
                <div class="banner-img">
                    <img src={kidsfirst_intro_1} alt="" />
                </div>
                <nav>
                    <div class="site-nav">
                        <img src={logo} alt="" />
                        <div class="nav-links">
                            <li><a href="#" data-text='Features'>Features</a></li>
                            <li><a href="#" data-text='About us'>About us</a></li>
                            <li><a href="#" data-text='Contact us'>Contact us</a></li>
                        </div>
                    </div>
                    <div class="profile-nav">
                        <div class="dropdown">
                            <button class="btn btn-light dropdown-toggle" type="button" id="langMenu" data-bs-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">EN</button>
                            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="langMenu">
                                <button class="dropdown-item" type="button">English</button>
                                <button class="dropdown-item" type="button">French</button>
                            </div>
                        </div>
                        <a className="login-btn btn" href="/Signin">Log in</a>
                        <a className="signup-btn btn" href="/Signup">Sign up</a>
                    </div>
                </nav>
                <div class="left-blurb">
                    <h1>A family solution application</h1>
                    <p>Bring harmony in your children's lives with the help of one click</p>
                    <a class="btn btn-primary" id="btn-signup" href="/Signup">Sign up now</a>
                </div>
            </header>
            <section class="site-section">
                <h1 className="value">Kids First Values</h1>
                <div class="features-prev">
                    <div class="feature-1">
                        <p>Allow parents to manage all aspects of their children’s lives</p>
                        <img src={value_1} alt=""></img>
                    </div>
                    <div class="feature-1">
                        <p>Mediate Parents’ interactions</p>
                        <img src={value_2} alt=""></img>
                    </div>
                    <div class="feature-1">
                        <p>Track actions of each parent to hold them accountable</p>
                        <img src={value_3} alt=""></img>
                    </div>
                    <div class="feature-1">
                        <p>Provide them with general facts on Law and Child Health</p>
                        <img src={value_4} alt=""></img>
                    </div>
                </div>
            </section>
            <section class="banner-section" id="middle-banner">
                <div class="banner-img">
                    <img src={kidsfirst_intro_2} alt="" />
                </div>
                <div class="right-blurb">
                    <h1>Children happiness is our priority</h1>
                    Provide a fair and simple co-parenting solution that has less chance for conflict and more time and focus on
                    the children's well-being.
                </div>
            </section>
            <section class="site-section">
                <h1 className="value">Kids First Features</h1>
                <div class="features-prev">
                    <div class="feature-2">
                        <img src={feature_1} alt=""></img>
                        <p>Mediated Messaging</p>
                    </div>
                    <div class="feature-2">
                        <img src={feature_2} alt=""></img>
                        <p>Law Pop-Ups</p>
                    </div>
                    <div class="feature-2">
                        <img src={feature_3} alt=""></img>
                        <p>Interactive Calendar</p>
                    </div>
                    <div class="feature-2">
                        <img src={feature_4} alt=""></img>
                        <p>Child Info</p>
                    </div>
                </div>
                <span class="more-link"><a href="#">More Features</a></span>
            </section>
            <section class="site-section">
                <h1>Communicate Effectively With Kids First</h1>
                <div class="feature-3">
                    <div className="video"></div>
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
