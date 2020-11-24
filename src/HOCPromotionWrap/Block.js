import React, { Component } from 'react';
import styled from 'styled-components';

const BlockWrap = styled.div`
  width: 170px;
  max-width: 170px;
  margin-right: 20px;
  display: inline-grid;
`;

class Block extends Component {
  render() {
    return (
      <BlockWrap>
        {this.props.children}
      </BlockWrap>
    )
  }
};

export default Block;