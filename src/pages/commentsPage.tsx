import React, {useEffect, useState} from 'react';
import CommentsComponent from "../component/CommentsComponent";
import {ICommentModel} from "../Model/IcommentModel";
import {commentsApi} from "../services/urls";

const CommentsPage = () => {

    const [commets, setCommets] = useState<ICommentModel[]>([])

    useEffect(() => {
        commentsApi.getAllComments().then(value => setCommets(value.data))
    }, []);

    return (
        <div>
            <CommentsComponent comments={commets}/>
        </div>
    );
};

export default CommentsPage;