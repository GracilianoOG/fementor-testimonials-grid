import './App.css'
import Card from './components/Card'
import danielAvatar from "./assets/images/image-daniel.jpg"
import jonathanAvatar from "./assets/images/image-jonathan.jpg"
import jeanetteAvatar from "./assets/images/image-jeanette.jpg"
import patrickAvatar from "./assets/images/image-patrick.jpg"

const App = () => {
  return (
    <div className="card-wrapper">
      <Card
        avatar={ danielAvatar }
        name="Daniel Clifford"
        title="I received a job offer mid-course, and the subjects I learned were current, if not more so, 
        in the company I joined. I honestly feel I got every penny’s worth."
        review="I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
        transition and have heard some people who had an amazing experience here. I signed up 
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
        The next 12 weeks was the best - and most grueling - time of my life. Since completing 
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."
      />
      <Card
        avatar={ jonathanAvatar }
        name="Jonathan Walters"
        title="The team was very supportive and kept me motivated"
        review="I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
        for a big company. This was one of the best investments I’ve made in myself."
      />
      <Card
        avatar={ jeanetteAvatar }
        name="Jeanette Harmon"
        title="An overall wonderful and rewarding experience"
        review="Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
        while doing something I love."
      />
      <Card
        avatar={ patrickAvatar }
        name="Patrick Abrams"
        title="Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
        learning from their experiences was easy."
        review="The staff seem genuinely concerned about my progress which I find really refreshing. The program 
        gave me the confidence necessary to be able to go out in the world and present myself as a capable 
        junior developer. The standard is above the rest. You will get the personal attention you need from 
        an incredible community of smart and amazing people."
      />
    </div>
  )
}

export default App
