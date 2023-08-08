import Image from 'next/image'
import styles from './page.module.css'
import {Cards} from '@/lib'

export default function Home() {
  const images = [
    {
        src: 'https://via.placeholder.com/150',
        alt: '1',
        size: '150px'
    },
    {
        src: 'https://via.placeholder.com/150',
        alt: '2',
        size: '150px'
    },
      {
          src: 'https://via.placeholder.com/150',
          alt: '2',
          size: '150px'
      },
      {
          src: 'https://via.placeholder.com/150',
          alt: '2',
          size: '150px',
      },
      {
          src: 'https://via.placeholder.com/150',
          alt: '2',
          size: '150px'
      },
    ]
    const content = [
        {
            title: 'Title 1',
            description: 'Description 1'
        },
        {
            title: 'Title 2',
            description: 'Description 2'

        },
        {
            title: 'Title 3',
            description: 'Description 2'

        },
        {
            title: 'Title 4',
            description: 'Description 2'

        },
        {
            title: 'Title 5',
            description: 'Description 2'

        },
]
    const position = ['left', 'left', 'left', 'left', 'left']

  return <Cards amount={5} images={images} content={content} position={position} style={'dark'} rounded={false}/>
}
