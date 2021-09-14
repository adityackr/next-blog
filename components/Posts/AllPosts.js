import classes from './AllPosts.module.css';
import PostsGrid from './PostsGrid';

const AllPosts = (props) => {
    return (
        <section className={classes.posts}>
            <div className={classes.title}>
                <h1>All Posts</h1>
            </div>
            <PostsGrid posts={props.posts} />
        </section>
    );
};

export default AllPosts;
