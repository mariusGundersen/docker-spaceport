import React from 'react';

export default props => <i className={[...classFrom(props)].join(' ')} data-bind={props['data-bind']}></i>;

function *classFrom({
  of,
  rotate,
  fixedWidth = true,
  colored = false
}){
  yield 'fa';
  yield `fa-${of}`;
  if(fixedWidth)  yield 'fa-fw';
  if(rotate) yield `fa-rotate-${rotate}`;
  if(colored) yield 'container-state';
}
