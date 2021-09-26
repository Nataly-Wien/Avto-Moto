import './comment.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({comment}) => {
  return (
    <div className="mention__comment comment">
      <p className="comment__header">Комментарий</p>
      {/* <!--на мобильной visually-hidden --> */}
      <p className="comment__text">{comment}</p>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.string,
};

export default Comment;
