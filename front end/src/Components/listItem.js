import React from "react";

class ListItem extends React.Component {
   constructor(props){
      super(props);
      this.itemRef = React.createRef();
   }
   componentDidMount(){
      console.log(this.listRef.current.clientHeight);
   }
   render(){
      const { description, urls } = this.props.image;
         return (
           <div>
              <img 
                 ref={ this.listRef }
                 alt={ description }
                 src={ urls.regular } 
              />
           </div>
         )
      }
   }
export default ListItem;