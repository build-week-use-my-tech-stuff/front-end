import React from 'react';

const Comment = () => {
    return (
        <p><span>{props.comment.user}</span>{props.comment.text}</p>
    )
}

export default Comment;