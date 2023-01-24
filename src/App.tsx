import React from 'react';
import {Container} from "./components/Container";
import {useGetMessagesQuery} from './store/reducers/messages.api';
import {FormSendMessage} from "./components/Form/FormSendMessage";
import {Comments} from "./components/MessageContent/Comments";
import {SectionMessage} from "./components/SectionMain"
import {PostComment} from "./components/PostComment";

function App() {
    const {isLoading, data: messages, error} = useGetMessagesQuery("comments");
  return (
    <Container>
        {messages?.map((message) => <Comments key={message.id} singleComment={message} />)}
        <PostComment/>

    </Container>
  );
}

export default App;
