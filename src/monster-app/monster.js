import React from "react";
import ErrorBoundary from './ErrorBoundary';
import { connect } from "react-redux";
import CardList from "../components/card-list";
import "../components/Card.style.css";

import SearchBox from "../components/search-box";

import { setSearchField, fetchRobots } from '../redux/action';

const mapStateTopProps = (state) => {
    return {
        searchField: state.searchRobots.searchField,
        isPendding: state.requestRobots.isPendding,
        robots: state.requestRobots.robots,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
      onRequestRobots: () => dispatch(fetchRobots())
  }
}

class Monster extends React.Component {
 
  componentDidMount() {
     this.props.onRequestRobots();
  }
 
  render() {
    const { searchField, onSearchChange, robots, isPendding } = this.props;
    const filterBox = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return isPendding ?
    <h1 className="tc">Loading App</h1> :
     (
        <div className="tc">
          <SearchBox searchChange={onSearchChange} />
          
            <ErrorBoundary>
              <CardList monsters={filterBox} />
            </ErrorBoundary>
          
        </div>
      );
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Monster);
