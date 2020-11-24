import React, { Component } from 'react';

class FormFileInput extends Component {
  state = {
    file: null,
    img: '',
  };
  onChangeSelectImg = (e) => {
    const file = e.target.files.item(0);
    // 會是一個file物件
    const filereader = new FileReader();
    filereader.addEventListener('load', this.fileLoad);
    filereader.readAsDataURL(file);
    this.setState({
      file,
    });
  };
  fileLoad = (e) => {
    this.setState({
      img: e.target.result,
    });
  };
  submitFile = (e) => {
    // json base64
    // axios.post('/img', {img: this.state.img});
    // 可能實際上的狀況會是長這樣

    // multipart
    // const form = new FormData();
    // form.append(this.state.file);
    // axios.post('/img', {form}});
    // https://medium.com/@tiahi5914/%E5%89%8D%E7%AB%AF%E7%AD%86%E8%A8%98-%E7%94%A8-axios-%E4%B8%B2%E6%8E%A5-imgur-api%E4%B8%8A%E5%82%B3%E5%9C%96%E7%89%87-d826530adc7a
    // https://ithelp.ithome.com.tw/questions/10195628
  };
  render() {
    return (
      <div>
        <input
          type="file"
          onChange={this.onChangeSelectImg}/>
        <img src={this.state.img} width="100%" alt="" srcSet=""/>
        <button onClick={this.submitFile}>Submit</button>
        {/*
          1. 當input type是file的時候，沒辦法用value去指定值
          2, 當我們只要處理一個檔案的時候我們可以在e.target.files.item(0)裡面找到上傳的檔案
          3. 在瀏覽器裡面要看檔案的話都要使用一個FileReader物件
          4. 在選完要上傳的圖片之後就會透過FileReader物件裡面的load事件觸發fileLoad事件
          5. fileLoad事件就是把這張圖片跑完之後的結果綁上state.img裡面
          6. 前面在使用e.target.files去讀檔案的時候就會把它轉成base64的編碼了
        */}
      </div>
    );
  }
}

export default FormFileInput;