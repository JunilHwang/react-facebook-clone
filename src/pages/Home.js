import React from 'react';

const Home = () => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Harry</h5>
        <h6 className="card-subtitle text-muted">10분전</h6>
        <p className="card-text">안녕하세요. 다같이 리엑트를 배워봅시다. 리덕스도 물런 배워야죠</p>
        <hr/>
        <div className="card-info">
          <button type="button" className="thumb-count">
            <i className="far fa-thumbs-up">4 개</i>
          </button>
          <span className="comment-count">
              <i className="far fa-comment-alt">3 개</i>
            </span>
        </div>
      </div>
      <ul className="comment-list">
        <li className="comment">
          <div className="comment-info">
            <h6 className="comment-writer">Aiden</h6>
            <div className="comment-datetime">10분전</div>
          </div>
          <p className="comment-text">그래요 배워야죠 배워야 남는거죠...</p>
        </li>
      </ul>
      <form className="comment-form">
        <textarea className="form-control input-lg" placeholder="댓글을 입력하세요..." spellCheck="false" />
        <button type="submit" className="btn btn-primary">댓글달기</button>
      </form>
    </div>
  )
};

export default Home;