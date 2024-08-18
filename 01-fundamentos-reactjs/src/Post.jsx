function Post(props){
    return (
      <div>
        <h2>{props.author}</h2>
        <p>{props.description}</p>
      </div>      
    )
}

export default Post;