import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Header text="This is an odometer!"/>
        <Odometer digits="4"/>
        <Footer trademark="Mark Bell"/>
    </div>
  );
}

function Header(props) {
    return (
        <nav>
            <h2>{props.text}</h2>
        </nav>
    )
}

function Footer(props) {
    return (
        <footer>
            <h3>{props.trademark}&trade;</h3>
        </footer>
    )
}

class Odometer extends React.Component {

    constructor() {
        super();
        this.state = {
            mileage : 0,
        }
    }

    addMileage(additionalMiles) {
        this.setState({
            mileage : (this.state.mileage + additionalMiles) % (10 ** this.props.digits)
        });
    }

    render() {

        const buttons = []
        for(let i = 0; i < this.props.digits; i++) {
            buttons.push(<button onClick={() => this.addMileage(10 ** i)}>+{10**i}</button>)
        }

        return (
            <>
            <h2>Odmeter: {this.state.mileage.toString().padStart(this.props.digits, "0")}</h2>
            {buttons}
            </>
        );
    }
}

export default App;
