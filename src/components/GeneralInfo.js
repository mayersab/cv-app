import React, { Component } from 'react';
import GeneralInfoCSS from '../Styles/GeneralInfo.module.css'
import Displayed from './Displayed';

class Generalinfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      general: {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        isSubmitted: false
      }
    }
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState((prevState) => {
      return {
        general: {
          ...prevState.general,
          [name]: value
        }
      }
    })
  }

  onSubmit = (e) => {
      const {general, info} = this.state
      e.preventDefault()
      this.setState({
        general: {
          firstName: general.firstName,
          lastName: general.lastName,
          phone: general.phone,
          email: general.email,
          isSubmitted: !general.isSubmitted
        }
      })
  }

  render() {
    const {general} = this.state
    if (general.isSubmitted) {
      return (
        <div>
          <Displayed
            firstName={general.firstName}
            lastName={general.lastName}
            phone={general.phone}
            email={general.email}
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
            <label htmlFor='firstName'>First Name</label>
          </div>
          <div>
            <input onChange={this.handleChange} value={general.firstName} id='firstName' name='firstName' type="text"/>
          </div>

          <div>
            <label htmlFor='phone'>Phone</label>
          </div>
          <div>
            <input onChange={this.handleChange} value={general.phone} id='phone' name='phone' type="text"/>
          </div>
          
        </div>

        <div>

          <div>
            <label htmlFor='lastName'>Last Name</label>
          </div>
          <div>
            <input onChange={this.handleChange} value={general.lastName} id='lastName' name='lastName' type="text"/>
          </div>

          <div>
            <label htmlFor='email'>Email</label>
          </div>
          <div>
            <input onChange={this.handleChange} value={general.email} id='email' name='email' type="text"/>
          </div>
          
        </div>

        </div>

        <button type='submit'>Submit</button>


        </form>
        </div>
      )
    }
  }
}

export default Generalinfo;
