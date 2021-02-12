import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { handelToken } from '../actions';

class Payments extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="5$ for 5 email credits"
        amount={500}
        token={token => this.props.handelToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}>
        <Button variant="success" style={{ fontSize: '16px' }}>
          Add Credits
        </Button>
      </StripeCheckout>
    );
  }
}

export default connect(null, { handelToken })(Payments);
