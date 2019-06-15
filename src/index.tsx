

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyComponent from './my-module'


class App extends React.Component {
	render() {
		return <MyComponent />
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
