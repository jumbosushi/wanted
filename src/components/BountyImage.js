import React, { Component } from 'react'
import style from './BountyImage.css'

export default class BountyImage extends Component {
  render() {
    return(
      <div>
        <img className={style.img}
             src='http://i.imgur.com/ic09Ifv.png'></img>
      </div>
    )
  }
}
