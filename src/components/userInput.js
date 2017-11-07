import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import letter from '../actions/add-letter'

class userInput extends PureComponent {
  constructor() {
    super()

    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    if (event.target.value.length >= 2) {
      return;
    }

    this.setState({
      value: event.target.value
    })
  }

  letter(event) {
    event.preventDefault();
    this.props.letter(this.state.value)
    this.setState({
      value: ''
    })
  }

  render() {
    return (
      <div className="letters">
      <form onSubmit={this.letter.bind(this)}>
          <input type="text" value={ this.state.value } onChange={this.handleChange.bind(this)}/>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}
const mapStateToProps = ({ letter }) => ({ letter })

export default connect(mapStateToProps, { letter })(userInput)
