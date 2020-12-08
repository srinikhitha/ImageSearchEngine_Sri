import React, { useState } from "react";
import { userSearch } from "../Services/elastic";
import ImageList from "../Components/imageList";
import PageLayout from "../layout/PageLayout";
import { Pagination } from 'antd';

import { useHistory } from "react-router-dom";
import { Input } from "antd";
import Dictaphone from "./speech";

// let userloginemail = data.email;
// let userloginid = data.id;

// const { data.email, data.id } = this.state;
//   localStorage.setItem('userloginemail',data.email );
//   localStorage.setItem('userloginid',data.id );

function Search() {
  const [allValues, setAllValues] = useState({
    searchText: "",
    searchResponse: [],
    totalResults: null,
  });
  const [current, setCurrent] = useState(1)
  const onChange = page => {
    console.log(page);
    setCurrent(page)
  };

  let history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    history.push("/AdvancedSearch");
    // console.log("inside button clicke);")

    //  const result = await fetch(`/images/_doc/1003`,{
    //      method: 'get'
    //  });
  };

  return (
    <PageLayout title="Search">
      <div className="wrapper">
        <div>
          <div className="container">
            <Input
              value={allValues.searchTeokxt}
              onKeyDown={(e) => {
                console.log(e.key);
                if (e.key === "Enter") {
                  // setSearchText(e.target.value)]

                  userSearch(allValues.searchText)
                    .then((response) => {
                      console.log("from search.js");
                      console.log(response);

                      setAllValues({
                        searchText: allValues.searchText,
                        searchResponse: response.data,
                        totalResults: response.total,
                      });
                    })
                    .catch((err) => console.log(err));
                }
              }}
              placeholder="Search..."
              onChange={(e) =>
                setAllValues({ ...allValues, searchText: e.target.value })
              }
              
            />
            {/* <input
              type="text"
              
            /> */}
          </div>
          <Dictaphone></Dictaphone>
        </div>
        {allValues.totalResults !== null ? (
          <div style={{ marginTop: "20px" }}>
            Found: {allValues.totalResults} images
            <ImageList images={allValues.searchResponse.slice(current - 1, current +4) }  />
            {/*<Pagination defaultCurrent={1} total={allValues.totalResults} defaultPageSize={5}/>*/}
            <Pagination current={current} onChange={onChange} total={allValues.totalResults} defaultPageSize={5} />
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
}

export default Search;

/*
render() {

  return (
      <div className = "ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
          Found: {this.state.images.length} images
          <ImageList images={this.state.images}/>
      </div>
  );

}
*/
