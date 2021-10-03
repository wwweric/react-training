import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';
import { createPost, getPosts } from '../firebase/posts';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  useEffect(() => {
    (async () => {
      const posts = await getPosts();
      console.log(posts);
    })();
  }, []);

  const handleCreatePost = async () => {
    const post = await createPost({
      title: 'test',
      body: 'body',
    });
    console.log(post);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 onClick={handleCreatePost}>記事投稿テスト</h1>
      </main>

      <footer className={styles.footer}>
        <p>フッター</p>
      </footer>
    </div>
  );
};

export default Home;
