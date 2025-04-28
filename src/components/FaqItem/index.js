import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  render() {
    const {item} = this.props
    const {questionText, answerText} = item
    const buttonText = console.log(item)
    return (
      <div className="faq-item">
        <div className="question-container">
          <h1 className="faq-question">{questionText}</h1>
          <button type="button" className="clicked">
            {buttonText}
          </button>
        </div>

        <p className="faq-answer">{answerText}</p>
      </div>
    )
  }
}

export default FaqItem
