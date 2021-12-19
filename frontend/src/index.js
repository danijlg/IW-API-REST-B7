import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const ImagesGallery = () => {
//   const [images, setImages] = React.useState(null);

//   React.useEffect(() => {
//     let shouldCancel = false;

//     const call = async () => {
//       const response = await axios.get(
//         "https://google-photos-album-demo2.glitch.me/4eXXxxG3rYwQVf948"
//       );
//       if (!shouldCancel && response.data && response.data.length > 0) {
//         setImages(
//           response.data.map((url) => ({
//             original: `${url}=w1024`,
//             thumbnail: `${url}=w100`,
//           }))
//         );
//       }
//     };
//     call();
//     return () => (shouldCancel = true);
//   }, []);

//   return images ? <ImageGallery items={images} /> : null;
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<ImagesGallery />, rootElement);
