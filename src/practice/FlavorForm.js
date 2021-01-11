import React from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectOptions: []};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let name = target.name;
    let value = Array.from(target.selectedOptions, option => option.value);
    this.setState({[name]: value});
  }

  handleSubmit(event) {
    // let target = event.target;
    // let name = target.name;
    // let value = Array.from(target.selectedOptions, option => option.value);
    alert('Your favorite flavor is: ' + this.state.selectOptions.join(', '));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select name="selectOptions" multiple={true} value={this.state.selectOptions} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;