import React from "react";
import CityList from "./CityList";
import { connect } from "react-redux";
import {
  addFavoriteCity,
  deleteFavoriteCity
} from "../actions/favoriteCitiesAction";

class CityListContainer extends React.Component {
  render() {
    return (
      <CityList
        favoriteCities={this.props.favoriteCities.favoriteCities}
        isFetching={this.props.favoriteCities.isFetching}
        addCity={this.props.addFavoriteAction}
        deleteCity={this.props.deleteFavoriteAction}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    favoriteCities: store.favoriteCities
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFavoriteAction: cityName => dispatch(addFavoriteCity(cityName)),
    deleteFavoriteAction: cityIndex => dispatch(deleteFavoriteCity(cityIndex))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CityListContainer);
