"use client"
import Header from "@/Components/Header/page"
import { Search } from "@/Components/Search/page"
import Navigation from "@/Components/Navigation/page"
import { Titles } from "@/Components/Titles/pages"
import NewPosts from "@/Components/NewPosts/page"
import TopPosts from "@/Components/TopPosts/page"
import { Footer } from "@/Components/Footer/page"

export default function Home() {
  return (
    <>
      <Header path="/" />
      <section className="bg-gray-50">
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-4 lg:py-14">
          <main className="lg:col-span-2">
            <Titles title="News Posts" />
            <NewPosts />
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
