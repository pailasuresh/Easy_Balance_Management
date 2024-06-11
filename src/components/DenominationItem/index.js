// Write your code here
import './index.css'

const DenominationItem = props => {
  const {blcAmount, withdraw} = props
  const {value} = blcAmount

  const remove = () => {
    withdraw(value)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={remove}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
