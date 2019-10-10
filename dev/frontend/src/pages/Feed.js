import React, { Component } from 'react'
import api from '../services/api'
import io from 'socket.io-client'


import './Feed.css'

import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'



class Feed extends Component {
    state = {
        feed: [],
    }

    comment = {
        author: '',
        message: '',
    }
    
    

    async componentDidMount() {

        this.registerToSocket();

        const response = await api.get('posts')

        this.setState({ feed: response.data })
    }

    registerToSocket = () => {
        const socket = io('http://10.0.0.135:3333')

        socket.on('post', newPost => {
            this.setState({ feed: [newPost, ...this.state.feed]})
        })

        socket.on('like', likedPost => {
            this.setState({
                feed: this.state.feed.map(post =>
                    post._id === likedPost._id ? likedPost : post
                )
            })
        })

        socket.on('comment', commentedPost => {
            this.setState({
                feed: this.state.feed.map(post => 
                    post._id === commentedPost._id ? commentedPost : post
                )
            })
        })

    }

    // handleSubmit = async e => {
    //     e.preventDefault()

    //     const commentData = new FormData()

    //     data.append('author', 'dionei')
    //     data.append('message', this.state.place)

    //     await api.post(`posts/${id}/`, data)

    //     this.props.history.push('/')
    // }

    handleLike = id => {
        api.post(`/posts/${id}/like`)
    }

    handleSubmitComment = id => {
        
        const commentData = new FormData()

        commentData.append('author', 'dionei')
        commentData.append('message', this.comment.message)

        //console.log(this.comment.message)    

        api.post(`/posts/${id}/comment`, commentData)

    }


    handleCommentChange = e => {
        alert(this.comment.message)
        this.comment.message = e.target.value
        e.target.value = 'dione'
        alert(this.comment.message)
    }
    


    render(){
        

        return (
            <section id="post-list">
                
                { this.state.feed.map(post => (
                    <article key={post._id}>
                        <header>
                            <div className="user-info">
                                <span>{post.author}</span>
                                <span className="place">{post.place}</span>
                            </div>
                            <img src={more} alt="Mais" />

                        </header>

                        <img src={`http://10.0.0.135:3333/files/${post.image}`} alt=""/>

                        <footer>
                            <div className="actions">
                                <button type="button" onClick={ () => this.handleLike(post._id) }>
                                    <img src={like} alt=""/>
                                </button>
                                <img src={comment} alt=""/>
                                <img src={send} alt=""/>
                            </div>
                            <strong>{post.likes} curtidas</strong>
                            <p>
                                {post.description}
                                <span>{post.hashtags}</span>
                            </p>
                            


                            <div className="comments">
                                {post.comments.map(comment => (
                                    <div className="comment-info" key={comment._id}>
                                        <span className="user-info">{comment.author}</span>
                                        <span>{comment.message}</span> 
                                    </div>
                                ))}
                            </div>



                            <form id="new-comment" onSubmit={this.handleSubmitComment}>
                                <input
                                    type="text"
                                    name="comment"
                                    placeholder="Comentario"
                                    onChange={this.handleCommentChange}
                                    value={this.comment.message}
                                    //value='dionei'
                                />

                                <button type="button" onClick={ () => this.handleSubmitComment(post._id) }>
                                    Publicar
                                </button>
                            
                            </form>

                        </footer>


                    </article>

                ))}


            </section>
    
        )
    }
}

export default Feed