import React, { Component } from 'react';
import GeneralInfoCSS from '../Styles/GeneralInfo.module.css'
import Displayed from './Displayed';

class Experience extends Component {
    constructor (props) {
        super(props)
        this.state = {
            experience: {
                company: '',
                title: '', 
                start: '',
                end: '',
                isSubmitted: false
            }
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((prevState) => {
          return {
            experience: {
              ...prevState.experience,
              [name]: value
            }
          }
        })
      }

      onSubmit = (e) => {
          const {experience } = this.state
          e.preventDefault()
          this.setState({
            experience: {
                company: experience.company,
                title: experience.title, 
                start: experience.start,
                end: experience.end,
                isSubmitted: !experience.isSubmitted
            }
          })
      }

    render() {
        const {experience} = this.state
        if (experience.isSubmitted) {
            return (
                <div>
                    <Displayed
                        company={experience.company}
                        title={experience.title}
                        start={experience.start}
                        end={experience.end}
                        edit={this.onSubmit}
                    />
                </div>
            )

        } else {
            return (
                <div>
                <form onSubmit={this.onSubmit}>
                <div className={GeneralInfoCSS.contentstyles}>
                <div>
                <div>
                    <label htmlFor="company">Company</label>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} value={experience.company} name='company' id={this.props.id} />
                </div>
                <div>
                    <label htmlFor="start">Start</label>
                </div>
                <div>
                    <input type="date" onChange={this.handleChange} value={experience.start} name="start" id={this.props.id} />
                </div>
    
                </div>
                <div>
                <div>
                    <label htmlFor="title">Title</label>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} value={experience.title} name='title' id={this.props.id} />
                </div>
                <div>
                    <label htmlFor="end">End</label>
                </div>
                <div>
                    <input type="date" onChange={this.handleChange} value={experience.end} name="end" id={this.props.id} />
                </div>
    
                </div>
                </div>
                <button type='submit'>Submit</button>
                <button onClick={this.props.handleDelete}>Delete</button>
                </form>
                </div>
            );
        }
    }
}

export default Experience;
