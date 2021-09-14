import { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
    return (
        <Fragment>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </Fragment>
    );
};

export const getStaticProps = () => {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts,
        },
    };
};

export default HomePage;
