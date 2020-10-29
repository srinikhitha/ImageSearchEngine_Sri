import React from "react";

const ImageItem = (props) => {
    return <div>
    <img class="resultsitem" alt={ props.image.description } title="test" src={ "/dataset/" + props.image.id +".png" } />
    </div>;
 }
export default ImageItem;