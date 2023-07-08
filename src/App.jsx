import './App.css'

const App = ({name}) => {
  const today = new Date()
  return (
    <div>
      <p>{name}'s React App ⚛️</p>
      <p>Made today {today.toDateString()}</p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  )
}

export const FancyParagraph = ({text}) => <p style={{fontWeight:'bold'}}>{text}</p>

export default App;