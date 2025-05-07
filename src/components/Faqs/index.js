// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem/index'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    const {faqsList} = this.props
    this.state = {
      queryList: faqsList,
    }
  }

  selectedContent = id => {
    this.setState(prevState => ({
      queryList: prevState.queryList.map(eachQuery => {
        if (id === eachQuery.id) {
          if (eachQuery.isAnswerShown === undefined) {
            return {...eachQuery, isAnswerShown: true}
          }
          return {...eachQuery, isAnswerShown: !eachQuery.isAnswerShown}
        }
        return eachQuery
      }),
    }))
  }

  render() {
    const {queryList} = this.state
    return (
      <div className="container">
        <div className="cardContainer">
          <h1 className="page-head">FAQs</h1>
          <ul>
            {queryList.map(eachQuery => (
              <FaqItem
                key={eachQuery.id}
                eachQuestion={eachQuery}
                selectedAction={this.selectedContent}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
