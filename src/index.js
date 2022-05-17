import React from 'react';
import  ReactDOM  from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="today at 4:00" 
                    text="cool stuff"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Eve" 
                    timeAgo="today at 5:10" 
                    text="nice  photos"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Lidor" 
                    timeAgo="today at 5:36" 
                    text="love you blog"
                    avatar={faker.image.image()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />,document.querySelector('#root'))