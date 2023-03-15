// Represents all the html tags that can be used in the editor

import React from 'react';

class legend {
  tag = 'legend'; // html tag
  startTag = '<legend>';
  endTag = '</legend>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class li {
  tag = 'li'; // html tag
  startTag = '<li>';
  endTag = '</li>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class link {
  tag = 'link'; // html tag
  startTag = '<link>';
  endTag = '</link>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class main {
  tag = 'main'; // html tag
  startTag = '<main>';
  endTag = '</main>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class map {
  tag = 'map'; // html tag
  startTag = '<map>';
  endTag = '</map>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class mark {
  tag = 'mark'; // html tag
  startTag = '<mark>';
  endTag = '</mark>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class menu {
  tag = 'menu'; // html tag
  startTag = '<menu>';
  endTag = '</menu>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class meta {
  tag = 'meta'; // html tag
  startTag = '<meta>';
  endTag = '</meta>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class meter {
  tag = 'meter'; // html tag
  startTag = '<meter>';
  endTag = '</meter>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class nav {
  tag = 'nav'; // html tag
  startTag = '<nav>';
  endTag = '</nav>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class noscript {
  tag = 'noscript'; // html tag
  startTag = '<noscript>';
  endTag = '</noscript>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class ol {
  tag = 'ol'; // html tag
  startTag = '<ol>';
  endTag = '</ol>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class optgroup {
  tag = 'optgroup'; // html tag
  startTag = '<optgroup>';
  endTag = '</optgroup>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class option {
  tag = 'option'; // html tag
  startTag = '<option>';
  endTag = '</option>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class output {
  tag = 'output'; // html tag
  startTag = '<output>';
  endTag = '</output>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class p {
  tag = 'p'; // html tag
  startTag = '<p>';
  endTag = '</p>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class param {
  tag = 'param'; // html tag
  startTag = '<param>';
  endTag = '</param>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class picture {
  tag = 'picture'; // html tag
  startTag = '<picture>';
  endTag = '</picture>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class pre {
  tag = 'pre'; // html tag
  startTag = '<pre>';
  endTag = '</pre>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class progress {
  tag = 'progress'; // html tag
  startTag = '<progress>';
  endTag = '</progress>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class q {
  tag = 'q'; // html tag
  startTag = '<q>';
  endTag = '</q>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class rp {
  tag = 'rp'; // html tag
  startTag = '<rp>';
  endTag = '</rp>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class rt {
  tag = 'rt'; // html tag
  startTag = '<rt>';
  endTag = '</rt>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class ruby {
  tag = 'ruby'; // html tag
  startTag = '<ruby>';
  endTag = '</ruby>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class s {
  tag = 's'; // html tag
  startTag = '<s>';
  endTag = '</s>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class samp {
  tag = 'samp'; // html tag
  startTag = '<samp>';
  endTag = '</samp>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class script {
  tag = 'script'; // html tag
  startTag = '<script>';
  endTag = '</script>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class section {
  tag = 'section'; // html tag
  startTag = '<section>';
  endTag = '</section>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class select {
  tag = 'select'; // html tag
  startTag = '<select>';
  endTag = '</select>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class small {
  tag = 'small'; // html tag
  startTag = '<small>';
  endTag = '</small>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class source {
  tag = 'source'; // html tag
  startTag = '<source>';
  endTag = '</source>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class span {
  tag = 'span'; // html tag
  startTag = '<span>';
  endTag = '</span>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class strong {
  tag = 'strong'; // html tag
  startTag = '<strong>';
  endTag = '</strong>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class style {
  tag = 'style'; // html tag
  startTag = '<style>';
  endTag = '</style>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class sub {
  tag = 'sub'; // html tag
  startTag = '<sub>';
  endTag = '</sub>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class summary {
  tag = 'summary'; // html tag
  startTag = '<summary>';
  endTag = '</summary>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class sup {
  tag = 'sup'; // html tag
  startTag = '<sup>';
  endTag = '</sup>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class svg {
  tag = 'svg'; // html tag
  startTag = '<svg>';
  endTag = '</svg>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class table {
  tag = 'table'; // html tag
  startTag = '<table>';
  endTag = '</table>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class tbody {
  tag = 'tbody'; // html tag
  startTag = '<tbody>';
  endTag = '</tbody>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class td {
  tag = 'td'; // html tag
  startTag = '<td>';
  endTag = '</td>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class template {
  tag = 'template'; // html tag
  startTag = '<template>';
  endTag = '</template>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class textarea {
  tag = 'textarea'; // html tag
  startTag = '<textarea>';
  endTag = '</textarea>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class tfoot {
  tag = 'tfoot'; // html tag
  startTag = '<tfoot>';
  endTag = '</tfoot>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class th {
  tag = 'th'; // html tag
  startTag = '<th>';
  endTag = '</th>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class thead {
  tag = 'thead'; // html tag
  startTag = '<thead>';
  endTag = '</thead>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class time {
  tag = 'time'; // html tag
  startTag = '<time>';
  endTag = '</time>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class title {
  tag = 'title'; // html tag
  startTag = '<title>';
  endTag = '</title>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class tr {
  tag = 'tr'; // html tag
  startTag = '<tr>';
  endTag = '</tr>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class track {
  tag = 'track'; // html tag
  startTag = '<track>';
  endTag = '</track>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class u {
  tag = 'u'; // html tag
  startTag = '<u>';
  endTag = '</u>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class ul {
  tag = 'ul'; // html tag
  startTag = '<ul>';
  endTag = '</ul>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class wbr {
  tag = 'wbr'; // html tag
  startTag = '<wbr>';
  endTag = '</wbr>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}


class a {
  tag = 'a'; // html tag
  startTag = '<a>';
  endTag = '</a>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}



class body {
  tag = 'body'; // html tag
  startTag = '<body>';
  endTag = '</body>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}


class button {
  tag = 'button'; // html tag
  startTag = '<button>';
  endTag = '</button>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class div {
  tag = 'div'; // html tag
  startTag = '<div>';
  endTag = '</div>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class embed {
  tag = 'embed'; // html tag
  startTag = '<embed>';
  endTag = '</embed>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class br {
  tag = 'br'; // html tag
  startTag = '<br>';
  endTag = '</br>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class footer {
  tag = 'footer'; // html tag
  startTag = '<footer>';
  endTag = '</footer>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class form {
  tag = 'form'; // html tag
  startTag = '<form>';
  endTag = '</form>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h1 {
  tag = 'h1'; // html tag
  startTag = '<h1>';
  endTag = '</h1>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h2 {
  tag = 'h2'; // html tag
  startTag = '<h2>';
  endTag = '</h2>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h3 {
  tag = 'h3'; // html tag
  startTag = '<h3>';
  endTag = '</h3>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h4 {
  tag = 'h4'; // html tag
  startTag = '<h4>';
  endTag = '</h4>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h5 {
  tag = 'h5'; // html tag
  startTag = '<h5>';
  endTag = '</h5>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class h6 {
  tag = 'h6'; // html tag
  startTag = '<h6>';
  endTag = '</h6>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class head {
  tag = 'head'; // html tag
  startTag = '<head>';
  endTag = '</head>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class header {
  tag = 'header'; // html tag
  startTag = '<header>';
  endTag = '</header>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class html {
  tag = 'html'; // html tag
  startTag = '<html>';
  endTag = '</html>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

class img {
  tag = 'img'; // html tag
  startTag = '<img>';
  endTag = '</img>';
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  constructor(content: any) {
    this.content = content;
  }
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.lastOne === false) {
      return <CustomTag>{this.content.render()}</CustomTag>;
    } else return;
  }
}

// <input> sdfsdf  <p>sdfsdfsd <><p></input >
class input {
  tag = 'input'; // html tag
  startTag = '<input>';
  endTag = '</input>';
  child: null | any = null; // chaining
  content: any; // body of the current tag 
  lastOne = false; // if this tag is the last one in the row
  
  render() {
    const CustomTag = this.startTag as keyof JSX.IntrinsicElements;
    if (this.child !== null) { // If there is a child
      return <CustomTag>{ this.content}{this.child.render()}</CustomTag>; // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

export const tagMap: {[key: string]: any} = {
  "a": a,
  "body": body,
  "br": br,
  "button": button,
  "div": div,
  "embed": embed,
  "footer": footer,
  "form": form,
  "h1": h1,
  "h2": h2,
  "h3": h3,
  "h4": h4,
  "h5": h5,
  "h6": h6,
  "head": head,
  "header": header,
  "html": html,
  "img": img,
  "input": input,
  "li": li,
  "main": main,
  "map": map,
  "mark": mark,
  "menu": menu,
  "meta": meta,
  "meter": meter,
  "nav": nav,
  "noscript": noscript,
  "ol": ol,
  "optgroup": optgroup,
  "option": option,
  "output": output,
  "p": p,
  "param": param,
  "picture": picture,
  "pre": pre,
  "progress": progress,
  "q": q,
  "rp": rp,
  "rt": rt,
  "ruby": ruby,
  "s": s,
  "samp": samp,
  "script": script,
  "section": section,
  "select": select,
  "small": small,
  "source": source,
  "span": span,
  "strong": strong,
  "style": style,
  "sub": sub,
  "summary": summary,
  "sup": sup,
  'svg': svg,
  "table": table,
  "tbody": tbody,
  "td": td,
  'template': template,
  'textarea': textarea,
  'tfoot': tfoot,
  "th": th,
  "thead": thead,
  "time": time,
  "title": title,
  "tr": tr,
  "track": track,
  "u": u,
  "ul": ul,
  "wbr": wbr,
};
