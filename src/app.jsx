import React from 'react';
import ReactDom from 'react-dom';
import './app.css';
import './app.less';
import imgUrl from './timg.jpeg'

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ChildCom: ''
		};
	}
	render() {
		return (
			<div>
				<img src={imgUrl} alt="" />
			</div>
		);
	}
}

ReactDom.render(<App />, document.getElementById('root'));
