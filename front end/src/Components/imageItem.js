import React, {useState} from "react";


import { Button, Card } from "antd";
import { saveImage } from "../Services/savepost";
import { LikeOutlined, LikeFilled } from "@ant-design/icons";

const { Meta } = Card;

const addSave = async ( imageId ) =>  {
//call api
const id=0
const userId = localStorage.getItem("userId")
saveImage({Id : id, ImageId: imageId, UserId: userId})
                    .then((response) => {
                      console.log(response);
                    }
                    )
}


// const status = await saveImage({
//   imageId,
//   id ,
//   userId
// });
// }

const ImageItem = (props) => {
  const [isLiked, setIsLiked] = useState(false)
  console.log("props", props);

  const addLike = async () => {
    setIsLiked(!isLiked)
  }

  return (
   
    <Card
      title={props.image.image.object}
      hoverable
      style={{ width: 240 }}
      cover={
        
        <img
          onClick={() => window.open("/dataset/" + props.image.id +".png")}
          alt={props.image.image.description}
          title="test"
          src={ "/dataset/" + props.image.id +".png"}
        />
      }
      extra={<><Button onClick={addSave.bind(this, props.image.id)}>Save </Button>
      <a href={"/dataset/" + props.image.id +".png"} download>Download </a>
      {!isLiked ? <LikeOutlined onClick={addLike} /> :
      <LikeFilled onClick={addLike} />}
      </>}
    >
      <Meta description={props.image.image.description} />
    </Card>
  );
  return <div></div>;
};
export default ImageItem;
