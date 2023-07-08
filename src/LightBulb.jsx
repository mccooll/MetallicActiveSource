import './LightBulb.css'
const LightBulb = ({on}) => {
  return (
    <div className={`bulb ${on ? 'on':'off'}`}></div>
  )
}

export default LightBulb;