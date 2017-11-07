import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class showWord extends PureComponent {

  render() {
    return (
      <div>
      <h1>{ this.props.hiddenWord }</h1>
      </div>
    )
  }
}
const mapStateToProps = ({ gameLogic }) => ({ gameLogic })

export default connect (mapStateToProps)(showWord)
