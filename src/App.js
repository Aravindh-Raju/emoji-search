import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import loky from "@loky-js/loky/src/loky/loky";
import $ from "jquery";

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  componentDidMount () {
    // Alert a message
    loky('H',"","", function(event, handler){
      event.preventDefault(); 
      alert('you pressed H!');    
    });
    // Focus text field
    loky('T',"","", function(event, handler){
      event.preventDefault();
      $("#input").fadeOut(100).fadeIn(200).fadeOut(100).fadeIn(200);
      document.getElementById("input").focus();
    });   
    // Redirect to a link
    loky('R',"","", function(event, handler){
      event.preventDefault(); 
      window.location= "https://github.comcast.com/Loky"
      });  
    // Button click event
    loky('B',"","", function(event, handler){
      event.preventDefault();
      $("#bton").fadeOut(100).fadeIn(200).fadeOut(100).fadeIn(200);
      document.getElementById("bton").click();
    }); 
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div>
        <Header />
        <SearchInput textChange={this.handleSearchChange} />
        <EmojiResults emojiData={this.state.filteredEmoji} />
      </div>
    );
  }
}
