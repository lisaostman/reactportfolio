import axios from "axios";

export default {
  getRepos: function() {
    return axios.get("https://api.github.com/users/lisaostman/repos");
  },
  getReadMe: function(insert) {
    return axios.get("https://raw.githubusercontent.com/lisaostman/" + insert + "/master/README.md")
  }
};
