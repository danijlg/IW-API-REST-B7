import React from "react";
import axios from "axios";

export default class ImagesById extends React.Component {
  state = {
    posts: {
      image: "",
    },
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/images/posts/`).then((res) => {
      const posts = res.data;
      // this.setState({ posts });
      const postById = posts.filter((posts) => posts.id === 14);
      this.setState({ image: postById[0].image });
      console.log(postById[0]);
    });
  }

  render() {
    // var firstLine = this.state.html.split("\n")[3];
    return <img src={this.state.image} />;
  }
}
