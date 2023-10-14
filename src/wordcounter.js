import React, { Component } from 'react';

class WordCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  countWords = () => {
    const words = this.state.text.trim().split(/\s+/);
    return words.length;
  };

  handleInputChange = (event) => {
    this.setState(
      { text: event.target.value }
      );
  };

  render() {
    return (
      <div className="word-counter">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          rows="6"
          placeholder="Type your text here..."
          value={this.state.text}
          onChange={this.handleInputChange}
        />
        <p>Word count: {this.countWords()}</p>
      </div>
    );
  }
}

export default WordCounter;
