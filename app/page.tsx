"use client";
import NextLink from "next/link";
import BlogHero from "../components/blog/BlogHero";
import Highlights from "../components/blog/Highlights";
import NewsFeed from "../components/blog/NewsFeed";
import posts, { highlights, featuredPost } from "../data/mockNews";
import EmergencyNotice from "../components/home/EmergencyNotice";
import BannerSlideshow from "../components/home/BannerSlideshow";
import IntroSection from "../components/home/IntroSection";
import ModulesSection from "../components/home/ModulesSection";
import homeData from "../data/mockHome";
import StudentLife from "../components/home/StudentLife";
import ContactSection from "../components/home/ContactSection";

export default function HomePage() {
  return (
    <div className="max-w-6xl grow mx-auto py-12 px-4">
      <div className="space-y-10">
        <header className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold">Trang Chủ — Trường học</h1>
          <p className="text-lg text-gray-600 mt-3">
            Chào mừng đến với trang chính thức của nhà trường — tin tức, sự kiện và
            những điểm nổi bật được cập nhật thường xuyên.
          </p>
        </header>

        <main className="space-y-8">
          <EmergencyNotice
            active={homeData.emergencyNotice.active}
            title={homeData.emergencyNotice.title}
            message={homeData.emergencyNotice.message}
          />

          <BannerSlideshow slides={homeData.slides} />

          {/* Tin tức & Thông báo nổi bật */}
          <section className="mt-6">
            <h2 className="text-2xl font-bold mb-4">Tin tức & Sự kiện</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <BlogHero post={featuredPost} />
                <NewsFeed posts={posts} />
              </div>

              <aside>
                <Highlights items={highlights} />
              </aside>
            </div>
          </section>

          {/* Giới thiệu tóm tắt */}
          <section className="mt-8">
            <IntroSection
              title={homeData.intro.title}
              mission={homeData.intro.mission}
              values={homeData.intro.values}
              videoUrl={homeData.intro.videoUrl}
            />
          </section>

          {/* Module chức năng */}
          <section className="mt-8">
            <ModulesSection items={homeData.modules} />
          </section>

          {/* Sinh viên / Học sinh */}
          <section className="mt-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <StudentLife />
                <ContactSection />
              </div>
            </div>
          </section>
        </main>

        <div className="text-center">
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <NextLink href="/admissions" className="inline-block">
              <span className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Tuyển sinh
              </span>
            </NextLink>

            <NextLink href="/library" className="inline-block">
              <span className="inline-flex items-center px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-100">
                Thư viện
              </span>
            </NextLink>
          </div>
        </div>
      </div>
    </div>
  );
}
