import React, { Component } from 'react';
import './App.css';

class SentenceList extends Component {
    state = {
        isLoading: true,
        sentences: []
    };

    async componentDidMount() {
        const response = await fetch('/api/sentence/all');
        const body = await response.json();
        this.setState({ sentences: body, isLoading: false });
    }

    render() {
        const {sentences, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="App">
                <h2>sentences List</h2>
                {sentences.map(s =>
                    <div key={s}>
                        {s}
                    </div>
                )}
            </div>
        );
    }
}

export default SentenceList;