import React from 'react'
import {Link} from 'react-router-dom'

class GradProfileEdit extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      aboutMe: '',
      location: '',
      githubLink: '',
      portfolio: '',
      previousExperience: '',
      interests: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addGradProfile (profile) {
    // request(api/)
    // .post(this.state)
    // })
  }

  render () {
    return (
      <div>
        <form className='submit-form'>
          <h3>
            About Me:
          </h3>
          <div>
            <input name='aboutMe' onChange={this.handleChange} />
          </div>
          <h3>
            Location:
          </h3>
          <div>
            <input name='location' onChange={this.handleChange} />
          </div>
          <h3>
            Github:
          </h3>
          <div>
            <input name='githubLink' onChange={this.handleChange} />
          </div>
          <h3>
            Portfolio:
          </h3>
          <div>
            <input name='portfolio' onChange={this.handleChange} />
          </div>
          <h3>
            Previous Experience:
          </h3>
          <div>
            <input name='previousExperience' onChange={this.handleChange} />
          </div>
          <h3>
            Interests:
          </h3>
          <div>
            <input name='interests' onChange={this.handleChange} />
          </div>
          <Link to='/grad-profile'><button onClick={() => this.props.addGradProfile(this.state)}>Save Changes
          </button></Link>
        </form>
      </div>
    )
  }
}

export default GradProfileEdit
