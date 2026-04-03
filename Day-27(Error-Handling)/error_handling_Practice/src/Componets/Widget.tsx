import { Component, type ReactNode } from "react";
interface WidgetProps {
  profileimage: string;
}

class Widget extends Component<WidgetProps> {
  render(): ReactNode {
    return (
      <>
        {" "}
        <h4>This is a Widget Component</h4>
        {this.props.profileimage ? (
          <img
            src={this.props.profileimage}
            alt="Profile Image"
            style={{ width: "60px", height: "60px" }}
          />
        ) : (
          <p>No Profile Image Available</p>
        )}
      </>
    );
  }
}
export default Widget;
