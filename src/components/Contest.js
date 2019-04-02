import React, {Component} from 'react';
import PropTypes from 'prop-types'


class Contest extends Component {
  render() {
    return(
      <div className="Contest">
        <div className="Contest-description">
          {this.props.description}
        </div>
        <div className="home-link link"
        onClick={this.props.contestLinkClick}>
          Return Home
        </div>
      </div>
    )
  }
}

Contest.propTypes = {
  description: PropTypes.string.isRequired,
  contestLinkClick: PropTypes.func.isRequired
}

export default Contest;
