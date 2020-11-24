import React from 'react';
import styled from 'styled-components';

const ToggleBarWrap = styled.div`
  display: block;
  background: #000;
  padding-left: 10px;
`;

const ToggleBarText = styled.span`
  color: #fff;
`;

const Bar = ({...props}) => (
  // 我覺得這個寫法這樣可能不太好，但是他work了
  <ToggleBarWrap onClick={props.onClick}>
    <ToggleBarText>{props.children}</ToggleBarText>
  </ToggleBarWrap>
);

export default Bar;