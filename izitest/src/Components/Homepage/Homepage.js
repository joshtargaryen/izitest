import React, { Component } from "react";
//Redux
import { connect } from "react-redux";
import { grabMemorials } from "../../ducks/reducer";
// UI
import Button from "../ui/button/button.jsx";
import Hero from "../ui/hero/hero.jsx";
import CardGrid from "../CardGrid/CardGrid";
// css
import "./Homepage.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHidden: true
    };
    this.handleButtonPress = this.handleButtonPress.bind(this);
  }

  handleButtonPress() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Hero src="https://78.media.tumblr.com/adad079e81c1f49919d48dd747963fbb/tumblr_pb1n41PU4t1r9co7bo1_1280.gif" />
        <div className="landing">
          <div className="heading-holder">
            <div className="heading">Izitest</div>
            <Button
              type={"secondary"}
              cb={() => {
                this.props.grabMemorials();
                this.handleButtonPress();
              }}
            >
              Memorials
            </Button>
          </div>
        </div>
        {!this.state.isHidden && <CardGrid />}
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
)(Homepage);
