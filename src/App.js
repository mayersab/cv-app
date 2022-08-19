import './Styles/App.css';
import React, {Component} from 'react'
import uniqid from 'uniqid'
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import FontStyles from './Styles/fonts.module.css'


class App extends Component {
  constructor(props) {
    super()
    this.state = {
      educationXp: [],
      workXp: []
    }
    
}

addExp = (exp) => {
  if (exp === 'education') {
    this.setState((prevState) => {
      return {
        educationXp: [...prevState.educationXp, uniqid()]
      }
    })
  } else {
    this.setState((prevState) => {
      return {
        workXp: [...prevState.workXp, uniqid()]
      }
    })
  }
}

handleDelete = (exp, id) => {
  const {educationXp, workXp} = this.state
  if (exp === 'education') {
    this.setState({
      educationXp: educationXp.filter(key => key !== id)
    })
  } else {
    this.setState({
      workXp: workXp.filter(key => key !== id)
    })
  }

}


render() {
const {educationXp, workXp} = this.state
const dispEdu = educationXp.map((id) => {
    return (
      <div key={id}>
        <Education
          id={id}
          handleDelete={() => this.handleDelete('education', id)}
        />
      </div>
    )
  })
const dispWork = workXp.map((id) => {
  return (
    <div key={id}>
      <Experience
        id={id}
        handleDelete={() => this.handleDelete('work', id)}
      />
    </div>
  )
})

  
    return (
      <div className='container'>
      <div className='App' >
      <h1 className={FontStyles.title}>React CV-App</h1>
      <p className={FontStyles.generalinfo}>General info</p>
      
      <GeneralInfo/>

      <p className={FontStyles.education}>Education</p>

      {dispEdu}
      <button onClick={() => this.addExp('education')}>Add</button>

      <p className={FontStyles.work}>Work Experience</p>

      {dispWork}
      <button onClick={() => this.addExp('work')}>Add</button>



      </div>
      </div>
    )
  }
}

export default App;
