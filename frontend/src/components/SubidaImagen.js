import React, { Component } from "react";
import axios from "axios";

class SubidaImagen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
      title: "",
      content: "",
    };
  }

  handleInputChange = async (event) => {
    // event.preventDefault();
    await this.setState({
      [event.target.name]: event.target.files[0],
      //image: event.target.files[0]
      // image: event.target.files[0]
    });
  };

  handleChange = async (event) => {
    // event.preventDefault();
    await this.setState({
      [event.target.name]: event.target.value,

      //image: event.target.files[0]
      // image: event.target.files[0]
    });
    console.log(this.state.title);
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    let data = new FormData(); // creates a new FormData object

    data.append("image", this.state.image); // add your file to form data
    data.append("title", this.state.title);
    data.append("content", this.state.content);

    axios({
      method: "POST",
      url: "http://localhost:8000/images/posts/",
      headers: {
        "content-type": "multipart/form-data",
      },
      data,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div id="other" className="">
        <p className="mod" style={{ marginTop: "10px" }}>
          Upload
        </p>
        <hr></hr>

        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="title" onChange={this.handleChange} />
          <input type="text" name="content" onChange={this.handleChange} />
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            onChange={this.handleInputChange}
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default SubidaImagen;
