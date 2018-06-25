import React from 'react';
import ReactDOM from 'react-dom';
import ReactTrend from '../../src';

class App extends React.Component {

    render() {
        return (
            <div>
                <ReactTrend width={100} height={50} stroke="red" strokeWidth={1} trends={[1]}/>
                <ReactTrend width={200} height={50} stroke="green" strokeWidth={2}/>
                <ReactTrend width={300} height={50} stroke="#ccc" strokeWidth={3}/>
                <ReactTrend width={200} height={100} stroke="#00ff99" strokeWidth={2}/>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);