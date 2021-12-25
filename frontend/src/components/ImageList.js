import React from "react";
import axios from "axios";

export default class ImageList extends React.Component {
  state = {
    html: "",
  };

  componentDidMount() {
    axios.get(`http://localhost:8000/images/`).then((res) => {
      const html = res.data;
      this.setState({
        html: html,
      });
      console.log(res.data);
    });
  }

  render() {
    // var firstLine = this.state.html.split("\n")[3];
    return <div dangerouslySetInnerHTML={{ __html: this.state.html }} />;
  }
}
