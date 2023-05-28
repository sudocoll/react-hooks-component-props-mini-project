import React from "react";
import blogData from "../data/blog";
import Article from "./Article";

function ArticleList () {
    const Post = blogData.posts
    const article = Post.map((post) => {
        return <Article key = {post.id} title = {post.title} date= {post.date} preview = {post.preview}></Article> 
    })
    return (
        <main>
            {article}
        </main>
    )
}

export default ArticleList