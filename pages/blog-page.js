import {Layout} from "../components/Layout";
import Link from "next/link";
import {getAllPostsData} from "../lib/posts";
import Post from "../components/Post";

const BlogPage = (props) => {

    const { filteredPosts } = props;
    return (
        <Layout title="Blog Page">
            <ul>
                { filteredPosts &&
                    filteredPosts.map((post) =>
                        <Post key={post.id} post={post}/>
                    )}
            </ul>
            <Link href={"/main-page"}>
                <div className="flex cursor-pointer mt-12">
                    <svg className="w-6 h-6 mr-3"
                         fill="none"
                         stroke="currentColor"
                         viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                    </svg><span>Back to main Page</span>
                </div>
            </Link>
        </Layout>
    );
};

export const getStaticProps = async () => {
    const filteredPosts = await getAllPostsData();
    return {
        props: { filteredPosts },
        revalidate: 3
    }
}

export default BlogPage;

