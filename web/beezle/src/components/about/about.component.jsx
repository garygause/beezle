import React from "react";

import "./about.styles.scss";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: true,
    };
  }

  showHideContent = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  render() {
    const { hidden } = this.state;
    return (
      <div className="about">
        <div className="title">What is Beezle?</div>
        {hidden ? (
          <div className="description">
            A NY Times Spelling Bee mini game spoiler.
            <div className="read-more-less" onClick={this.showHideContent}>
              [+ Read More]
            </div>
          </div>
        ) : (
          <div className="description">
            Ever wonder what that 10 letter word in the NY Times Spelling Bee
            mini game was that you failed to figure out? That drove me nuts.
            Beezle allows you to see potential solutions to the mini game. You
            should not use this until after you have used up your tries in the
            game for the day. It is a great game, but this is a major spoiler.
            <div className="read-more-less" onClick={this.showHideContent}>
              [- Read Less]
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default About;
