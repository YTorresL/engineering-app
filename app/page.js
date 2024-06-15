"use client"
import Header from "@/components/Header/page"
import { Search } from "@/components/Search/page"
import Navigation from "@/components/Navigation/page"
import Titles from "@/components/Titles/page"
import NewPosts from "@/components/NewPosts/page"
import TopPosts from "@/components/TopPosts/page"
import { Footer } from "@/components/Footer/page"
import { useEffect, useState } from "react"
import { fetchLatestPosts } from "@/firebase/client"
import useUser from "@/hooks/useUser"

export default function Home() {
  const [posts, setPosts] = useState([])
  const user = useUser()

  useEffect(() => {
    fetchLatestPosts().then(setPosts)
  }, [])
  return (
    <>
      <Header path="/" user={user} />
      <section className="bg-gray-50">
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-4 lg:py-14">
          <main className="lg:col-span-2">
            <Titles title="News Posts" />
            {posts.map((item, index) => (
              <NewPosts
                key={index}
                avatar={item.avatar}
                title={item.title}
                createdAt={item.createdAt}
                username={item.username}
                categories={item.categories}
                description={item.description}
                userId={item.userId}
              />
            ))}
          </main>
          <aside>
            <Search />
            <Navigation />
            <TopPosts />
          </aside>
        </div>
      </section>
      <Footer />
    </>
  )
}
