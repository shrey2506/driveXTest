import React from 'react'
import './NewsComponent.css'

const NewsItem = ({article}) => {


  return (
    <div className='news-card'>
        <div className='new-card-title-row'>
           { article.urlToImage && <img className='new-card-image' src={article.urlToImage}  />}

           <div className='new-card-column'>
              <div className='news-item-text'> {article.title}</div>
              <div className='news-item-text'> {article.author}</div>
           </div>
        </div>

        <p className='news-card-description' >{article.description}</p>


        <div className='news-card-bottom-row'>
            <a href={article.url} >Link to the Article</a>
            <div>{article.date}</div>
        </div>

    </div>
  )
}

export default NewsItem