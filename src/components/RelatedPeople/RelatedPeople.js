import React, { Component } from 'react';
import PersonCard from './PersonCard/PersonCard';
import { ko } from '../../lang';
import './RelatedPeople.css'

class RelatedPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relatedPeopleList: [],
    }
  }

  componentDidMount() {
    const { allprofiles, keywords, keyword } = this.props;
    const keywordInfo = keywords[keyword];
    const relatedPplList = keywordInfo.Names.map((id) => {
      return {
        id,
        ...allprofiles[id]
      };
    });
    const relatedPeopleList = relatedPplList.filter((s1, pos, arr) =>
      arr.findIndex((s2)=>s2.id === s1.id) === pos);
    console.log('relatedPeopleList', relatedPeopleList);
    this.setState({ relatedPeopleList });
  }

  render() {
    const { relatedPeopleList } = this.state;
    return (
      <div className="related-people-container">
        <div className="related-people-title">
          {ko.RELATEDPPL}
        </div>
        <div className="related-people-row">
          {
            relatedPeopleList.map((person, index) => {
              return (
                <PersonCard
                  person={person}
                  key={index}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default RelatedPeople;
