import { Component } from 'react';
import { Route } from 'react-router-dom';
import Main from './components/Main';
import Email from './components/Email';

class App extends Component {
	render() {
		return (
			<>
				<Route path="/" exact component={Main} />
				<Route path="/email" component={Email} />
			</>
		);
	}
}

export default App;
