import Header from "~/components/Header";
import Footer from "~/components/Footer";
import Link from "next/link";
import { PostData, loadBlogJPPosts } from "~/hooks/loader";
import { Meta } from "~/components/Meta";

const Home = (props: { posts: PostData[] }) => {
  return (
    <>
      <Meta
        meta={{
          title: "NeurotechJP",
          desc:
            "NeurotechJPは、Neurotechnology分野で最前線で活躍する、世界中の方々へのインタビューを通して得た情報をまとめたブログサイトです。",
          link: "https://neurotechjp.com",
          image: "/ogp.png",
        }}
      />
      <Header />
      <div className="index">
        <div className="index--title">Blog</div>
        <div className="index--subtitle">
          Neurotechnology - 最前線で活躍する方々へのインタビューブログ
        </div>
      </div>
      <div className="blog-container_bg">
        <div className="blog-container">
          {props.posts.map((post, j) => {
            return <BlogItem post={post} key={j} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

const BlogItem: React.FC<{ post: PostData }> = (props) => {
  const post = props.post;
  return (
    <Link href={`/${post.path}`}>
      <div className="blog-item">
        <div className="blog-item--pic">
          <img src={post.bannerPhoto} />
        </div>
        <div className="blog-item--container">
          <div className="blog-item--container-title">{post.title}</div>
          <div className="blog-item--container-subtitle">{post.subtitle}</div>
          <div className="blog-item--container-readmore">READ MORE..</div>
        </div>
        <div className="blog-item--date">{post.datePublished}</div>
      </div>
    </Link>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await loadBlogJPPosts();
  const props = {
    posts,
  };

  return { props };
};
