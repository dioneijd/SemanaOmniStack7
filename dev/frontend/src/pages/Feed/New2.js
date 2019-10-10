import React, { useState } from 'react'
import api from '../../services/api'

import './New2.css'

export default function New() {
    const [feed, setFeed] = useState({
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: '',
    })


    async function handleSubmit(e) {
        e.preventDefault()

        const data = new FormData()

        data.append('author', feed.author)
        data.append('place', feed.place)
        data.append('description', feed.description)
        data.append('image', feed.image)
        data.append('hashtags', feed.hashtags)

        await api.post('posts', data)

        this.props.history.push('/')
    }


    function handleImageChange(e) {
        //setState( { image: e.target.files[0] } )
        setFeed({
            ...feed,
            image: e.target.files[0]
        })
        console.log(feed)
    }

    function handleChange(e) {
        setFeed({
            ...feed,
            [e.target.name]: e.target.value
        })
        console.log(feed)
    }




    return (
        <form id="new-post" onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange}/>
            <input
                type="text"
                name="author"
                placeholder="Autor do post"
                onChange={handleChange}
                value={feed.author}
            />
            <input
                type="text"
                name="place"
                placeholder="Local do post"
                onChange={handleChange}
                value={feed.place}
            />
            <input
                type="text"
                name="description"
                placeholder="Descrição do post"
                onChange={handleChange}
                value={feed.description}
            />
            <input
                type="text"
                name="hashtags"
                placeholder="Hashtags do post"
                onChange={handleChange}
                value={feed.hashtags}
            />
            <button type="submit">Postar</button>
        </form>

    )

}