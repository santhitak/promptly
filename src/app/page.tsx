"use client"

import React from "react";
import {journalPrompt} from "@/app/source/journalPrompt";

export default function Home() {
    const [currentPrompt, setCurrentPrompt] = React.useState<JournalPromptType>()

    function getPrompt() {
        const randomPromptId = Math.floor(journalPrompt.length * Math.random())
        setCurrentPrompt(journalPrompt[randomPromptId])
    }

    return (
        <div
            className="flex items-center justify-items-center h-full w-full gap-16">
            <main
                className="flex justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:row-start-2 w-screen h-full">
                <div
                    className="col-start-2 col-span-1 row-start-2 row-span-1 w-full h-3/6 md:h-96 gap-10 flex flex-col
                    justify-between">
                    <p className="text-3xl font-bold text-red-600">
                        Prompt of the day
                    </p>
                    <div
                        className="w-full h-full border-zinc-300 border bg-white rounded-2xl hover:bg-white/50 transition-all ease-in-out overflow-auto shadow-lg p-8 lg:p-14 flex justify-center items-center">
                        <p className="text-center font-medium text-xl">
                            {currentPrompt?.prompt ?? "Hit the button for new prompt"}
                        </p>
                    </div>
                    <button
                        onClick={getPrompt}
                        className="w-full bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-600 hover:border-transparent rounded-full transition-all ease-in">
                        <p className="font-medium">Generate new prompt</p>
                    </button>
                </div>
            </main>
        </div>
    );
}
