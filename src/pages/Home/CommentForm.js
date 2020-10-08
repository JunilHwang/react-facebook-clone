import React, { Component } from 'react';

export class CommentForm extends Component {
  state = {
    contents: '',
  };

  handleSubmit = (e) => {
    const { postSeq, onCommentSubmit = () => {} } = this.props;
    e.preventDefault();
    onCommentSubmit(postSeq, this.state.contents);
    this.setState({ contents: '' });
  };

  handelFormChange = (e) =>
    this.setState({
      contents: e.target.value,
    });

  render() {
    const { minHeight = 20, lineHeight = 20, placeholder = '댓글을 입력하세요...' } = this.props;
    const { contents } = this.state;
    return (
      <form className="comment-form" onSubmit={this.handleSubmit}>
        <textarea
          className="form-control input-lg"
          placeholder={placeholder}
          spellCheck="false"
          value={contents}
          onChange={this.handelFormChange}
        />
        <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
          댓글달기
        </button>

        <style jsx global>{`
          .comment-form {
            margin: 20px;
          }
          .comment-form > textarea.form-control {
            min-height: ${minHeight}px;
            line-height: ${lineHeight}px;
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
        `}</style>
      </form>
    );
  }
}

export default CommentForm;
