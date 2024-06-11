// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdraw = minus => {
    this.setState(prevState => ({amount: prevState.amount - minus}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="main">
        <div className="sub-main">
          <div className="heading-container">
            <box className="logo">S</box>
            <h1 className="heading">Suresh Paila</h1>
          </div>
          <div className="balance-container">
            <p className="blc">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="amount">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-container">
            {denominationsList.map(eachAmount => (
              <DenominationItem
                key={eachAmount.id}
                blcAmount={eachAmount}
                withdraw={this.withdraw}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
