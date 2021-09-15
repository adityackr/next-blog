import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import classes from './PostContent.module.css';
import PostHeader from './PostHeader';

const PostContent = (props) => {
    const { post } = props;

    const imgPath = `/images/posts/${post.slug}/${post.image}`;

    const customRenderers = {
        // img(image) {
        //   return (
        //     <Image
        //       src={`/images/posts/${post.slug}/${image.src}`}
        //       alt={image.alt}
        //       width={600}
        //       height={300}
        //     />
        //   );
        // },
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === 'img') {
                const image = node.children[0];

                return (
                    <div className={classes.image}>
                        <Image
                            src={image.properties.src}
                            alt={image.properties.alt}
                            width={600}
                            height={300}
                        />
                    </div>
                );
            }
            return <p>{paragraph.children}</p>;
        },
    };

    return (
        <article className={classes.content}>
            <PostHeader title={post.title} image={imgPath} />
            <ReactMarkdown components={customRenderers}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
};

export default PostContent;
