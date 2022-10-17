import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogList extends Component {
  state = {data: [], isLoading: true}

  componentDidMount() {
    this.getBlogListsData()
  }

  getBlogListsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const dataList = await response.json()
    const updatedData = dataList.map(eachItem => ({
      author: eachItem.author,
      avatarUrl: eachItem.avatar_url,
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
    }))
    this.setState({data: updatedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <div className="blog-items-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
        ) : (
          data.map(eachBlog => <BlogItem key={eachBlog.id} data={eachBlog} />)
        )}
      </div>
    )
  }
}

export default BlogList
