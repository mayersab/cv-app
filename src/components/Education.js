import React, { Component } from 'react';
import GeneralInfoCSS from '../Styles/GeneralInfo.module.css'
import Displayed from './Displayed';

class Education extends Component {
    constructor(props) {
        super(props)
        this.state = {
            education: {
                schoolName: '',
                areaOfStudy: '',
                from: '',
                to: '',
                isSubmitted: false
              },
              educationInfo: []
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState((prevState) => {
          return {
            education: {
              ...prevState.education,
              [name]: value
            }
          }
        })
      }

      onSubmit = (e) => {
          const {education } = this.state
          e.preventDefault()
          this.setState({
              education: {
                schoolName: education.schoolName,
                areaOfStudy: education.areaOfStudy,
                from: education.from,
                to: education.to,
                isSubmitted: !education.isSubmitted
              }
          })

      }
    

    render() {
        const {education} = this.state
        if (education.isSubmitted) {
            return (
                <div>
                    <Displayed
                        schoolName={education.schoolName}
                        areaOfStudy={education.areaOfStudy}
                        from={education.from}
                        to={education.to}
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
                    <label htmlFor="schoolName">School</label>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} value={education.schoolName} name='schoolName' id={this.props.id} />
                </div>
                <div>
                    <label htmlFor="from">From</label>
                </div>
                <div>
                    <input type="date" onChange={this.handleChange} value={education.from} name="from" id={this.props.id} />
                </div>
    
                </div>
                <div>
                <div>
                    <label htmlFor="areaOfStudy">Area Of Study</label>
                </div>
                <div>
                    <input type="text" onChange={this.handleChange} value={education.areaOfStudy} name='areaOfStudy' id={this.props.id} />
                </div>
                <div>
                    <label htmlFor="to">to</label>
                </div>
                <div>
                    <input type="date" onChange={this.handleChange} value={education.to} name="to" id={this.props.id} />
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

export default Education;


