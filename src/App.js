import { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import Email from './components/Email';
import Contacts from './components/Contacts';
import Calendar from './components/Calendar';
import Deltas from './components/Deltas';
import Schedule from './components/Schedule';
import Event from './components/Event';
import Account from './components/Account';
import AccountManagement from './components/AccountManagement';
import Datacenter from './components/Datacenter';

class App extends Component {
	render() {
		return (
			<>
				<Route path="/" exact component={Home} />
				<Route path="/email" component={Email} />
				<Route path="/contacts" component={Contacts} />
				<Route path="/calendars" component={Calendar} />
				<Route path="/deltas" component={Deltas} />
				<Route path="/events" component={Event} />
				<Route path="/account" component={Account} />
				<Route path="/account-management" component={AccountManagement} />
				<Route path="/schedule-editor" component={Schedule} />
				<Route path="/data-center" component={Datacenter} />
			</>
		);
	}
}

export default App;
