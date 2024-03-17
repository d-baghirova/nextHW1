import React from 'react'
import NavBar from '@/components/NavBar'
import { Inter, Roboto } from "next/font/google";
import HeadTitle from '@/components/HeadTitle';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: "400" });

const blogs = [
  {
    blogId: 0,
    title: 'Art',
    text: ` Art refers to the practice or production of books, writing, painting, drawings, photographs, and other kinds of visual media. It's a human expression that speaks to emotions, culture, and societal issues. Art is subjective, and different forms of art can convey various meanings. Throughout history, it has played a significant role in the development of societies and has influenced various fields, including literature, music, and fashion.  `
  },
  {
    blogId: 1,
    title: 'Design',
    text: ` Design refers to the process of creating a plan or a blueprint for something to be constructed, produced, or implemented. It involves conceptualization, research, ideation, and consultation. Good design takes into consideration functionality, aesthetics, user experience, and sustainability. It can be applied to various fields such as architecture, graphics, fashion, product development, and more. Effective design can enhance the usability, attractiveness, and success of a project or product.  `
  },
  {
    blogId: 2,
    title: 'Museums',
    text: ` Museums are institutions that house and preserve art, historical objects and other items of cultural importance for public viewing and study. They come in various shapes and sizes, ranging from small, local community museums to large, national or international museums. Some famous museums include the Louvre in Paris, the Smithsonian National Museum of American History in Washington D.C., and the British Museum in London. Museums provide education, exhibitions, and research opportunities for visitors and scholars alike. They also play an important role in the preservation and conservation of cultural heritage.  `
  }
]

const Blog = () => {
  const router = useRouter()
  return (
    <>
      <HeadTitle />
      <NavBar />
      <main>
        <h1 className={inter.className}>Blog</h1>
        <p className={roboto.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe accusantium in doloremque laborum quod repellendus debitis ab aliquid eum unde aperiam laudantium, porro consectetur, dicta sequi illum minus error! Cumque?</p>
        <div><button onClick={() => router.push(`/blog/2`)}>Blog 2</button></div>
        <div className={styles.blogs}>{blogs.map((b, i) => <Link className={`${styles.link} ${roboto.className}`} key={i} href={`/blog/${b.blogId}`}>{b.title}</Link>)}</div>
      </main>
    </>
  )
}

export default Blog