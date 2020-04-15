import React, { Component } from "react";
import '../../assets/css/style.css';
import API from "../../utils/API";
import RepoCard from "../FriendCard";
import FaveCard from "../FaveCard";
import faves from "../../faves.json";

class Portfolio extends Component {
  state = {
    repos: [],
    number: 0,
    fave: []
  };

   searchRepos = () => {
     API.getRepos()
       .then(res => { this.setState({ repos: res.data });
     console.log(res.data)})
       .catch(err => console.log(err));
   };  

   componentDidMount() {
     this.searchRepos();
     this.setState({ fave: faves })
   }

  render() { 
    return (<div>
       <div className="info" id="about">
       <h1>Recents</h1>
       {this.state.fave.map(fave => (
          <FaveCard
            key={fave.id}
            name={fave.name}
            description={fave.description}
            url={fave.url}
            image={fave.img}
          />
        ))}

      <h1>Search Through My Repositories!</h1>
      
        <div className="center"> 
       {this.state.repos.map(repo => (
          <RepoCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            url={repo.url}
          />
        ))}
        </div>
      
      

    </div>
    </div>)
  }
}

export default Portfolio;
