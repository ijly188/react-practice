import React, { Component } from 'react';

class LifecycleWrap extends Component {
  /*
    生命週期韓式的先後順序，第一步會先是constructor
    如果有摸過oop的就會知道第一部分會是建構子的部分
    另外constructor可能會輸入一些參數，通常傳進去的參數就是props
    constructor裡面一定要有的東西：
    1.  一定要有super();就是這個class的父類別的建構函式，
    2.  另外會做設定的東西還有this.state = { count: 0, }
        state其實也可以抽出去寫
    3.  this.handleClick = this.handleClick.bind(this);
        lifecycle的函式裡面的this會指到class本身
        在自訂函式裡面的this不一定是指到這個component的class本身
        但是如果用箭頭函式的話基本上就不會有這個問題
    
    在constructor裡面不要的做的
    1.  就是不要在裡面做setState，因為你現在還沒有state所以用this.state就可以了
    2.  不要把props的屬性只給state，如果props更新的時候資料要變動的話
    3.  不要在constructor裡面使用axios/ajax去要資料，可以的話請放在componentDidMount裡面

    在render函式裡面要做的事情
    1.  this.props/this.state/return jsx元素
    2.  react 16之後可以return array,ex:[
          <div></div>,
          <div></div>,
        ]
        return 0
        return string
        return false
        return null
        return React.createPortal();
    3.  不應該使用的是this.setState因為會出發更新state
        然後因為更新了state就會觸發重新render畫面
        然後又會出發上面那個setState就從此陷入循環
    4.  不應該呼叫fetch/axios/ajax函式
    可以做的事情有
    1.  基本的資料轉換
        const { count } = this.props;
        const visualCount = count * 2 + 3;
        類似上面兩個的做法都是允許的

    在componentDidMount要做的事情是
    1.  axios/fetch/ajax
        ...
        state = {
          items: [],
        };
        componentDidMount() {
          fetch('http://...../api/list')
            .then(response => response.json())
            .then(data=>{
              this.setState({
                items: data,
              })
            });
        }
        render() {
          ...
        }
        ...
    2.  變形的狀態會變成
        ...
        state = {
          items: [],
        };
        async componentDidMount() {
          const response = await fetch('http://...../api/list');
          const data = await response.json();
          this.setState({
            items: data,
          });
        }
        render() {
          ...
        }
        ...
    3.  變形的狀態會變成
        ...
        state = {
          items: [],
        };
        componentDidMount() {
          this.fetchList();
        }
        fetchList = async () => {
          const response = await fetch('http://...../api/list');
          const data = await response.json();
          this.setState({
            items: data,
          });
        }
        render() {
          ...
        }
        ...
    4.  還有一種用法是在canvas裡面使用
        class Canvas extends Component {
          ref = createRef();
          componentDidMount() {
            const ctx = this.ref.current.getContext('2d');
            ctx.fillStyle = 'red';
            ctx.fillRect(10, 10, 30,30);
          }
          redner() {
            return <canvas ref={this.ref} />;
          }
        }

        report default Canvas;
    
    5.  舉下面的例子來看什麼時候要用compoentDidMount
        import React, { Component } from 'react';

        class Profile extends Component {
          state = {
            userData: {},
          }
          componentDidMount() {
            // 第一次會呼叫的是這個
            this.fetchUser(this.props.userID);
          }
          componentDidUpdate(prevProps, prevState, snapshot) {
            // 只要state/props有更新就會呼叫這隻
            // 官網要求一定要有condition，才知道什麼狀況下要更新
            // 也可以加上setState，但一定要有condition不然會無窮無盡
            if(prevProps.userID !== this.props.userID){
              this.fetchUser(this.props.userID);
              this.setState({

              })
            }
          }
          getSnapshotBeforeUpdate(prevProps, prevState) {
            如果有呼叫這個的話上面那邊才會有snapshot的函式
          };
          fetchUser = (userID) => {
            fetch(`http://mysite.com/api/user/${userID}`)
            .then((response) => response.json())
            .then((data) => {
              this.setState({
                userData: data,
              });
            })
          }
          render() {
            const { userData } = this.state;
            return (
              <div>
                <img src={userData.picture} alt="" />
                <label>{userData.name}</label
              </div>,
            );
          }
        }

        export default Profile;
    6.  componentWillUnmount當component準備被destroy的時候在使用的
        取消偵聽事件，取消ajax，取消timeout事件
        ex:
        import React, { Component } from 'react';

        class MyComponent extends Component {
          componentDidMount() {
            window.addEventListener('scroll', this.onScroll);
          };
          componentDidUpdate(prevProps, prevState) {
            this.timer = setTimeout(()=> this.update(), 3000);
          };
          componentWillUnmount() {
            window.removeEventListener('scroll', this.onScroll);
            clearTimeout(this.timer);
          };
          onScroll = () => {
            // 
          };
          update = () => {
            // 
          }
          render() {
            return <div>MyComponent</div>;
          }
        }

        export default MyComponent;
  */
  constructor(props) {
    super(props);
  }
  handleClick() {
    console.log(this);
  };
  handleClick = () => {
    // 這樣寫就不用在constructor裡面去bind this
  };
  render() {
    return (
      <div onClick={this.handleClick}>
        LifecycleWrap
      </div>
    );
  }
}

export default LifecycleWrap;