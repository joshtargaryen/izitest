import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import { grabMemorials } from "./ducks/reducer";
import "./App.css";


class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        App
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    memorials: state.memorials,
    loading: state.isLoading,
    error: state.didError
  };
};

export default connect(
  mapStateToProps,
  {
    grabMemorials
  }
)(App);
