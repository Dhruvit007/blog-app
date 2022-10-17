import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {data: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      author: data.author,
      avatarUrl: data.avatar_url,
      content: data.content,
      id: data.id,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
    }
    this.setState({data: updatedData, isLoading: false})
  }

  renderData = () => {
    const {data} = this.state
    const {title, imageUrl, content, avatarUrl, author} = data
    return (
      <>
        <h1 className="blog-heading">{title}</h1>
        <div className="blog-avatar-container">
          <img src={avatarUrl} className="blog-avatar" alt={author} />
          <p className="blog-author-name">{author}</p>
        </div>
        <img src={imageUrl} className="blog-image" alt={title} />
        <p className="blog-post-text">{content}</p>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="detailed-blog-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          this.renderData()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
