import React from "react";
import axios from "axios";

export default class ImagesById extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/images/posts/`).then((res) => {
      const posts = res.data;
      this.setState({ posts });
      console.log(this.state.posts[0].image);
    });
  }
  // handleChange = async (event) => {
  //   event.preventDefault();

  //   const postById = this.state.posts.filter(
  //     (posts) => posts.id === parseInt(event.target.value)
  //   );
  //   await this.setState({ postById });
  //   console.log(event.target.value);
  //   console.log(postById);
  // };

  render() {
    return (
      <div id="imagenes" className="">
        {/* <input type="number" name="id" onChange={this.handleChange}></input> */}
        <ul>
          {this.state.posts.map((post) => (
            <li key={post.id}>
              <img src={post.image} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
