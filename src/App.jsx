import './App.css'
import Card from './components/Card'
import danielAvatar from "./assets/images/image-daniel.jpg"
import jonathanAvatar from "./assets/images/image-jonathan.jpg"

const App = () => {
  return (
    <div className="card-wrapper">
      <Card
        avatar={ danielAvatar }
        name="Daniel Clifford"
        title="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
        in the company I joined. I honestly feel I got every penny’s worth."
        review="“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”"
      />
      <Card
        avatar={ jonathanAvatar }
        name="Jonathan Walters"
        title="The team was very supportive and kept me motivated"
        review="“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself. ”"
      />
    </div>
  )
}

export default App
