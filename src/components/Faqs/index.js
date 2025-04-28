import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="main-heading">FAQs</h1>
          <FaqItem item={faqsList[0]} />
        </div>
      </div>
    )
  }
}
export default Faqs
