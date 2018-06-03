import React, { Component } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { ko } from '../../lang';
import 'react-select/dist/react-select.css';
import './NameTagger.css'

class NameTagger extends Component {
  constructor(props) {
    super(props);
    this.state={
			options: [
				{ value: '김정은과 문재인이 회담을 가졌다.',
          label: '김정은과 문재인이 회담을 가졌다.' },
				{ value: '트럼프 대통령은 빅맥 세트를 먹는다.',
          label: '트럼프 대통령은 빅맥 세트를 먹는다.' },
				{ value: '시진핑 주석이 미세먼지를 좋아한다.',
          label: '시진핑 주석이 미세먼지를 좋아한다.' }
			],
			value: undefined,
      detected: null,
    }
  }

	handleOnChange(value) {
		this.setState({ value });
	}

  apiRequest() {
    const { value } = this.state;
    const token = 'de451a0ddc14a65c0076bdd61e0df8d85d4a3d2ffae1b52d';
    if (value && value.value) {
      axios.get(`http://cathead.keci.ml:32768/nametag-demo/${value.value}`)
      .then((response) => {
        console.log('Response', response, response.data);
        const parseResponse = response.data.slice(1, response.data.length - 1);
        console.log('parseResponse', parseResponse);
        if (parseResponse) {
          this.setState({ detected: parseResponse });
        } else {
          this.setState({ detected: 'None' });
        }
      }).catch(err => {
        console.log('Error', err);
      });
    }
  }

	render () {
		const { options, value } = this.state;
    console.log('value', value);
		return (
			<div className="section">
				<h3 className="tagger-heading">
          {this.props.label}
        </h3>
				<Select.Creatable
          placeholder={ko.NAMETAGGERPLACEHOLDER}
					options={options}
					onChange={this.handleOnChange.bind(this)}
					value={value}
          style={{ height: '50px', fontSize: '24px', alignSelf: 'center' }}
          menuStyle={{ height: '500px', fontSize: '24px'}}
          promptTextCreator={label => `새로운 문장: "${label}"`}
				/>
        <div className="button-row">
          <button
            className="button"
            onClick={this.apiRequest.bind(this)}
          >Check Osori</button>
        </div>
        {
          this.state.detected &&
          <div className="detected-names">
            {`찾은 이름: ${this.state.detected}`}
            </div>
        }
			</div>
		);
	}
}

export default NameTagger;
