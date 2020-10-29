import React, { useState } from "react";
import { advanceUserSearch } from "../Services/advanceElastic";
import ImageList from "./imageList";
import {useHistory} from "react-router-dom"

function AdvancedSearch() {
 
  const [allValues, setAllValues] = useState({ searchText: "", searchResponse: [],totalResults:0})
  const [options, setOption] = useState( [
    {
        name: "figid",
        isChecked: false
    },
    {
      name: "patentID",
      isChecked: false
  },
  {
      name: "object",
      isChecked: false
  }
      ])
  let history = useHistory()
  const handleSubmit = async (e) => {
    console.log("inside button clicke);")
    e.preventDefault()
    advanceUserSearch(options.filter(option => option.isChecked).map(option => option.name),allValues.searchText).then(response => { 
        console.log("from search.js"); 
        console.log(response); 
        
        setAllValues({searchText:allValues.searchText, searchResponse: response.data, totalResults: response.total })}).catch(err => console.log(err));
      



  }

  
  return (
    <div className="wrapper1">
    <div>
      <form className="container" action method="GET">
      <h1>Search</h1>
      <input
        type="text"
        value={allValues.searchText}
        onKeyDown={(e) => {
            console.log(e.key);
            if (e.key === "Enter") {
            // setSearchText(e.target.value)]
  
            advanceUserSearch(allValues.searchText).then(response => { 
              console.log("from search.js"); 
              console.log(response); 
              
              setAllValues({searchText:allValues.searchText, searchResponse: response.data, totalResults: response.total })}).catch(err => console.log(err));
            
          } }}
          placeholder="Search..."
          onChange={(e) => setAllValues({...allValues, searchText: e.target.value})}
        placeholder="Search..."

      />
      {
          options.map(option => <><label style={{color: "white"}}> {option.name}<input checked={option.isChecked} onChange={() => {
              setOption([...options.filter(o => o.name !== option.name), {
                  name: option.name,
                  isChecked: !option.isChecked
              }])
          }} type="checkbox" /></label><br/></>)
      }
      <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>      
    </div>
    <div style={{color: "white"}}>
      Found: {allValues.totalResults} images
          <ImageList images={allValues.searchResponse}/>
    </div>
    </div>
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