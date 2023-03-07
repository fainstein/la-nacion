import { article, tag } from "@/types/api";
import React, { useState } from "react";
import Article from "./Article";
import BannerAsideDesktop from "./Banners/BannerAsideDeskop";
import BannerSmallMobile from "./Banners/BannerSmallMobile";
import BannerSticky from "./Banners/BannerSticky";
import BannerTop from "./Banners/BannerTop";

interface MainContentProps {
  articles: article[];
  sortedTags: tag[];
}

const MainContent = ({ articles, sortedTags }: MainContentProps) => {
  const [renderedArticles, setRenderedArticles] = useState<number>(8);
  return (
    <main>
      <BannerTop />
      <BannerSticky />
      <div className="lay-sidebar">
        <div className="sidebar__main">
          <div className="row">
            <div className="com-titleWithfollow hlp-marginBottom-15">
              <h1 className="com-title-section-xl hlp-marginBottom-40">
                Acumulado Grilla
              </h1>
            </div>
          </div>
          <div className="row">
            <div
              id=""
              className="cont_tags com-secondary-tag hlp-marginBottom-20"
            >
              {sortedTags.map((tag) => {
                return (
                  <a key={tag.slug} href={`/tema/${tag.slug}`}>
                    {tag.text}
                  </a>
                );
              })}
            </div>
          </div>
          <section className="row-gap-tablet-2 row-gap-deskxl-3 hlp-degrade">
            {articles.map((article, i) => {
              if (i >= renderedArticles) {
                return;
              }
              return (
                <React.Fragment key={article._id}>
                  <Article article={article} />
                  {i % 3 === 0 && i < renderedArticles && <BannerSmallMobile />}
                </React.Fragment>
              );
            })}
            {articles.length > renderedArticles && (
              <div className="transparency" style={{ height: "278px" }}></div>
            )}
          </section>
          {renderedArticles < articles.length && (
            <section className="row">
              <div className="col-12 hlp-text-center hlp-margintop-40">
                <button
                  className="--btn --secondary"
                  onClick={() => setRenderedArticles((prev) => prev + 3)}
                >
                  MÁS NOTAS DE ACUMULADO GRILLA
                </button>
              </div>
            </section>
          )}
        </div>
        <div className="sidebar__aside">
          <BannerAsideDesktop />
        </div>
      </div>
    </main>
  );
};
export default MainContent;
