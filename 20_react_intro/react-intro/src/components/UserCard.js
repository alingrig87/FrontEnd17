import React from 'react';

class UserCard extends React.Component {
	render() {
		return (
			<div className="card">
				<h1>{this.props.user.login}</h1>
				<img src={this.props.user.avatar_url} />
			</div>
		);
	}
}

export default UserCard;
