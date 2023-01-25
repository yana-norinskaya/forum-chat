import React from 'react';

import {useGetMessagesQuery} from './store/reducers/messages.api';

import {Comments, PostComment, Container} from "./components";


function App() {
    const {data: comments} = useGetMessagesQuery("comments");
  return (
        <Container>
            {comments?.map((comment) => <Comments key={comment.id} singleComment={comment} />)}
                <PostComment/>

        </Container>
  );
}

export default App;
