import Header from "@/Components/Header/page"
import { Search } from "@/Components/Search/page"
import Navigation from "@/Components/Navigation/page"
import NewPosts from "@/Components/NewPosts/page"
import { Titles } from "@/Components/Titles/pages"
import TopPosts from "@/Components/TopPosts/page"

export default function Home() {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-4 lg:my-8 w-[95%] mx-auto">
        <main className="lg:col-span-2">
          <div className="border-2 border-gray-100">
            <Titles title="News Posts" />
            <NewPosts />
          </div>
        </main>
        <aside>
          <Search />
          <Navigation />
          <TopPosts />
        </aside>
      </section>
    </>
  )
}
