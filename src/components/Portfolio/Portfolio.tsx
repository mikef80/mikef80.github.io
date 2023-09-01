import { useEffect, useState, Suspense } from 'react';
import PortfolioItem from "../PortfolioItem/PortfolioItem";
import Loading from '../Loading/Loading';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [portfolioItems, setPortfolioItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const items = await fetch(`https://api.github.com/search/repositories?q=user:mikef80+portfolio%20in:topics+sort:updated`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          // catch error
        })
        .then(responseObject => responseObject.items)
      
      setPortfolioItems(items);
      setIsLoading(false);
    };
    fetchItems();
  }, [])

  return (
    <div className='flex justify-around'>
      {!isLoading && portfolioItems.map((item) => <PortfolioItem key={item.id} item={item} />)}
    </div>
  )
}

export default Portfolio;
