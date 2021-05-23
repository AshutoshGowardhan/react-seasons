import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'

class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );
    }
    render() {
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error Message: {this.state.errorMessage}</div>
        }
        return (
            <div>
                <Spinner message="Please accept location request"/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));