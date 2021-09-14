import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postDirectory = path.join(process.cwd(), 'posts');

const getPostData = (fileName) => {
    const filePath = path.join(postDirectory, fileName);
    const fileContent = fs.readFileSync(filePath);
    const { data, content } = fileContent;

    const postSlug = fileName.replace(/\.md$/, '');

    const postData = {
        postSlug,
        ...data,
        content,
    };

    return postData;
};

export const getAllPosts = () => {
    const postFiles = fs.readdirSync(postDirectory);

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) =>
        postA.date > postB.date ? -1 : 1
    );

    return sortedPosts;
};

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter((post) => post.isFeatured);

    return featuredPosts;
};
