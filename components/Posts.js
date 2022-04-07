import Post from "./Post";

const posts=[
    {
        id:'123',
        username: 'Joshua Anderson', // name displayed on post 
        userImg: 'https://i.pinimg.com/originals/d2/d4/d7/d2d4d77f8528eb207df0f5e305626ef0.jpg', // profile pic in a post
        img: 'https://i.pinimg.com/originals/c8/a5/57/c8a55731cbad1e9945e86f9d85ff15a4.jpg', // the post shown on the feed 
        caption: "Just having a cigarette"  // Instagram post description
    },
    {
        id:'345',
        username: 'Joshua Anderson', // name displayed on post 
        userImg: 'https://i.pinimg.com/originals/d2/d4/d7/d2d4d77f8528eb207df0f5e305626ef0.jpg', // profile pic in a post
        img: 'https://i.pinimg.com/originals/99/68/d0/9968d0f6a739e7679d8c434191fd40d7.jpg', // the post shown on the feed 
        caption: " Hi mamas " // Instagram post description
    },
];

function Posts() {
    return(
        <div>
            <h1>
                {posts.map(post => (
                    <Post 
                    key={post.id} 
                    id={post.id}
                    username={post.username}
                    userImg={post.userImg}
                    img={post.img}
                    caption={post.caption}
                    />
                ))}
             
             
            </h1>
        </div>
    );
}

export default Posts;