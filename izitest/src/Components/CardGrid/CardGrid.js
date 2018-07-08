import React, { Component } from "react";
import "./CardGrid.css";
// ui
import Button from "../ui/button/button.jsx";
import Card from "../ui/card/card.jsx";
// Redux
import { connect } from "react-redux";
import { grabMemorials } from "../../ducks/reducer";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: false,
      changedMemorials: []
    };
    this.sortMemorials = this.sortMemorials.bind(this);
  }

  componentDidMount() {
    // when the grid appears the view is scrolled downwards to see it.
    this.grid.scrollIntoView();
  }

  sortMemorials() {
    // this checks for memorials that don't have names and arranges them according to lastName. 
    const sortedData = [].concat(this.props.mems).sort(function(a, b) {
      var textA = a.name !== undefined ? a.name.last.toLowerCase() : " ";
      var textB = b.name !== undefined ? b.name.last.toLowerCase() : " ";
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });

    this.setState({ sorted: true, changedMemorials: sortedData });
  }

  render() {
    const { sorted, changedMemorials } = this.state;
    let memorials;

    // if the user has chosen to sort the list, we change the list that's displayed - sorted or non sorted. 
    if (sorted) {
      memorials = changedMemorials.map((memorial, i) => (
        <Card
          img={memorial.image}
          key={i}
          creationDate={memorial.creationDate}
          name={memorial.name}
        />
      ));
    } else {
      memorials = this.props.mems.map((memorial, i) => (
        <Card
          img={memorial.image}
          key={i}
          creationDate={memorial.creationDate}
          name={memorial.name}
        />
      ));
    }

    return (
      <div className="grid" ref={grid => (this.grid = grid)}>
        <Button type={"primary"} cb={() => this.sortMemorials()}>
          by last name
        </Button>
        <br />
        {memorials}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mems: state.memorials
  };
};

export default connect(
  mapStateToProps,
  {
    grabMemorials
  }
)(CardGrid);
