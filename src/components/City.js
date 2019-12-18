import React from 'react';

class City extends React.Component {
  render() {
    return (
      <div>
        <h2> {this.props.cityName} </h2>
        <button onClick={() => this.props.deleteCity(this.props.index)}>Delete</button>
        <p> Coordinates: <i>[{this.props.longtitude} : {this.props.latitude}]</i></p>
        <p> Weather description: <i>{this.props.description}</i></p>
        <p> Temperature: <i>{this.props.temperature}K </i></p>
        <p> Humidity: <i>{this.props.humidity}%</i></p>
        <p> Wind: <i>{this.props.windSpeed}m/c</i></p>
      </div>
    );
  }
}

export default City;
