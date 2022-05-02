import React, { useState, useEffect } from 'react'
import { useSearchParams } from "react-router-dom";
import Posts from "../../components/posts/Posts";
import "../../components/posts/posts.css";
import "../home/home.css";
import axios from "axios";
import { useLocation } from "react-router";
export default function Categories() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [catposts, setCatposts] = useState([]);
    const cat = searchParams.get("v")
    const { search } = useLocation();
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("/catposts/?cat=" + cat);
            setCatposts(res.data);
        };
        fetchPosts();
    }, [searchParams]);
    return (

        <div>
            <div className="home">
                <Posts posts={catposts} />
            </div>
        </div>
    )
}
