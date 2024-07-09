import React, {FC} from 'react';
import {IPostModel} from "../Model/IpostModel";

interface IPostProps{
    posts: IPostModel[]
}

const PostsComponent:FC<IPostProps> = ({posts}) => {
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.id}. <p>Title - {post.title}</p>
                <p>Body - {post.body}</p>
                </div>)
            }
        </div>
    );
};

export default PostsComponent;