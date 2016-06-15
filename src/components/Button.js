import React, {Component} from 'react';

export class ButtonComponent extends Component {
  constructor(props) {
    super();
    this.state = { count : props.count };
  }

  click() {
    this.setState({count: ++this.state.count});
  }

  render() {
    return <button onClick={this.click.bind(this)}>{'Click Me '+this.state.count}</button>;
  }
}