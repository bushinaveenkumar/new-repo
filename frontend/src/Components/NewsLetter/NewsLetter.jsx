import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newletter'>
        <h1>Get Exclusive offers on your mail</h1>
        <p>Subscribe to our news letter and stay updated</p>
        <div>
            <input type='email' placeholder='Your email id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter