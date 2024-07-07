import React from 'react';

interface IState {
  synthError: Error | null;
}

class ButtonError extends React.Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { synthError: null };
  }

  handleClick = () => {
    this.setState({ synthError: new Error() });
  };

  render(): React.ReactNode {
    if (this.state?.synthError) throw new Error();
    return (
      <button className="button_error" onClick={this.handleClick}>
        Throw error
      </button>
    );
  }
}

export default ButtonError;
