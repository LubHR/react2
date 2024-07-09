import React, {FC} from 'react';
import CommentsPage from "../pages/commentsPage";
import {ICommentModel} from "../Model/IcommentModel";

interface ICommentsProps {
    comments: ICommentModel[];
}
const CommentsComponent:FC<ICommentsProps> = ({comments}) => {
    return (
        <div>
            {
                comments.map(comment =>
                    <div key={comment.id}>{comment.id}. {comment.name}
                        <p>email:{comment.email}</p>
                        <p>body:{comment.body}</p>
                    </div>)
            }
        </div>
    );
};

export default CommentsComponent;