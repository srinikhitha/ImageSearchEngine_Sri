import React from "react";
import ImageItem from "./imageItem";
import './imageList.css'

const ImageList = (props) => {
   const images = props.images.map( image => {
      return <ImageItem key = {image.id} image = {image} user = {props.user} />
   });
   return <div class="imagelist">{images}</div>;
}
export default ImageList;