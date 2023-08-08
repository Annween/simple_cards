# SimpleCards - React Component Library

[![npm version](https://badge.fury.io/js/simple-cards.svg)](https://badge.fury.io/js/simple-cards)

SimpleCards is a versatile React component library that empowers you to effortlessly create visually appealing cards with flexible image positions. Whether you want your images on the left, right, or any other position, SimpleCards has got you covered. This library streamlines the process of designing and laying out cards, making it a perfect choice for developers looking to enhance user interfaces with stunning card-based content.

## Features

- Create cards with images positioned on the left, right, or anywhere in between.
- Highly customizable content, including titles and descriptions.
- Easy-to-use integration into your React applications.
- Perfect for showcasing content in a visually engaging way.

## Installation

Install SimpleCards into your project using npm:

```bash
npm install simple-cards
```


## Usage

Import SimpleCards into your React project:

```jsx
import { Cards } from 'simple-cards';

const App = () => {
  // Your data
  return (
    <Cards
      amount={integer}
      images={array}
      content={array}
      position={array}
    />
  );
};

export default App;
```

## Props

| Prop       | Type      | Description                                                                  |
|------------|-----------|------------------------------------------------------------------------------| 
| `amount`   | `number`  | The number of cards to be rendered.                                          |
| `images`   | `array`   | Optionnal : An array of image objects (See structure below).                 |
| `content`  | `array`   | An array of content objects (See structure below).                           |
| `position` | `array`   | The position of the image in the card.                                       |
| `style`    | `string`  | The style of the card background. Choose from 'dark', 'luminous', 'default'. |
| `rounded`  | `boolean` | Whether to add rounded corners to the cards. |


## Structure of `content` prop
The content array should contain objects representing the content that you want to display within the cards. Each object should have the following properties:

    title (string): The title of the card content.
    description (string): The description or text content of the card.

Here's an example of how the content array could be structured:

```jsx
[
  {
    title: 'Title 1',
    description: 'Description 1',
  },
  {
    title: 'Title 2',
    description: 'Description 2',
  },
	// Add more content objects as needed
]
```

## Structure of `images` prop
The images array should contain objects representing the images that you want to display within the cards. Each object should have the following properties:

    src (string): The URL or local path of the image.
    alt (string): The alt text of the image.
    size (string): The size of the image. Can be any valid CSS value.

Here's an example of how the images array could be structured:
    
    ```jsx
    [
    {
        src: 'image-url-1',
        alt: 'Image 1',
        size: '50%', // Optional
    },
    {
        src: 'image-url-2',
        alt: 'Image 2',
        size: '150px', // Optional
    },
        // Add more image objects as needed
    ]
    ```
Size is optional. If you don't specify a size, the image will be rendered at its original size.

Note: The number of image objects in the array should match the number of cards you want to render.

## Examples

### Basic Usage

```jsx
<Cards
	amount={2}
	images={[
		{
			src: 'image-url-1',
			alt: 'Image 1',
			size: '50%', // can be any valid CSS value
		},
		{
			src: 'image-url-2',
			alt: 'Image 2',
			size: '150px', // can be any valid CSS value
		},
	]}
	content={[
		{
			title: 'Title 1',
			description: 'Description 1',
		},
		{
			title: 'Title 2',
			description: 'Description 2',
		}
		// ...
	]}
	position={['left', 'right']}
	style="dark"   // Choose from 'dark', 'luminous', 'default'
	rounded={true} // true for rounded corners, false for square
/>
```




