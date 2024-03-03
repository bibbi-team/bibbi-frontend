import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ["", "/download", "/0ed00a05cf74414898b8dbff7614683f", "/5a00bd90c7674a7e8413901334ee1b24", "/25c80b13d89c4fefb908867b74bf6aa9", "/terms", "/privacy"].map((route) => ({
        url: `https://bibbi.app${route}`,
        lastModified: new Date().toISOString().split("T")[0],
    }));
    return [...routes];
}

type Sitemap = Array<{
    url: string;
    lastModified?: string | Date;
    changeFrequency?:
        | "always"
        | "hourly"
        | "daily"
        | "weekly"
        | "monthly"
        | "yearly"
        | "never";
    priority?: number;
}>;
