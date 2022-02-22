import './App.css';
import React from 'react';
import Card from './components/Card';
import UserCard from './components/UserCard';
import UserCardFunctionalComponent from './components/UserCardFunctionalComponent';

class App extends React.Component {
	constructor() {
		super();
		this.state = { users: [] };
		console.log('constructor');
	}

	async componentDidMount() {
		const response = await fetch('https://api.github.com/users');
		const gitHubUsers = await response.json();
		console.log(gitHubUsers);
		this.setState({ users: [...gitHubUsers] });
		console.log('state', this.state.users);
	}
	render() {
		console.log('render');
		const users = [
			{
				login: 'mojombo',
				id: 1,
				avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
			},
			{
				login: 'defunkt',
				id: 2,
				avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
			},
			{
				login: 'pjhyett',
				id: 3,
				node_id: 'MDQ6VXNlcjM=',
				avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
			},
			{
				login: 'wycats',
				id: 4,
				node_id: 'MDQ6VXNlcjM=',
				avatar_url: 'https://avatars.githubusercontent.com/u/4?v=4',
			},
		];
		const product1 = {
			name: 'Iphone XS',
			price: 2000,
			imgURL:
				'https://s13emagst.akamaized.net/products/17043/17042936/images/res_b7d72e6da14bd46eaa5cbcd585d08ec2.jpg',
		};
		return (
			<div className="App">
				<h2>Welcome to React!!</h2>
				<div className="card-container">
					{/* <Card product={product1} /> */}
					{users.map((user) => (
						<UserCard user={user} />
					))}

					{this.state.users.map((user) => (
						<UserCardFunctionalComponent user={user} />
					))}
					{/* <UserCard user={users[0]} />
				<UserCard user={users[1]} />
				<UserCard user={users[2]} /> */}
				</div>
			</div>
		);
	}
}

export default App;
