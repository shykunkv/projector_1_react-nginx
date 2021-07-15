import React, { Component } from 'react';
import './App.css';

class RandomList extends Component {
    state = {
        isLoading: true,
        nums: []
    };


    async componentDidMount() {
        const response = await fetch('/api/random/all');
        const body = await response.json();
        this.setState({ nums: body, isLoading: false });
    }

    render() {
        const {nums, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <h2>Random numbers List</h2>
                {nums.map(num =>
                    <div key={num}>
                        {num}
                    </div>
                )}
            </div>
        );
    }
}

export default RandomList;