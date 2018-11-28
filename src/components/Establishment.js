import React, { Component } from 'react';

class Establishment extends Component {
    constructor(props){
        super(props);
        this.state={
            like:false,
            dislike:false,
            likeCounter : 0,
            dislikeCounter : 0,
            stari:false
        }
    }
    like=() => {
        this.setState({
            like:!this.state.like,
            dislike: this.state.dislike ? !this.state.dislike : this.state.dislike,
        })
    }
    dislike=() => {
        this.setState({
            dislike:!this.state.dislike,
            like: this.state.like ? !this.state.like : this.state.like,
        })
    }
    starLike=() => {
        this.setState({
            stari: !this.state.stari,
        })
    }

    render() {
        let liked = <i class="fas fa-thumbs-up"></i>
        let disliked = <i class="fas fa-thumbs-down"></i>
        let likeCount = 0
        let dislikeCount = 0
        let star = <i class="far fa-star fa-4x"></i>

        if(this.state.like){
            liked = <i class="fas fa-thumbs-up fa-2x buttonUp"></i>
            likeCount ++
        }
        if(this.state.dislike){
            disliked = <i class="fas fa-thumbs-down fa-2x buttonDown"></i>
            dislikeCount ++
        }
        if(this.state.stari){
            star = <i class="fas fa-star fa-4x fa-star-color"></i>
        }
        return (
            <div className='establishment'>
            <button className="buttonLike starLikei" onClick={this.starLike}>{star}</button>
                <div>
                    <h3>{ this.props.establishment.name }</h3>
                    { this.props.establishment.description }
                </div>
                <div>
                    <button className="buttonLike" onClick={this.like}>{liked}</button>{likeCount}
                    <button className="buttonLike" onClick={this.dislike}>{disliked}</button>{dislikeCount}
                </div>
            </div>
        );
    }
}

export default Establishment;
