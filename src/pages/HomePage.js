import React from "react";

import { useFeed } from "../custom-hooks/";

//import components
import MainHeader from "../components/MainHeader";
import Work from "../components/Work";
import Misc from "../components/Misc";
import { Link } from "react-router-dom";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { readableDate } from "../components/helpers";
import Slider from 'rc-slider'
import { usePosts } from "../custom-hooks/";
import AmWriting from "../css/images/AmWriting.png";
import Footer from "../components/Footer";
export default function HomePage() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    console.log(posts);
    return posts.slice(0, 10).map((post) => (
      <div className="postFrame">
        <Link
          key={"/writing/" + post.fields.slug}
          to={"/writing/" + post.fields.slug}
          className="preview"
        >
          <h2 style={{ width: "100%", float: "left" }}>{post.fields.title}</h2>
          <small style={{ fontSize: "75%" }}>
            {readableDate(post.fields.date)}
          </small>

          <p>{post.fields.description}</p>
          <div
            className="postPreview"
            style={{ padding: "1.5% 0 1.5% 0" }}
            dangerouslySetInnerHTML={{
              __html:
                documentToHtmlString(post.fields.body).substring(0, 200) +
                "   ...  <br/><span>MORE↗</span>",
            }}
          ></div>
        </Link>
        <hr className="divider" />
      </div>
    ));
  };

  const showPosts = () => {
    // Perhaps add animation to homepage when laoding
    if (isLoading) return <p>Loading</p>;
    // Render only the first three posts

    return posts.slice(0, 3).map((post) => (
      <div className="singlePost">
        <h4>{post.title}</h4>
        <h5>{post.pubDate.substring(0, 16)}</h5>
        <p>
          <a href={post.link}>Read➚</a>
        </p>
      </div>
    ));
  };
  // Render the homepage
  return (
    <div className="content">
     
      <MainHeader />
      <div className="latestposts">
        <h3>LATEST</h3>
        <div className="postlist">{renderPosts()}</div>
        <img src={AmWriting} alt="writing"></img>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
