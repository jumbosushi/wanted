import React, {Component} from 'react'
import UploadButton from '../components/UploadButton'
import BountyImage from '../components/BountyImage'


export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 className="home-title">Wanted</h1>
        <BountyImage></BountyImage>
        <UploadButton></UploadButton>
      </div>
    )
  }
}



