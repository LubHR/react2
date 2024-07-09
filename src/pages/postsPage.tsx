import React, {useEffect, useState} from 'react';
import {IPostModel} from "../Model/IpostModel";
import {postApi, userApi} from "../services/urls";
import PostsComponent from "../component/PostsComponent";

const PostsPage = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        postApi.getAllPosts().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;