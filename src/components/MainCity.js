import React from "react";

class MainCity extends React.Component {
  componentDidMount() {
    console.log("ss");
    this.props.getMainCity();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.data.isFetching ? <p>Loading...</p> : null}
        {!this.props.data.isFetching && this.props.data.error ? (
          <p>Error</p>
        ) : null}
        {this.createCity()}
        <button onClick={this.props.getMainCity}>Try again</button>
      </div>
    );
  }

  createCity() {
    var weather = this.props.data.mainCityInfo;
    if (!this.props.data.isFetching && !this.props.data.error) {
      return (
        <div>
          <h2> {weather.name} </h2>
          <p>
            {" "}
            Coordinates:{" "}
            <i>
              [{weather.coord.lon} : {weather.coord.lat}]
            </i>
          </p>
          <p>
            {" "}
            Weather description: <i>{weather.weather.description}</i>
          </p>
          <p>
            {" "}
            Temperature: <i>{weather.main.temp}K </i>
          </p>
          <p>
            {" "}
            Humidity: <i>{weather.main.humidity}%</i>
          </p>
          <p>
            {" "}
            Wind: <i>{weather.wind.speed}m/c</i>
          </p>
        </div>
      );
    }
  }
}

export default MainCity;
