import React from 'react';

import Promotion from './Promotion';
import CreditCard from './CreditCard';
import withOpen from './hocs/withOpen';
const PromotionWithOpen = withOpen(Promotion);
const CreditCardWithOpen = withOpen(CreditCard);

const HOCWrap = () => (
  <div>
    <PromotionWithOpen />
    <CreditCardWithOpen />
  </div>
);

export default HOCWrap;