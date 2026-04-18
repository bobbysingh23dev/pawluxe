import type { MetadataRoute } from "next";
import { dogCategories } from "@/lib/data/dog-categories";
import { posts } from "@/lib/data/posts";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/dogs",
    "/lucknow/puppies",
    "/blog",
  ].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const dogRoutes: MetadataRoute.Sitemap = dogCategories.map((c) => ({
    url: `${base}/dogs/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const lucknowPuppyRoutes: MetadataRoute.Sitemap = dogCategories
    .filter((c) => c.lifeStage === "puppy")
    .map((c) => ({
      url: `${base}/lucknow/puppies/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    }));

  const blogRoutes: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...dogRoutes, ...lucknowPuppyRoutes, ...blogRoutes];
}
