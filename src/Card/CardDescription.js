import React, { PureComponent } from 'react';

// 這裡不能換成functional component因為還有state跟toggle的關係
// 但是這邊可以換成pureComponent
class CardDescription extends PureComponent {
  state = {
    isOpen: false,
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    const { isOpen } = this.state;
    const classname = `card__description__text ${
      isOpen ? '' : 'less'
    }`;
    return(
      <div className="card__description">
        <div className={classname}>
          {this.props.children}
        </div>
        <button
          className="card__description__button"
          onClick={this.toggle}>
          { isOpen ? 'Less' : 'More' }
        </button>
      </div>
    );
    // 這裡就是接<component>這裡面的東西</component>
  }
}

export default CardDescription;