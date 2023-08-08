import React from 'react';
import './card.css';

export const Cards = ({amount, images = [], content, position = [], style = 'default', rounded}) => {
	const cards = [];

	handleErrors(amount, images, content, position);

	for (let i = 0; i < amount; i++) {
		const {src, alt, size} = images[i] || {};
		const {title, description} = content[i];
		const cardClass = `card ${position[i] || ''} ${style} ${rounded ? 'rounded' : ''}`;

		const imageElement = src && (
			<img
				className={`card__image ${position[i] || ''}`}
				src={src}
				alt={alt}
				style={{width: size}}
				key={i}
			/>
		);

		cards.push(
			<div className={cardClass} key={i}>
				{imageElement && (position[i] === 'left' || position[i] === 'top') && imageElement}

				<div className="card-content">
					{title && <h2 className="card__title">{title}</h2>}
					<p key={description}>{description}</p>
				</div>

				{imageElement && position[i] === 'right' || position[i] === 'bottom' && imageElement}
			</div>
		);
	}

	return <section className="cards__section">{cards}</section>;
};


function handleErrors(amount, images, content, position) {
	//do switch statement for each error

	switch (true) {
		case (amount === undefined):
			throw new Error('Amount of cards must be defined');
		case (images === undefined):
			throw new Error('Images must be defined');
		case (amount > images.length):
			throw new Error('Amount of cards cannot exceed amount of images');
		case (amount > content.length):
			throw new Error('Amount of cards cannot exceed amount of content');
		case (amount > position.length):
			throw new Error('Amount of cards cannot exceed amount of positions');
		case (amount < 1):
			throw new Error('Amount of cards cannot be less than 1');
		case (images.length !== content.length):
			throw new Error('Amount of images must match amount of content');
		case (images.length !== position.length):
			throw new Error('Amount of images must match amount of positions');
		case (images.some((image, index) => image === null && position[index] !== null)):
			throw new Error('Image cannot be null if position is not null');
		default:
			return;
	}
}
