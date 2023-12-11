const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "Article 1",
      img: "https://source.unsplash.com/100x100?food",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Article 4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-orange-500">
        Article List
      </h1>
      {articles.map((article) => (
        <ul key={article.id}>
          <div className="flex flex-wrap w-full justify-center">
            <div className="w-3/4 bg-white rounded-lg flex flex-col items-center">
              <div className="p-4 flex flex-row">
              <img src={article.img} alt="" className="rounded-lg"/>
              <h1 className="text-2xl font-bold text-black w-full">{article.title}</h1>
              <p>{article.content}</p>
              </div>
            </div>
          </div>
        </ul>
      ))}
    </>
  );
};

export default ArticleList;
