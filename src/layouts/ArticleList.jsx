import Button from "../components/Button";

const ArticleList = () => {
  const articles = [
    {
      id: 1,
      title: "Chocolate Cake Recipe",
      img: "https://source.unsplash.com/180x180?chocolate-cake",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Caramel Macchiato Recipe",
      img: "https://source.unsplash.com/180x180?caramel-macchiato",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      title: "Iced Cappucino Recipe",
      img: "https://source.unsplash.com/180x180?cappucino",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      title: "Fried Rice Recipe",
      img: "https://source.unsplash.com/180x180?fried-rice",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <>
      <h1 className="mt-3 text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
        Article List
      </h1>
      {articles.map((article) => (
        <ul key={article.id}>
          <div className="flex justify-center my-5">
            <div className="flex flex-wrap w-4/6 justify-center">
              <div className="w-3/4 bg-white rounded-lg flex flex-row items-center">
                <img src={article.img} alt="" className="rounded-lg" />
                <div className="p-4 flex flex-col">
                  <h1 className="text-2xl font-bold text-black w-full mb-3">
                    {article.title}
                  </h1>
                  <p className="text-black">{article.content}</p>
                </div>
              </div>
            </div>
          </div>
        </ul>
      ))}
      <div className="flex justify-center mb-5">
        <Button value="Go to Explore" link="/explore" />
      </div>
    </>
  );
};

export default ArticleList;
