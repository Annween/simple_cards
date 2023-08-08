import React from 'react';
import './card.css';
export const Cards = ({ amount, images = [], content,  position = [], style = 'default', rounded }) => {
	const cards = [];

	if (amount > images.length) throw new Error('Amount of cards cannot exceed amount of images');
	if (amount > content.length) throw new Error('Amount of cards cannot exceed amount of content');
	if (amount > position.length) throw new Error('Amount of cards cannot exceed amount of positions');
	if (amount < 1) throw new Error('Amount of cards cannot be less than 1');
	if(images.length !== content.length) throw new Error('Amount of images must match amount of content');
	if(images.length !== position.length) throw new Error('Amount of images must match amount of positions');


	for (let i = 0; i < amount; i++) {
		const { src, alt, size } = images[i] || {};
		const { title, description } = content[i];
		const cardClass = `card ${position[i] || ''} ${style} ${rounded ? 'rounded' : ''}`;

		const imageElement = src &&  (
			<img
				className={`card__image ${position[i] || ''}`}
				src={src}
				alt={alt}
				style={{ width: size }}
				key={i}
			/>
		);

		cards.push(
			<div className={cardClass} key={i}>
				{ imageElement && (position[i] === 'left' || position[i] === 'top') && imageElement}

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
