import React, { useState } from "react";
import { advanceUserSearch } from "../Services/advanceElastic";
import ImageList from "../Components/imageList";
import { useHistory } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import { Button, Checkbox, Input } from "antd";

function AdvancedSearch() {
  const [allValues, setAllValues] = useState({
    searchText: "",
    searchResponse: [],
    totalResults: null,
  });
  const [options, setOption] = useState([
    {
      name: "figid",
      isChecked: false,
    },
    {
      name: "patentID",
      isChecked: false,
    },
    {
      name: "object",
      isChecked: false,
    },
  ]);
  let history = useHistory();
  const handleSubmit = async () => {
    advanceUserSearch(
      options.filter((option) => option.isChecked).map((option) => option.name),
      allValues.searchText
    )
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
  };

  return (
    <PageLayout title="Advanced Search">
      <div className="wrapper1">
        <div className="container">
          <Input
            value={allValues.searchText}
            onKeyDown={(e) => {
              console.log(e.key);
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
            placeholder="Search..."
            onChange={(e) =>
              setAllValues({ ...allValues, searchText: e.target.value })
            }
          />
          <br />
          <br />
          {/* {options.map((option) => (
            <>
              <Checkbox
                checked={option.isChecked}
                onChange={() => {
                  setOption([
                    ...options.filter((o) => o.name !== option.name),
                    {
                      name: option.name,
                      isChecked: !option.isChecked,
                    },
                  ]);
                }}
              >
                {option.name}
              </Checkbox>
              <br />
            </>
          ))} */}
          <br />
          <Button onClick={handleSubmit}>Submit</Button>
        </div>
        {allValues.totalResults !== null ? (
          <div style={{ marginTop: "20px" }}>
            Found: {allValues.totalResults} images
            <ImageList images={allValues.searchResponse} />
          </div>
        ) : null}
      </div>
    </PageLayout>
  );
}

export default AdvancedSearch;

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
