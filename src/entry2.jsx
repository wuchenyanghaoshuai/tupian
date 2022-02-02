import React from 'react';
import ReactDom from 'react-dom';
// import Child from './Child.jsx';
import './app.less';
import './app.css';

const App = () => {
  let Page1 = null;
  // import('./Child.jsx').then((comp) => {
  //   Page1 = comp;
  // });
  return (
    <div>
      {[1, 2, 3, 4].map(() => {
        return <Child />;
      })}
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
