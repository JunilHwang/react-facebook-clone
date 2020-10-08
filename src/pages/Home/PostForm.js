import React, { Component } from 'react';

export class PostForm extends Component {
  state = {
    contents: '',
  };

  handleFormSubmit = (e) => {
    const { onPostSubmit = () => {} } = this.props;
    const { contents } = this.state;
    e.preventDefault();
    onPostSubmit(contents);
    this.setState({
      contents: '',
    });
  };

  handelFormChange = (e) =>
    this.setState({
      contents: e.target.value,
    });

  render() {
    const { minHeight = 100, lineHeight = 20, placeholder = '무슨 생각을 하고 계신가요?' } = this.props;
    const { contents } = this.state;

    return (
      <form className="write-form" onSubmit={this.handleFormSubmit}>
        <textarea
          className="form-control input-lg"
          placeholder={placeholder}
          spellCheck="false"
          value={contents}
          onChange={this.handelFormChange}
        />
        <button type="submit" className="btn btn-primary" disabled={!contents.trim().length}>
          공유하기
        </button>

        <style jsx global>{`
          .write-form > textarea.form-control {
            min-height: ${minHeight}px;
            line-height: ${lineHeight}px;
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
        `}</style>
      </form>
    );
  }
}

export default PostForm;
