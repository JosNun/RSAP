import React, { Component, SyntheticEvent } from 'react';
import { render } from '../../../node_modules/@types/react-dom/index';

interface FormState {
  formData: TeamInfo;
}

interface TeamInfo {
  teamNum?: string;
}

interface FormProps {}

class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      formData: {
        teamNum: '',
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    let formData = JSON.stringify(this.state.formData);

    fetch('/add-team', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: formData,
    })
      .then(res => {
        return res.text();
      })
      .then(res => {
        console.log(res);
      });
  };

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let val = e.currentTarget.value;
    let name = e.currentTarget.name;

    this.setState({
      formData: {
        [name]: val,
      },
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="team-number">Team Number</label>
          <input
            type="number"
            name="teamNum"
            value={this.state.formData.teamNum}
            onChange={this.handleChange}
          />

          <button onClick={this.submitForm}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
