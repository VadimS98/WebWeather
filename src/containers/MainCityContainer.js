import React from "react";
import MainCity from "../components/MainCity";
import { connect } from "react-redux";
import { getMainCity } from "../actions/mainLocationCity";

class MainCityContainer extends React.Component {
  render() {
    return (
      <MainCity
        getMainCity={this.props.getMainCityAction}
        data={this.props.cityData}
      />
    );
  }
}
const mapStateToProps = store => {
  return {
    cityData: store.mainCity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMainCityAction: () => dispatch(getMainCity())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCityContainer);
