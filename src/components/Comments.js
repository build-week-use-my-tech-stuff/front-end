import React from 'react';

class Comments extends React.Component {

    render(){
        return(
            <div>
                {this.props.comments.map(comment => (
                    <Comment 
                        comment = {comment}
                        key = {comment.id}
                    />
                ))}
            </div>
        )
    }
}

export default Comments;