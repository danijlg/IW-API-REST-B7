import "react-bnb-gallery/dist/style.css";
import React, { useState, Component } from "react";
import ReactBnbGallery from "react-bnb-gallery";
import axios from "axios";

const GalleryExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [images, setImages] = useState([]);

  axios.get(`http://localhost:8000/images/posts/`).then((res) => {
    const posts = res.data;
    let result = posts.map((posts) => posts.image);
    setImages(result);
    console.log(images);
  });

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open gallery</button>
      <ReactBnbGallery
        show={isOpen}
        photos={images}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default GalleryExample;
