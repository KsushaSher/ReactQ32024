import React from 'react';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

class Input extends React.Component<IProps> {
  handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  render(): React.ReactNode {
    const { value, placeholder } = this.props;

    return (
      <input
        placeholder={placeholder}
        onChange={this.handleOnChange}
        value={value}
      />
    );
  }
}

export default Input;
