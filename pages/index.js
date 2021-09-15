import Head from 'next/head';
import { Fragment } from 'react';
import FeaturedPosts from '../components/HomePage/FeaturedPosts';
import Hero from '../components/HomePage/Hero';
import { getFeaturedPosts } from '../lib/posts-util';

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>AC Blog</title>
                <meta
                    name="description"
                    content="I post about programming and web development."
                />
            </Head>
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
