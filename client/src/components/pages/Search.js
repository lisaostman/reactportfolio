import React, { Component } from "react";

import API from "../../utils/API";

class Search extends Component {
  state = {
    image: {},
    friendPoint: 0
  };

  searchDogs = () => {
    API.search()
      .then(res => {this.setState({ image: res.data.message });
    console.log(res.data.message)})
      .catch(err => console.log(err));
  };  

  componentDidMount() {
    this.searchDogs();
  }

  handleYesFormSubmit = event => {
    event.preventDefault();
    let chance = Math.round(Math.random() * 5);
    if (chance === 5) { this.setState(prevState => {
      return {friendPoint: prevState.friendPoint + 1}
   });}
    this.searchDogs();
  };

  handleNoFormSubmit = event => {
    event.preventDefault();
    this.searchDogs();
  };

  render() { 
    return (<div>
      <h1>Search for a Buddy</h1>
      <p>
        Integer cursus bibendum sem non pretium. Vestibulum in aliquet sem, quis molestie urna.
        Aliquam semper ultrices varius. Aliquam faucibus sit amet magna a ultrices. Aenean
        pellentesque placerat lacus imperdiet efficitur. In felis nisl, luctus non ante euismod,
        tincidunt bibendum mi. In a molestie nisl, eu sodales diam. Nam tincidunt lacus quis magna
        posuere, eget tristique dui dapibus. Maecenas fermentum elementum faucibus. Quisque nec
        metus vestibulum, egestas massa eu, sollicitudin ipsum. Nulla facilisi. Sed ut erat ligula.
        Nam tincidunt nunc in nibh dictum ullamcorper. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Etiam ornare rutrum felis at rhoncus.
        Etiam vel condimentum magna, quis tempor nulla.
      </p>
      <img alt="kind dog" className="img-fluid" src={this.state.image} style={{ margin: "0 auto" }} />
      <button onClick={this.handleYesFormSubmit} className="btn btn-primary">
          Yes
        </button>
        <button onClick={this.handleNoFormSubmit} className="btn btn-danger">
          No
        </button>
        <p>Friend Points: {this.state.friendPoint}</p>
    </div>)
  }
}

export default Search;
