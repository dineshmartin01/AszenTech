import React from 'react'
import './Cardsebook.css'

function Cardsebook({title,content1,content2,content3,content4,content5,content6,content7,content8,content9,content10,content11,content12}) {
  return (
    <div className='cardsebook'>
        <h1>{title}</h1>
        <div className='cardsbook__1'>
            <div className='cardsebook__box'>{content1}</div>
            <div className='cardsebook__box'>{content2}</div>
            <div className='cardsebook__box'>{content3}</div>
            <div className='cardsebook__box'>{content4}</div>
            <div className='cardsebook__box'>{content5}</div>
            <div className='cardsebook__box'>{content6}</div>
            <div className='cardsebook__box'>{content7}</div>
            <div className='cardsebook__box'>{content8}</div>
            <div className='cardsebook__box'>{content9}</div>
            <div className='cardsebook__box'>{content10}</div>
            <div className='cardsebook__box'>{content11}</div>
            <div className='cardsebook__box'>{content12}</div>
        </div>
    </div>
  )
}

export default Cardsebook