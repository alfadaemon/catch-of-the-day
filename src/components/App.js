import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    addFish = fish => {
        const current = {...this.state.fishes};//Get current state.
        current[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: current
        })
    }

    loadSampleFishes = () => {
        alert('adding sample fishes....')
        this.setState({
            fishes: sampleFishes
        })
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh Seafood Market'/>
                </div>
                <Order />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;