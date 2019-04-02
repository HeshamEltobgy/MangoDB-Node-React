import React, {Component} from 'react';
import PropTypes from 'prop-types'

class ContestPreview extends Component {

  handleClick = () => {
    // console.log(this.props.contestName)
    this.props.onClick(this.props.id)
  }
  render () {
    return (
      <div className="link ContestPreview" onClick={this.handleClick}>
          <div className="category-name">
            {this.props.categoryName}
          </div>
          <div className="contest-name">
          {this.props.contestName}
        </div>
        <div className="type">
        {this.props.function}
      </div>

      </div>
    )
  }
}

ContestPreview.propTypes = {
  id: PropTypes.number.isRequired,
  categoryName : PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired

}

export default ContestPreview;
