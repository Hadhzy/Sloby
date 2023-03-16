// Represents all the html tags that can be used in the editor

import React from 'react';

class legend {
  tag = 'legend'; // html tag
  startTag = '<legend>';
  endTag = '</legend>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class li {
  tag = 'li'; // html tag
  startTag = '<li>';
  endTag = '</li>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class link {
  tag = 'link'; // html tag
  startTag = '<link>';
  endTag = '</link>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class main {
  tag = 'main'; // html tag
  startTag = '<main>';
  endTag = '</main>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class map {
  tag = 'map'; // html tag
  startTag = '<map>';
  endTag = '</map>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class mark {
  tag = 'mark'; // html tag
  startTag = '<mark>';
  endTag = '</mark>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class menu {
  tag = 'menu'; // html tag
  startTag = '<menu>';
  endTag = '</menu>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class meta {
  tag = 'meta'; // html tag
  startTag = '<meta>';
  endTag = '</meta>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class meter {
  tag = 'meter'; // html tag
  startTag = '<meter>';
  endTag = '</meter>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class nav {
  tag = 'nav'; // html tag
  startTag = '<nav>';
  endTag = '</nav>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class noscript {
  tag = 'noscript'; // html tag
  startTag = '<noscript>';
  endTag = '</noscript>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class ol {
  tag = 'ol'; // html tag
  startTag = '<ol>';
  endTag = '</ol>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class optgroup {
  tag = 'optgroup'; // html tag
  startTag = '<optgroup>';
  endTag = '</optgroup>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class option {
  tag = 'option'; // html tag
  startTag = '<option>';
  endTag = '</option>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class output {
  tag = 'output'; // html tag
  startTag = '<output>';
  endTag = '</output>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class p {
  tag = 'p'; // html tag
  startTag = '<p>';
  endTag = '</p>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class param {
  tag = 'param'; // html tag
  startTag = '<param>';
  endTag = '</param>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class picture {
  tag = 'picture'; // html tag
  startTag = '<picture>';
  endTag = '</picture>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class pre {
  tag = 'pre'; // html tag
  startTag = '<pre>';
  endTag = '</pre>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class progress {
  tag = 'progress'; // html tag
  startTag = '<progress>';
  endTag = '</progress>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class q {
  tag = 'q'; // html tag
  startTag = '<q>';
  endTag = '</q>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class rp {
  tag = 'rp'; // html tag
  startTag = '<rp>';
  endTag = '</rp>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class rt {
  tag = 'rt'; // html tag
  startTag = '<rt>';
  endTag = '</rt>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class ruby {
  tag = 'ruby'; // html tag
  startTag = '<ruby>';
  endTag = '</ruby>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class s {
  tag = 's'; // html tag
  startTag = '<s>';
  endTag = '</s>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class samp {
  tag = 'samp'; // html tag
  startTag = '<samp>';
  endTag = '</samp>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class script {
  tag = 'script'; // html tag
  startTag = '<script>';
  endTag = '</script>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class section {
  tag = 'section'; // html tag
  startTag = '<section>';
  endTag = '</section>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class select {
  tag = 'select'; // html tag
  startTag = '<select>';
  endTag = '</select>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class small {
  tag = 'small'; // html tag
  startTag = '<small>';
  endTag = '</small>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class source {
  tag = 'source'; // html tag
  startTag = '<source>';
  endTag = '</source>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class span {
  tag = 'span'; // html tag
  startTag = '<span>';
  endTag = '</span>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class strong {
  tag = 'strong'; // html tag
  startTag = '<strong>';
  endTag = '</strong>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class style {
  tag = 'style'; // html tag
  startTag = '<style>';
  endTag = '</style>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class sub {
  tag = 'sub'; // html tag
  startTag = '<sub>';
  endTag = '</sub>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class summary {
  tag = 'summary'; // html tag
  startTag = '<summary>';
  endTag = '</summary>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class sup {
  tag = 'sup'; // html tag
  startTag = '<sup>';
  endTag = '</sup>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class svg {
  tag = 'svg'; // html tag
  startTag = '<svg>';
  endTag = '</svg>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class table {
  tag = 'table'; // html tag
  startTag = '<table>';
  endTag = '</table>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class tbody {
  tag = 'tbody'; // html tag
  startTag = '<tbody>';
  endTag = '</tbody>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class td {
  tag = 'td'; // html tag
  startTag = '<td>';
  endTag = '</td>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class template {
  tag = 'template'; // html tag
  startTag = '<template>';
  endTag = '</template>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class textarea {
  tag = 'textarea'; // html tag
  startTag = '<textarea>';
  endTag = '</textarea>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class tfoot {
  tag = 'tfoot'; // html tag
  startTag = '<tfoot>';
  endTag = '</tfoot>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class th {
  tag = 'th'; // html tag
  startTag = '<th>';
  endTag = '</th>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class thead {
  tag = 'thead'; // html tag
  startTag = '<thead>';
  endTag = '</thead>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class time {
  tag = 'time'; // html tag
  startTag = '<time>';
  endTag = '</time>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class title {
  tag = 'title'; // html tag
  startTag = '<title>';
  endTag = '</title>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class tr {
  tag = 'tr'; // html tag
  startTag = '<tr>';
  endTag = '</tr>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class track {
  tag = 'track'; // html tag
  startTag = '<track>';
  endTag = '</track>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class u {
  tag = 'u'; // html tag
  startTag = '<u>';
  endTag = '</u>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class ul {
  tag = 'ul'; // html tag
  startTag = '<ul>';
  endTag = '</ul>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class wbr {
  tag = 'wbr'; // html tag
  startTag = '<wbr>';
  endTag = '</wbr>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class a {
  tag = 'a'; // html tag
  startTag = '<a>';
  endTag = '</a>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class body {
  tag = 'body'; // html tag
  startTag = '<body>';
  endTag = '</body>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class button {
  tag = 'button'; // html tag
  startTag = '<button>';
  endTag = '</button>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class div {
  tag = 'div'; // html tag
  startTag = '<div>';
  endTag = '</div>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class embed {
  tag = 'embed'; // html tag
  startTag = '<embed>';
  endTag = '</embed>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class br {
  tag = 'br'; // html tag
  startTag = '<br>';
  endTag = '</br>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class footer {
  tag = 'footer'; // html tag
  startTag = '<footer>';
  endTag = '</footer>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class form {
  tag = 'form'; // html tag
  startTag = '<form>';
  endTag = '</form>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h1 {
  tag = 'h1'; // html tag
  startTag = '<h1>';
  endTag = '</h1>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h2 {
  tag = 'h2'; // html tag
  startTag = '<h2>';
  endTag = '</h2>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h3 {
  tag = 'h3'; // html tag
  startTag = '<h3>';
  endTag = '</h3>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h4 {
  tag = 'h4'; // html tag
  startTag = '<h4>';
  endTag = '</h4>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h5 {
  tag = 'h5'; // html tag
  startTag = '<h5>';
  endTag = '</h5>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class h6 {
  tag = 'h6'; // html tag
  startTag = '<h6>';
  endTag = '</h6>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class head {
  tag = 'head'; // html tag
  startTag = '<head>';
  endTag = '</head>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class header {
  tag = 'header'; // html tag
  startTag = '<header>';
  endTag = '</header>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class html {
  tag = 'html'; // html tag
  startTag = '<html>';
  endTag = '</html>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
}

class img {
  tag = 'img'; // html tag
  startTag = '<img>';
  endTag = '</img>';
  child: null | any = null; // chaining
  content: any; // chaining
  lastOne = false; // if this tag is the last one in the row
  render() {
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
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
    const CustomTag = this.tag as keyof JSX.IntrinsicElements;
    if (this.child !== null) {
      // If there is a child
      return (
        <CustomTag>
          {this.content}
          {this.child.render()}
        </CustomTag>
      ); // Render the content and also the child
    } else return <CustomTag>{this.content}</CustomTag>; // if there is no child then just render its own content
  }
  
}

export const tagMap: { [key: string]: any } = {
  a: a,
  body: body,
  br: br,
  button: button,
  div: div,
  embed: embed,
  footer: footer,
  form: form,
  h1: h1,
  h2: h2,
  h3: h3,
  h4: h4,
  h5: h5,
  h6: h6,
  head: head,
  header: header,
  html: html,
  img: img,
  input: input,
  li: li,
  main: main,
  map: map,
  mark: mark,
  menu: menu,
  meta: meta,
  meter: meter,
  nav: nav,
  noscript: noscript,
  ol: ol,
  optgroup: optgroup,
  option: option,
  output: output,
  p: p,
  param: param,
  picture: picture,
  pre: pre,
  progress: progress,
  q: q,
  rp: rp,
  rt: rt,
  ruby: ruby,
  s: s,
  samp: samp,
  script: script,
  section: section,
  select: select,
  small: small,
  source: source,
  span: span,
  strong: strong,
  style: style,
  sub: sub,
  summary: summary,
  sup: sup,
  svg: svg,
  table: table,
  tbody: tbody,
  td: td,
  template: template,
  textarea: textarea,
  tfoot: tfoot,
  th: th,
  thead: thead,
  time: time,
  title: title,
  tr: tr,
  track: track,
  u: u,
  ul: ul,
  wbr: wbr,
};
