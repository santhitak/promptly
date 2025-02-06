"use client";

import React from "react";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    React.useEffect(() => {
        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/worker.js")
                .then((registration) => {
                    console.log("Service Worker registered with scope:", registration.scope);
                })
                .catch((error) => {
                    console.error("Service Worker registration failed:", error);
                });
        }
    }, []);

    return (
        <div className="bg-zinc-50">
            <div className="h-screen mx-4 p-8 font-[family-name:var(--font-geist-sans)]">
                {children}
            </div>
        </div>
    );
}