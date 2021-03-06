import React from 'react'
import {connect} from 'react-redux'

import Check from './Check'

class EvalMe extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      questionIndx: 0,
      answer: '',
      key: '',
      reason: '',
      check: '',
      disabled: '',
      enableButton: 'disabled',
      currentQuestion: 1,
      score: 0,
      buttonText: 'Next Question'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.displayNext = this.displayNext.bind(this)
  }

  handleChange (evt) {
    const selectedAnswer = evt.target.getAttribute('data-ans')
    const reasoning = evt.target.getAttribute('data-fbk')
    this.setState({
      answer: selectedAnswer,
      key: evt.target.value,
      reason: reasoning,
      enableButton: ''
    })
  }

  handleSubmit () {
    if (Number(this.state.key) === 1) {
      this.setState({
        check: 'Correct!',
        disabled: 'disabled',
        enableButton: 'disabled',
        score: this.state.score + 1
      })
    } else {
      this.setState({
        check: 'Not Quite',
        disabled: 'disabled',
        enableButton: 'disabled'
      })
    }
  }

  displayNext () {
    if (this.props.evalQuestions.length === this.state.questionIndx + 1) {
      this.props.history.push('complete')
    }
    this.setState({
      questionIndx: this.state.questionIndx + 1,
      check: '',
      disabled: '',
      currentQuestion: this.state.currentQuestion + 1,
      buttonText: 'Complete Evaluation'
    })
  }

  render () {
    return (
      <div className='eval-me'>
        <h2>{this.props.evalQuestions[this.state.questionIndx].question}</h2>
        <form>
          {this.props.evalQuestions[this.state.questionIndx].responses.map(answer => {
            return (
              <div key={answer.id}>
                <input readOnly type='radio' name='answer'
                  value={answer.key} data-ans={answer.response}
                  data-fbk={answer.reason}
                  onChange={this.handleChange}
                  checked={this.state.answer === answer.response}
                  disabled={(this.state.disabled) ? 'disabled' : ''} />{' '}
                <label>{answer.response}</label>
              </div>)
          })}
        </form>

        {this.state.check && <Check feedback={this.state} displayNext={this.displayNext} />}

        <button type='button' className='button'
          disabled={this.state.enableButton}
          onClick={this.handleSubmit}>Submit Answer</button>

        <div>
          <p>{this.state.currentQuestion}/{this.props.evalQuestions.length}</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    evalQuestions: state.evalQuestions
  }
}

export default connect(mapStateToProps)(EvalMe)
