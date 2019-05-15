
import 'core-js'
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './my-module'
import getMyString from './my-module/jsFileDemo'


class App extends React.Component {
	render() {
		return getMyString("hello");
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
