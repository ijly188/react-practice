import React, { Component } from 'react';

// import Counter from './Counter/Counter';
// import Counter1 from './Counter/Counter1';
// import Counter2 from './Counter/Counter2';
// import Counter3 from './Counter/Counter3';
// import Counter4 from './Counter/Counter4';

// import Input1 from './Input/Input1';
// import Input2 from './Input/Input2';
// import Input2v2 from './Input/Input2v2';
// import Input3 from './Input/Input3';
// import Parent1 from './ParentAndChild/Parent1';

// import Parent2 from './ParentAndChild/Parent2';

// import Toggle from './StyleEffect/Toggle';

// import Progress1 from './Progress/Progress1';
// import Progress2 from './Progress/Progress2';
// import Progress3 from './Progress/Progress3';

// import Card from './Card/Card';
// import Lesson from './Card/lesson-react.json';

// import ButtonWrap from './MyButton/ButtonWrap';

// import HOCPromotionWrap from './HOCPromotionWrap/HOCWrap';
// import HOCPromotionWrapBasic from './HOCPromotionWrap_Basic/HOCWrap';
// import HOCNameAndTodoListWrap from './HOCNameAndTodoListWrap/HOCNameAndTodoListWrap';
// import HOCNameAndTodoListWrapBasic from './HOCNameAndTodoListWrap_Basic/HOCNameAndTodoListWrap';

// import ArrayRenderWrap from './ArrayRenderWrap/ArrayRenderWrap';
// import ArrayRenderWrap_Basic from './ArrayRenderWrap_Basic/ArrayRenderWrap';
// import ObjectRenderWrap from './ObjectRenderWrap/ObjectRenderWrap';

// import KeyProblemWrap from './KeyProblemWrap/KeyProblemWrap';
// import KeyProblemWrap_Basic from './KeyProblemWrap_Basic/KeyProblemWrap';

// import FileTreeWrap from './FileTreeWrap/FileTreeWrap';
// import FormWrap from './FormWrap/FormWrap';

// import SalaryWrap from './SalaryWrap/SalaryWrap';

// import SingleChatRoomWrap from './SingleChatRoomWrap/SingleChatRoomWrap';
// import LifecycleWrap from './LifecycleWrap/LifecycleWrap';

// import EasywayUseReduxWrap from './EasywayUseReduxWrap/EasywayUseReduxWrap';

// import UnlimitedCourseWrap from './UnlimitedCourseWrap/UnlimitedCourseWrap';

// import LifecycleUnusualWrap from './LifecycleUnusualWrap/LifecycleUnusualWrap';

// import GetDerivedStateFromErrorWrap from './GetDerivedStateFromErrorWrap/GetDerivedStateFromErrorWrap';

// import ProtalWrap from './ProtalWrap/ProtalWrap';

// import CartAndContextWrapBasic from './CartAndContextWrapBasic/CartAndContextWrap';
// import CartAndContextWrap from './CartAndContextWrap/CartAndContextWrap';
// import CartAndContextWrapBetter from './CartAndContextWrapBetter/CartAndContextWrap';

// import FormFilterWrap from './FormFilterWrap/FormFilterWrap';
// import FormFilterFromBackend from './FormFilterFromBackend/FormFilterWrap';

// import GameWrap from './GameWrap/GameWrap';
// import ContextModalWrap from './ContextModalWrap/ContextModalWrap';

// import HooksTodoWrap from './HooksTodoWrap/HooksTodoWrap';
// import CookiesClickWrap from './CookiesClickWrap/CookiesClickWrap';

class Wrap extends Component {
  render() {
    return (
      <div>
        {/* 這裡主要都是在demo使用state/prop的預設值設定方法，也有包含型別設定 */}
        {/* <Counter/> */}
        {/* <Counter1 /> */}
        {/* <Counter2 initCount={10}/> */}
        {/* <Counter2/> */}
        {/* <Counter3/> */}
        {/* <Counter2 initCount="20"/> */}
        {/* <Counter3 initCount="30"/> */}
        {/* 這裡主要都是在demo使用state/prop的預設值設定方法，也有包含型別設定 */}
        {/* state的特殊設定方法 */}
        {/* <Counter4/> */}
        {/* state的特殊設定方法 */}
        {/* input的方法介紹 */}
        {/* <Input1 /> */}
        {/* <Input2 /> */}
        {/* <Input2v2 /> */}
        {/* <Input3 /> */}
        {/* input的方法介紹 */}
        {/* 父子組件溝通 */}
        {/* <Parent1 /> */}
        {/* <Parent2 /> */}
        {/* 父子組件溝通 */}
        {/* 圖片toggle特效 */}
        {/* <Toggle /> */}
        {/* 圖片toggle特效 */}
        {/* progress效果 */}
        {/* <Progress1 />
        <Progress2 />
        <Progress3 /> */}
        {/* progress效果 */}
        {/* 資訊卡 */}
        {/* <Card data={Lesson} /> */}
        {/* 資訊卡 */}
        {/* react css */}
        {/* <ButtonWrap /> */}
        {/* react css */}
        {/* HOCWrap */}
        {/* <HOCPromotionWrap /> */}
        {/* <HOCPromotionWrapBasic /> */}
        {/* HOCWrapBasic裡面會放沒有用High Order Component整理過之前的code */}
        {/* <HOCNameAndTodoListWrap /> */}
        {/* 
          HOCNameAndTodoListWrap裡面的情境是不同的邏輯
          但是套用在相同的組件上面也可以使用HOC
          我覺得這個東西應該會要放在最後這樣成長曲線比較沒有那麼奇怪
        */}
        {/* <HOCNameAndTodoListWrapBasic /> */}
        {/* HOCWrap */}
        {/* ArrayRender範例 */}
        {/* <ArrayRenderWrap /> */}
        {/* <ArrayRenderWrap_Basic /> */}
        {/* ArrayRender範例 */}
        {/* ObjectRender範例 */}
        {/* <ObjectRenderWrap /> */}
        {/* ObjectRender範例 */}
        {/* keyProblemWrap */}
        {/* <KeyProblemWrap /> */}
        {/* <KeyProblemWrap_Basic /> */}
        {/*
          不給key的話會跳warning:child in an array or iterator should have a unique key
          白話文就是你為什麼不給key啦，大家都知道要加，但是為什麼要加
          重點是要讓render出來的每個物件，都認得自己和這個資料的連結
        */}
        {/* keyProblemWrap */}
        {/* FileTreeWrap */}
        {/* <FileTreeWrap /> */}
        {/* FileTreeWrap */}
        {/* Form 相關的都在這 */}
        {/* *************************** */}
        {/* <FormWrap /> */}    {/* 這裡有作業 */}
        {/* *************************** */}
        {/* Form 相關的都在這 */}
        {/* 薪水計算器 */}
        {/* <SalaryWrap /> */}
        {/* 薪水計算器 */}
        {/* 一個人的聊天室 */}
        {/* <SingleChatRoomWrap /> */}
        {/* 一個人的聊天室 */}
        {/* 生命週期函式 */}
        {/* <LifecycleWrap /> */}
        {/* 生命週期函式 */}
        {/* 簡易使用redux */}
        {/* <EasywayUseReduxWrap /> */}
        {/* 簡易使用redux */}
        {/* 無限捲軸課程 */}
        {/* <UnlimitedCourseWrap /> */}
        {/* 無限捲軸課程 */}
        {/* 不常見的生命週期函式 */}
        {/* <LifecycleUnusualWrap /> */}
        {/* 不常見的生命週期函式 */}
        {/* 錯誤處理 */}
        {/* <GetDerivedStateFromErrorWrap /> */}
        {/* 錯誤處理 */}
        {/* protal模擬試驗 */}
        {/* <div id="modal">modal</div> */}
        {/* <ProtalWrap /> */}
        {/* protal模擬試驗 */}
        {/* CartAndCOntext */}
        {/* <CartAndContextWrapBasic /> */}
        {/* <CartAndContextWrap /> */}
        {/* <CartAndContextWrapBetter /> */}
        {/* CartAndContext */}
        {/* 列表過濾 */}
        {/* <FormFilterWrap /> */}
        {/* <FormFilterFromBackend /> */}
        {/* 列表過濾 */}
        {/* 井字遊戲 */}
        {/* <GameWrap /> */}
        {/* 井字遊戲 */}
        {/* context modal */}
        {/* <ContextModalWrap /> */}
        {/* context modal */}
        {/* Hooks Todo */}
        {/* <HooksTodoWrap /> */}
        {/* Hooks Todo */}
        {/* cookie click */}
        {/* <CookiesClickWrap /> */}
        {/* cookie click */}
      </div>
    );
  }
}

export default Wrap;