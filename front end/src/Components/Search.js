import React, { useState } from "react";
import { userSearch } from "../Services/elastic";
import ImageList from "./imageList";
import {useHistory} from "react-router-dom"

function Search() {
 
  const [allValues, setAllValues] = useState({ searchText: "", searchResponse: [],totalResults:0})
  let history = useHistory()
  const handleSubmit = async (e) => {
    e.preventDefault()
    history.push("/AdvancedSearch")
   // console.log("inside button clicke);")
    
  //  const result = await fetch(`/images/_doc/1003`,{
//      method: 'get'
  //  });

  }

  return (
    <div className="wrapper">
    <div>
      <div className="container">
      <h1>Search</h1>
      <input
        type="text"
        value={allValues.searchText}
        onKeyDown={(e) => {
          console.log(e.key);
          if (e.key === "Enter") {
          // setSearchText(e.target.value)]

          userSearch(allValues.searchText).then(response => { 
            console.log("from search.js"); 
            console.log(response); 
            
            setAllValues({searchText:allValues.searchText, searchResponse: response.data, totalResults: response.total })}).catch(err => console.log(err));
          
        } }}
        placeholder="Search..."
        onChange={(e) => setAllValues({...allValues, searchText: e.target.value})}
      />
      <button type="submit" onClick={handleSubmit}>Advance Search</button>
      </div>      
    </div>
    <div style={{color: "white", position: "relative", top:"50px"}}>
      Found: {allValues.totalResults} images
          <ImageList images={allValues.searchResponse}/>
    </div>
    </div>
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