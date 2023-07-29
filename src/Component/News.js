import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsitems from './Newsitems'
import Spinner from './Spinner';
import PropTypes from 'prop-types';


const  News = (props)=>  {
    const[articles,setArticles] = useState([])
    const[loading,setLoading] = useState(true)
    const[page,setPage] = useState(1)
    const[totalResults,setTotalResults] = useState(0)
    
    // document.title = `NewsApp - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)} News `;

    
    
    const updateNews = async () => {
        props.setProgress(20); //progress value for spinner while page is in loading stage
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        
        let data = await fetch(url);
        let passData = await data.json();
        // console.log(passData);
        setArticles(passData.articles);
        setLoading(false);
        setTotalResults(passData.totalResults);
        props.setProgress(100);
    }
    useEffect(()=>{
        updateNews();
        // eslint-disable-next-line
    },[])
        
        
        

    const fetchMoreData = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1)
        let data = await fetch(url);
        let passData = await data.json();
        // console.log(passData);
        setArticles(articles.concat(passData.articles))
        setTotalResults(passData.totalResults)
     }
      
 
        return (
            <>
                <h2 className='text-4xl font-semibold text-center mt-24 my-3'>Today's Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headline</h2>
                {loading && <Spinner />} {/*if this.state.loading is true the display sipnner component*/ }
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    
                    <div className='container mx-10 lg:mx-auto overflow-x-hidden'>

                        <div className='grid grid-cols-1  lg:grid-cols-3  py-12 h-auto lg:mx-auto max-w-[1350px]'>
                            {/*if this.state.loading is not true then display Newsitems component \\ map helps to alter through element inside a article*/}
                            {!(loading) && articles.map((element) => {
                                return <div key={element.url}>
                                    <Newsitems title={element.title ? element.title.slice(0, 44) : " "} description={element.description ? element.description.slice(0, 88) : "Click below to get Description"} imageUrl={element.urlToImage ? element.urlToImage : "https://images.hindustantimes.com/img/2023/02/05/1600x900/china-census_5677ba26-2eea-11eb-b9a2-d7de0b3760e9_1675581187772_1675581187772.jpg"} newsUrl={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
                                </div>

                            })}
                        </div>
                       
                    </div>
                </InfiniteScroll>
            </>
        )
   
}

News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',


}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

}



export default News













