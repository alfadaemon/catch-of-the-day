import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
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
        this.setState({
            fishes: sampleFishes
        })
    }

    addToOrder = (key) => {
        const currentOrder = {...this.state.order};
        currentOrder[key] = currentOrder[key] + 1 || 1;
        this.setState({
            order: currentOrder
        })
    }

    render(){
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline='Fresh Seafood Market'/>
                    <ul className="fishes">
                        {Object.keys(this.state.fishes).map(key => 
                            <Fish 
                                key={key} 
                                id={key}
                                details={this.state.fishes[key]} 
                                addToOrder={this.addToOrder} 
                            />
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order} />
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
            </div>
        )
    }
}

export default App;