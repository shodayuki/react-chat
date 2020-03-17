import React from 'react';
import './Button.css';

class Button extends React.Component{
  constructor(props){
    super(props);

    this.onClickHander = this.onClickHander.bind(this);
  }

  onClickHander() {
    if (typeof this.props.onClickHander === 'function') {
      this.props.onClickHander();
    }
  }

  render() {
    return (
      <span
        className="Button-container"
        onClick={this.onClickHander}
      >
        {this.props.children}
      </span>
    );
  }
}

export default Button;