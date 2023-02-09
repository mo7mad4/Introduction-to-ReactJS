import React from "react";
import { H1, H2, Body } from '../components/Typography'
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { posts } from "../mock/posts";

const Post = () => {
    const { id } = useParams();
    const myData = posts.find((item) => item.id === +id)//Type 1 find => found object from array => return just single object
    // const myData = data.find((item) => item.id === Number(id))//Type 2 find => found object from array => return just single object
    // const myData = data.find((item) => String(item.id) === id)//Type 3 find => found object from array => return just single object
    console.log(myData)
    return (
        <Container>
            <H1>Post Number{myData.id}</H1>
            <H2>{myData.title}</H2>
            <Body>{myData.body}</Body>
            {/* علامة الاستفهام بدل على انو لو في عندي داتا جيبلي اياها  لو م في داتا م ترجع اشي */}
            {/* <H1>Post Number{myData?.id}</H1>
            <H2>{myData?.title}</H2>
            <Body>{ myData?.body }</Body> */}
            
        </Container>
    );
}

export default Post;