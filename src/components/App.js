import React, { Component } from 'react';
import Header from '../containers/header';
import Welcome from '../containers/welcome';
import WelcomeImages from '../containers/welcome-images';
import Footer from '../components/Footer';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <Welcome />
                    <WelcomeImages />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;