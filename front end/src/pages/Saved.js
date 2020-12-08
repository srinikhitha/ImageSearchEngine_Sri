import React, { useState } from "react";
import { userSearch } from "../Services/elastic";
import ImageList from "../Components/imageList";
import PageLayout from "../layout/PageLayout";
import { Button, Card } from "antd";
import {deleteSaveImage} from "../Services/savepost";


import { useHistory } from "react-router-dom";
import { Input } from "antd";
import { getSaveImage } from "../Services/savepost";
const { Meta } = Card;



class Saved extends React.Component {
  constructor() {
    super();
    this.state = { imageIds: [] };
  }

  componentDidMount() {
    getSaveImage(localStorage.getItem("userId"))
    .then(json => this.setState({ imageIds: json.data.map(x => x["ImageId"]) }));
  }

  async deleteItem ( imageId )  {
    //call api
    const id=0
    const userId = localStorage.getItem("userId")
    deleteSaveImage(imageId)
                        .then((response) => {
                          if(response==200){
                            this.setState({imageIds: this.state.imageIds.filter(item => item !== imageId)})
                          }
                          console.log(response);
                        }
                        )
                        
                        
  }

  //   fetch('https://localhost:44321/api/Images?userId='+ localStorage.getItem("userId"))
  //     .then(response => response.json())
  //     .then(json => this.setState({ imageIds: json.data.imageIds }));
  // }
  
  

  render() {
    return (
      <div>
        {/* userSearch(allValues.searchText)
                    .then((response) => {
                      console.log("from search.js");
                      console.log(response);

                      setAllValues({
                        searchText: allValues.searchText,
                        searchResponse: response.data,
                        totalResults: response.total,
                      });
                    })
                    .catch((err) => console.log(err)); */}
        
        {
          this.state.imageIds.length == 0
            ? 'Loading users...'
            : this.state.imageIds.map(imageId => (
              <div>
                <Card
      // title={props.image.image.object}
       hoverable
       style={{ width: 240 }}
       cover={
        
        <img
          onClick={() => window.open("/dataset/" + imageId +".png")}
          //alt={props.image.image.description}
          title="test"
          src={ "/dataset/" + imageId +".png"}
        />
      }
      extra={<><Button onClick={this.deleteItem.bind(this, imageId)}>delete</Button>
      <a href={"/dataset/" +imageId +".png"} download>Download</a>
      </>}
    >
      {/* <Meta description={this.props.image.image.description} /> */}
    </Card>
              </div>
            ))  
        }
      </div>
    );
  }
}


export default Saved;