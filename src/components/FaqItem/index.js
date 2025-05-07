// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachQuestion, selectedAction} = props
  const {id, answerText, questionText, isAnswerShown} = eachQuestion
  const onIconClick = () => {
    selectedAction(id)
  }
  const result =
    isAnswerShown === undefined || isAnswerShown === false ? 'Hide' : `Show`
  const openIcon =
    result === 'Hide'
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
  const showAnswer = result === 'Show'
  const altImageText = result === 'Hide' ? 'plus' : 'minus'
  return (
    <li className="eachQueryContainer">
      <div className="shownContent">
        <h1 className="eachQuestionHead">{questionText}</h1>
        <img
          alt={altImageText}
          onClick={onIconClick}
          className="iconImages"
          src={openIcon}
        />
      </div>
      {showAnswer && (
        <div>
          <hr />
          <p className="answer-text">{answerText}</p>
        </div>
      )}
    </li>
  )
}

export default FaqItem
