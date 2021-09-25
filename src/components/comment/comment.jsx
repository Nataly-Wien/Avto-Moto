// import './comment.scss';
import React from 'react';

const Comment = () => {
  return (
    <div className="mention__comment comment">
      <p className="comment__header">Комментарий</p>
      {/* <!--на мобильной visually-hidden --> */}
      <p className="comment__text">Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по
        базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что
        полностью доволен.</p>
    </div>
  );
};

export default Comment;
