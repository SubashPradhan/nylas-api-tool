import React, { Component } from 'react';
import View from './view';
import { connect } from 'react-redux';
import { handleMenuClick } from '../../actions/handleMenuClick';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.handleMenu = this.handleMenu.bind(this);
	}

	handleMenu(e) {
		e.stopPropagation();
		this.props.handleMenuClick();
	}

	render() {
		return <View showMenu={this.props.showMenu} handleMenu={this.handleMenu} />;
	}
}

const mapStateToProps = state => {
	return {
		showMenu: state.showMenu,
	};
};

export default connect(mapStateToProps, { handleMenuClick })(Navbar);
