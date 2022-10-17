import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {data} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = data
    return (
      <Link to={`/blogs/${id}`} className="nav-link-items">
        <div className="blog-item">
          <img src={imageUrl} alt="xyz" className="blog-item-image" />
          <div className="blog-item-description-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img src={avatarUrl} alt="avatar" className="avatar-image" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

export default BlogItem
