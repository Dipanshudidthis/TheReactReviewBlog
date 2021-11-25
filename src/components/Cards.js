import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import onepiece from '../images/op.png';
import aot from '../images/aot.jpg';
import vinland from '../images/vinland.jpg';
import naruto from '../images/naruto.jpg';
import fmab from '../images/fmab.jpg';
import haikyu from '../images/haikyu.png';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these SERIES!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={onepiece}
              text='The legendary adventure of a boy who will become the king pirates.'
              label='Adventure/Action'
              path='/onepiece'
            />
            <CardItem
              src={aot}
              text='The story of a post-apocalyptic world in which humans lives inside walls.'
              label='Mystery/Action'
              path='/aot'
            />
            <CardItem
              src={haikyu}
              text='The hardwork and emotions of volleyball is explained beautifully in haikyu.'
              label='Sports'
              path='/haikyu'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={vinland}
              text="A story of a viking kid who wants to avenge his father's death."
              label='Thriller/Action'
              path='/vinland'
            />
            <CardItem
              src={naruto}
              text='A story of a boy who is possessed by a nine-tails fox and still wants to become the hokage. '
              label='Action'
              path='/naruto'
            />
            <CardItem
              src={fmab}
              text='The story of two brothers who lost everything in order to revive their dead mother.'
              label='Mystery/Action'
              path='/fmab'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;