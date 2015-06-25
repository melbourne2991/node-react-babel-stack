import '../sass/app.scss';
import 'babel/polyfill';
import React from 'react';

class TestComponent extends React.Component {
	render() {
		return(
			<h1>Hello World!</h1>
		)
	}
}

React.render(<TestComponent/>, document.querySelector('body'));