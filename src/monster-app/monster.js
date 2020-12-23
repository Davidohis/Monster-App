import React from "react";
import CardList from "../components/card-list";
import "../components/Card.style.css";
import ErrorBoundary from './ErrorBoundary';

import Scroll from "../components/scroll";
import SearchBox from "../components/search-box";
import { connect } from "react-redux";

class Monster extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield: "",
    };
  }
 
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    return this.setState({ searchfield: event.target.value });
  };

  render() {
    const { monsters, searchfield } = this.state;
    const filterBox = monsters.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    if (monsters.length === 0) {
      return <h1 className="tc">Loading App</h1>;
    } else {
      return (
        <div className="tc">
          <h1>RobotFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <ErrorBoundary>
              <CardList monsters={filterBox} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps)(Monster);
