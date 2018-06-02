import React, { Component } from 'react';
import { ko } from '../../lang';
import './RelatedPeople.css'

class RelatedPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="related-people-container">
        <div className="related-people-title">
          {ko.RELATEDPPL}
        </div>

      </div>
    );
  }
}

export default RelatedPeople;
