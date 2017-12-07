import React from 'react';

export default class App extends React.Component {
  constructor() {
    super(props);
    this.state = {

    };
  }
  onChange = () => {
    console.log("adsfhasdlkjfh");
  }

  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <button onClick={this.onChange}>Call Change</button>
      </div>);
  }
}