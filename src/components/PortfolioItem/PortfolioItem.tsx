const PortfolioItem = (item) => {
  console.log('====================================');
  console.log(item.item.name);
  console.log('====================================');

  return (
    <div className="border-[1px] border-black rounded-md p-4 lg:w-1/4">
      <a href="https://github.com/mikef80/lemon-and-jinja" target="_blank" className="flex flex-col text-center">
        <h4 className="text-xl font-semibold">{name}</h4>
        <h6>Last updated: 28 June 2023</h6>
        <p>TypeScript + HTML + JavaScript + CSS</p>
        <p>TypeScript: 75% | HTML: 23% | JavaScript: 1% | CSS: 0%</p>           
      </a>
    </div>
  )
}

export default PortfolioItem;
