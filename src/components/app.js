import React from 'react'
import {connect} from 'react-redux'
import actions from '../actions/'

class App extends React.Component {
  render() {
    return (<div onClick={() => this.props.creator('payload')}>
      {JSON.stringify(this.props.part)}
    </div>)
  }
}

export default connect((state) => ({
  part: state.part
}), {
  creator: actions.creator
})(App)
