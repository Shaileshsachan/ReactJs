import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";

class App extends React.Component {
  state = { images: [] };

  async onSearchSubmit(entry) {
    const response = await axios.get(
      `https://pixabay.com/api/?key=21299977-c2cfb69a28bfc508ed32e8c4c&q=${entry}&image_type=photo`
    );
    this.setState({ images: response.data.hits });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        <SearchInput onSearchSubmit={this.onSearchSubmit} />
        We have {this.state.images.length} images
      </div>
    );
  }
}

export default App;
