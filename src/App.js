import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
        <Header text="This is an odometer!"/>
        <Odometer />
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
            mileage : (this.state.mileage + additionalMiles) % 10000
        });
    }

    render() {
        return (
            <>
            <h2>Odometer: {this.state.mileage.toString().padStart(4, "0")}</h2>
            <button onClick={() => this.addMileage(1)}>+1</button>
            <button onClick={() => this.addMileage(10)}>+10</button>
            <button onClick={() => this.addMileage(100)}>+100</button>
            <button onClick={() => this.addMileage(1000)}>+1000</button>
            </>
        );
    }
}

export default App;
