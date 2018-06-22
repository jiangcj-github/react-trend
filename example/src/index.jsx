import React from 'react';
import ReactDOM from 'react-dom';
import ReactTrend from '../../src';

class App extends React.Component {

    render() {
        return (
            <ReactTrend/>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);