import Link from 'next/link';
import Image from 'next/image';

import classes from './PostItem.module.css';

const PostItem = (props) => {
    const { title, image, excerpt, date, slug } = props.post;

    const formattedDate = new Date(date).toLocaleString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const imgPath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return (
        <li className={classes.post}>
            <Link href={linkPath}>
                <a>
                    <div className={classes.image}>
                        <Image
                            src={imgPath}
                            alt={title}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </div>
                    <div className={classes.content}>
                        <h1>{title}</h1>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;
