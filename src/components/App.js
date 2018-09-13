import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';


class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    };

    componentDidMount(){
        const { params } = this.props.match;
        const localStorageRef = localStorage.getItem(params.storeId);

        this.ref = base.syncState(`${params.storeId}/fishes`, {
            context: this,
            state: 'fishes'
        });

        if(localStorageRef){
            this.setState({ order: JSON.parse(localStorageRef)});
        }
    }

    componentDidUpdate(){
        const storeName = this.props.match;
        localStorage.setItem(storeName.params.storeId, JSON.stringify(this.state.order));
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    addFish = fish => {
        const current = {...this.state.fishes};//Get current state.
        current[`fish${Date.now()}`] = fish;
        this.setState({
            fishes: current
        })
    }

    updateFish = (key, updatedFish) => {
        const fishes = {...this.state.fishes}
        fishes[key] =  updatedFish;
        this.setState({fishes})
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
                <Order 
                    fishes={this.state.fishes} 
                    order={this.state.order} 
                />
                <Inventory 
                    addFish={this.addFish}
                    loadSampleFishes={this.loadSampleFishes} 
                    fishes={this.state.fishes}
                    updateFish={this.updateFish}
                />
            </div>
        )
    }
}

export default App;