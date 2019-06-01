import React, { Component } from "react";
import { Tag } from "antd";
import "../css/TagBox.css";

class TagBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tagName: props.tagName,
      color: props.color
    };
  }
  render() {
    return (
      <div className="tag-box" style={{ display: "inline-block" }}>
        <Tag
          color={this.state.color}
          style={{
            fontSize: "14px",
            lineHeight: "1.618",
            padding: "0 10px",
            marginBottom: "10px",
            marginRight: "10px"
          }}
        >
          {this.state.tagName}
        </Tag>
      </div>
    );
  }
}

export default TagBox;
