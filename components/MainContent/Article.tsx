import { article } from "@/types/api";

interface ArticleProps {
  article: article;
}

const Article = ({ article }: ArticleProps) => {
  return (
    <article className="mod-caja-nota lugares w-100-mobile">
      <section id="" className="cont-figure">
        <a href="" className="figure">
          <picture id="" className="content-pic picture">
            <img
              src={article.promo_items.basic.url}
              alt="article-img"
              className="content-img"
              style={{width: "100%"}}
            />
          </picture>
        </a>
      </section>
      <div className="mod-caja-nota__descrip">
        <h2 className="com-title-acu">
          <a href="">{article.headlines.basic}</a>
        </h2>
        <h4 className="com-date">{article.display_date}</h4>
      </div>
    </article>
  );
};

export default Article;
