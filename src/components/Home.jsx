import mainImgMobileView from "../assets/images/image-web-3-mobile.jpg";
import mainImgDesktopView from "../assets/images/image-web-3-desktop.jpg";
import NewNews from "./NewNews";
import FeaturedNewsCard from "./FeaturedNewsCard";
import newNewsSampleData from "../SampleServerData/newNewsData";
import featuredNewsSampleData from "../SampleServerData/featuredNewsData";

export default function Home() {


  return (
    <div className="dark:bg-dark-gray ">
      <div className="primary-container pt-28 ">
        <div className="flex flex-col gap-8 lg:flex-row">
          <main className="flex flex-col w-full">
            <picture className="flex-1">
              <source media="(min-width: 640px)" srcSet={mainImgDesktopView} />
              <img className="object-cover w-full h-full" src={mainImgMobileView} />
            </picture>
            <div className="h-max md:flex md:gap-6 md:pt-7 dark:text-white">
              <div className="w-full py-4 text-5xl font-bold">
                <h1>The Bright Future of Web 3.0?</h1>
              </div>
              <div className="w-full py-4">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
                <button className="px-10 py-3 mt-6 font-medium tracking-widest text-white bg-red-400 dark:bg-red-700">
                  READ MORE
                </button>
              </div>
            </div>
          </main>
          <aside className="p-5 text-white bg-black lg:w-2/5">
            <h2 className="text-3xl font-bold text-orange-300">New</h2>
            {newNewsSampleData.map((news) => (
              <NewNews key={news.id} title={news.title} desc={news.desc} />
            ))}
          </aside>
        </div>
        <section>
          <ol className="grid gap-6 py-16 lg:grid-cols-3 ">
            {featuredNewsSampleData.map((news) => (
              <FeaturedNewsCard
                key={news.id}
                id={news.id}
                numberCount={news.numberCount}
                title={news.title}
                desc={news.desc}
              />
            ))}
          </ol>
        </section>
      </div>
    </div>
  );
}
