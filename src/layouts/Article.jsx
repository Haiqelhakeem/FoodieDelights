const Article = () => {
  return (
    <div className="flex flex-wrap w-full justify-center">
      <div className="w-3/4 bg-white rounded-lg flex flex-col items-center">
        <h1 className="text-3xl font-bold text-center text-black m-10">
          Title
        </h1>
        <img
          src="http://source.unsplash.com/1200x600?eat"
          className="w-2/3 rounded-md"
          alt=""
        />
        <div className="flex flex-col text-black m-10">
          <p className="text-black mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            consectetur modi iusto ipsum, et at placeat quo dolorum iste sit,
            similique tempora iure ipsam? Placeat qui rem autem similique
            obcaecati quis accusamus, eius molestias neque sed ut quibusdam,
            laborum ratione.
          </p>
          <p className="text-black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            inventore in ipsum ad! Veritatis ipsa ratione alias deleniti ipsum
            omnis itaque. Delectus ad, quis harum laudantium corporis iste
            labore, repudiandae a rerum explicabo amet omnis possimus ducimus
            accusamus quasi corrupti quod voluptatem dolore sed! Voluptas id
            excepturi, provident harum numquam ut aliquid dolor beatae, odit
            labore ad exercitationem porro cupiditate?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
