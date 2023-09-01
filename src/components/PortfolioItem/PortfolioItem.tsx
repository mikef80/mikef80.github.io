const PortfolioItem = (item: any) => {
  /* console.log('====================================');
  console.log(item.item);
  console.log('===================================='); */

  const { name, languages_url, html_url, updated_at } = item.item;
  const updatedDate = new Date(updated_at).toLocaleDateString();
  console.log(languages_url);
  

  return (
    <div className="border-[1px] border-black rounded-md p-4 lg:w-1/4">
      <a href="https://github.com/mikef80/lemon-and-jinja" target="_blank" className="flex flex-col text-center">
        <h4 className="text-xl font-semibold">{name}</h4>
        <h6>Last updated: {updatedDate}</h6>
        <p>TypeScript + HTML + JavaScript + CSS</p>
        <p>TypeScript: 75% | HTML: 23% | JavaScript: 1% | CSS: 0%</p>           
      </a>
    </div>
  )
}

export default PortfolioItem;
