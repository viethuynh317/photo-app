import React from 'react'
import PropTypes from 'prop-types'

const Comment = props => {
  const {comment} = props;
  
  return (
    <div>
      <p>{comment.email}</p>
      <p>{comment.name}</p>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
}

export default Comment
