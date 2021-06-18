import { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Email from './components/Email';
import Contacts from './components/Contacts';
import Calendar from './components/Calendar';
import Deltas from './components/Deltas';

class App extends Component {
	render() {
		return (
			<>
				<Route path="/" exact component={Home} />
				<Route path="/email" component={Email} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/calendars" component={Calendar} />
				<Route path="/deltas" component={Deltas} />
			</>
		);
	}
}

export default App;
