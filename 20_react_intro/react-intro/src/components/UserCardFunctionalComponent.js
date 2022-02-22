import React from 'react';

function UserCardFunctionalComponent(props) {
	return (
		<div className="card">
			<h1>{props.user.login}</h1>
			<img src={props.user.avatar_url} />
		</div>
	);
}

export default UserCardFunctionalComponent;
