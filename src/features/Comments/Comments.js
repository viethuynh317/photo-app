import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {useDispatch, useSelector} from 'react-redux';
import { commentAdded, fetchComments } from './commentsSlice';
import Comment from './components/Comment';
import {commentsSelector} from './commentsSlice'

const Comments = props => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchComments());  
  }, [dispatch]);
  // dispatch(commentAdded());
  const setAllComments = useSelector(commentsSelector.selectAll);
  
  return (
    <div>
      {setAllComments.map(comment => (
        <Comment key={comment.id} comment={comment}/>
      ))}
    </div>
  )
}

Comments.propTypes = {

}

export default Comments
