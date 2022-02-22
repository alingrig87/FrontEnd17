import React from 'react';

class Card extends React.Component {
	render() {
		return (
			<div className="card">
				<h1>{this.props.product.name}</h1>
				<img src={this.props.product.imgURL} />
				<p>{this.props.product.price}</p>
			</div>
		);
	}
}

export default Card;
