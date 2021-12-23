import axios from "axios";
import React, { Component } from "react";
import { render } from "react-dom";

class ImagenesComponent extends React.Component {
  state = {
    title: "",
    content: "",
    image: null,
  };

  ImagenesComponent() {
    this.handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    };

    this.handleImageChange = (e) => {
      this.setState({
        image: e.target.files[0],
      });
    };

    this.handleSubmit = (e) => {
      alert("Se ha subido la imágen: " + this.state.title);
      e.preventDefault();
      console.log(this.state);
      let form_data = new FormData();
      form_data.append("image", this.state.image, this.state.image.name);
      form_data.append("title", this.state.title);
      form_data.append("content", this.state.content);
      let url = "http://localhost:8000/images/posts/";
      axios
        .post(url, form_data, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    };
  }
  render() {
    return (
      <div className="ImagenesComponent">
        <form onSubmit={this.handleSubmit} action="#">
          <p>
            <input
              type="text"
              placeholder="Title"
              id="title"
              defaultValue={this.state.title}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="Content"
              id="content"
              defaultValue={this.state.content}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <input
              type="file"
              id="image"
              accept="image/png, image/jpeg"
              onChange={this.handleImageChange}
              required
            />
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ImagenesComponent;
