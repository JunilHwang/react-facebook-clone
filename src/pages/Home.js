import React from 'react';
import css from 'styled-jsx/css';

const Home = () => {
  return (
    <div className="posts container">
      <form className="write-form">
        <textarea className="form-control input-lg" placeholder="무슨 생각을 하고 계신가요?" spellCheck="false" />
        <button type="submit" className="btn btn-primary">
          공유하기
        </button>
      </form>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Harry</h5>
          <h6 className="card-subtitle text-muted">10분전</h6>
          <p className="card-text">안녕하세요. 다같이 리엑트를 배워봅시다. 리덕스도 물런 배워야죠</p>
          <hr />
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
          <button type="submit" className="btn btn-primary">
            댓글달기
          </button>
        </form>
      </div>
      <style jsx>{HomeStyle}</style>
    </div>
  );
};

const HomeStyle = css`
  .container {
    max-width: 600px;
  }

  .write-form > textarea.form-control {
    min-height: 100px;
    line-height: 20px;
    padding: 20px;
    font-size: 18px;
    resize: none;
    border: none;
    border-radius: 0.5rem;
    transition: box-shadow ease-in-out 1s;
  }

  .write-form > textarea:focus {
    box-shadow: #999999 0 0 50px;
  }

  .write-form > button.btn {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border: none;
    font-weight: 800;
  }

  .write-form {
    margin-bottom: 100px;
  }

  .card {
    padding: 0;
    margin-top: 50px;
    border: none;
    border-radius: 0.5rem;
  }

  .card .card-body {
    padding: 40px;
  }

  .card .card-text {
    padding-top: 20px;
    white-space: pre-wrap;
  }

  .card .card-info {
    height: 20px;
  }

  .card .card-info .thumb-count,
  .card .card-info .comment-count {
    display: inline-block;
    margin-right: 24px;
    vertical-align: middle;
    font-size: 12px;
    cursor: pointer;
    padding: 0;
    border: none;
    background-color: transparent;
    transition: color ease-in-out 0.3s;
    transition: margin-top ease-in-out 0.2s;
  }

  .card .card-info .thumb-count:hover,
  .card .card-info .comment-count:hover {
    color: #007bff;
    margin-top: -3px;
  }

  .card .card-info .thumb-count .on {
    color: #007bff;
  }

  ul.comment-list {
    padding: 0;
    list-style: none;
  }

  li.comment {
    padding: 20px 40px 24px;
    border-bottom: 1px solid #e6ecf5;
    background-color: #fafbfd;
    position: relative;
  }

  li.comment:first-child {
    border-top: 1px solid #e6ecf5;
  }

  li.comment .comment-text {
    padding-top: 20px;
  }

  .comment-form {
    margin: 20px;
  }

  .comment-form > textarea.form-control {
    min-height: 20px;
    line-height: 20px;
    border-radius: 0.5rem;
    resize: none;
  }

  .comment-form > button.btn {
    float: right;
    margin-bottom: 0;
    margin-top: 16px;
    background-color: #3b5999;
    color: #fffffe;
    border-color: unset;
    font-weight: 800;
  }
`;

export default Home;
