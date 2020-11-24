import React, { Component } from 'react';

import files from './files.json';

import './style.css';

import FileNode from './FileNode';

class FileTreeWrap extends Component {
  render () {
    return (
      <div>
        <FileNode
          name={files.name}
          files={files.files}
        />
        <FileNode
          {...files}
        />
        {/*
          這邊上下兩個寫法是一樣的哦
        */}
      </div>
    );
  };
};

export default FileTreeWrap;