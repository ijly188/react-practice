import React, { Component } from 'react';

class FileNode extends Component {
  state = {
    open: false,
  };
  toggle = () => {
    this.setState({
      open: !this.state.open
    });
  };
  render() {
    const { name, files } = this.props;
    const { open } = this.state;
    if (!files) {
      return <li>{name}</li>;
    }
    return (
      <div>
        <div
          className={`folder ${open ? 'open' : ''}`}
          onClick={this.toggle}>
          {name}
        </div>
        {
          !open ? null : (
            <ul>
              {files.map(( file, index ) => (
                <FileNode key={index} {...file}/>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}
/*
  組件其實可以引用自己，但是不能飲用到無窮無盡造成無限迴圈這樣
  通常會把比較短的放前面，某個角度來說就是早點把判斷做完
  這裡看起來會很複雜的重要原因是因為這裡的json的key有重複所以可以這樣做
*/

export default FileNode;