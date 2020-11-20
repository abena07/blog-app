import React, {useState} from 'react'

function NewBlog() {
    const [title, setTitle]=useState("")
    const[ author, setAuthor]=useState("")
    const[content, setContent]=useState("")
    const[post, setPost]=useState([])


    const handleTitleInput=(event)=>{
        setTitle(event.target.value)
    }

    const handleAuthorInput=(event)=>{
        setAuthor(event.target.value)
    }

    const handleContentInput=(event)=>{
        setContent(event.target.value)
    }
    const handlePostInput=(event)=>{
        event.preventDefault()
        setPost([
            ...post,
            {
            title : title,
            author: author,
            content: content
            }
        ])
        console.log(post)
        setTitle("")
        setContent("")
        setAuthor("")
    }

    return (
        
        <div>
            <label><h1>New Post</h1></label>
            

            <label><h2>Title </h2></label>
            <input value={title} onChange={handleTitleInput}/>

            <label><h2>Author</h2></label>
            <input value={author} onChange={handleAuthorInput}/>

            <label><h2>Date</h2></label>
            <input />

            <label><h3> Content</h3></label>
            <input value={content} onChange={handleContentInput}/>

            <button onClick={handlePostInput}> Post away!!</button>
            <br/>
            {content} {author} {title}
        </div>
    )
}

export default NewBlog
