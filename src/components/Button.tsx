import React from 'react';

interface IProps {
  onClick: () => void;
}

class Button extends React.Component<IProps> {
  render(): React.ReactNode {
    return (
      <button onClick={this.props.onClick} type="button">
        Search
      </button>
    );
  }
}

export default Button;
