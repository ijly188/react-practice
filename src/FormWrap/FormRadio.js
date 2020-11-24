import React, { Component } from 'react';

class FormRadio extends Component {
  state = {
    gender: 'male',
    like: {
      male: false,
      female: false,
    },
    // likearray: [],
  };
  onChangeGender = (e) => {
    this.setState({
      gender: e.target.value,
    });
  };
  onChangeLike = (e) => {
    const key = e.target.value;
    this.setState((state) => ({
      like: {
        ...state.like,
        [key]: !state.like[key],
      }
    }));
  };
  // onChangeLikeArray = (e) => {
  //   const key = e.target.value;
  //   this.setState((state) => ({
  //     likearray: [
  //       ...state.likearray,

  //     ]
  //   }));
  // }
  render() {
    const { gender, like, likearray } = this.state;
    return (
      <div>
        <div>
          Your gender:
          <input
            id="male1"
            type="radio"
            value="male"
            onChange={this.onChangeGender}
            checked={gender === 'male'}
          />
          <label htmlFor="male1">Male</label>
          <input
            id="female1"
            type="radio"
            value="female"
            onChange={this.onChangeGender}
            checked={gender === 'female'}
          />
          <label htmlFor="female1">Female</label>
        </div>
        <div>
          You like1:
          <input
            id="male2"
            type="checkbox"
            value="male"
            onChange={this.onChangeLike}
            checked={like.male}
          />
          <label htmlFor="male2">Male</label>
          <input
            id="female2"
            type="checkbox"
            value="female"
            onChange={this.onChangeLike}
            checked={like.female}
          />
          <label htmlFor="female2">Female</label>
        </div>
        {/* <div>
          You like2:
          <input
            id="male3"
            type="checkbox"
            value="male"
            onChange={this.onChangeLike}
            checked={likearray.find((r) => r['male'] !== undefined)}
          />
          <label htmlFor="male3">Male</label>
          <input
            id="female3"
            type="checkbox"
            value="female"
            onChange={this.onChangeLike}
            checked={like.female}
          />
          <label htmlFor="female3">Female</label>
        </div> */}
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
      </div>
    );
  }
}

export default FormRadio;