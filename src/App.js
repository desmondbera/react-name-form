import React from 'react';
import './App.css';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(props) {
    this.setState({value: props.target.value})
  }

  handleSubmit(props) {
    alert(this.state.value !== '' ? 'A name was submitted: ' + this.state.value : 'Name not submitted :(' );
    props.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

export default NameForm;
