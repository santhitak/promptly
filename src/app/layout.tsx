import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import RootLayout from "@/app/rootLayout";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Promptly",
    description: "Promptly",
    icons: "/pwa-icon.png",
    manifest: "./manifest.json",
};

export default function Layout(
    {
        children,
    }: Readonly<{
        children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiasing`}>
        <RootLayout>{children}</RootLayout>
        </body>
        </html>
    );
}
