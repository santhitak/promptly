"use client"

import React, {useEffect, useState} from "react";
import {journalPrompt} from "@/app/source/journalPrompt";
import PromptTab from "@/app/component/promptTab";
import {Button} from "@/components/ui/button"

import {poetryPrompt} from "@/app/source/poetryPrompt";

export default function Home() {
    const [currentPromptOption, setCurrentPromptOption] = useState("JOURNAL");
    const [currentSource, setCurrentSource] = useState<PromptType[]>(journalPrompt);
    const [currentPrompt, setCurrentPrompt] = useState<PromptType | undefined>(undefined);

    useEffect(() => {
        const updateSource = () => {
            const source = currentPromptOption === "JOURNAL" ? journalPrompt : poetryPrompt;
            setCurrentSource(source);
            setCurrentPrompt(undefined);
        };
        updateSource();

    }, [currentPromptOption]);

    const getPrompt = () => {
        const randomPromptId = Math.floor(currentSource.length * Math.random());
        setCurrentPrompt(currentSource[randomPromptId]);
    };

    return (
        <div
            className="relative flex items-center justify-items-center h-full w-full">
            <main
                className="flex justify-center items-center lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:row-start-2 w-screen h-full">
                <div
                    className="col-start-2 col-span-1 row-start-2 row-span-1 w-full h-3/6 md:h-96 gap-8 flex flex-col justify-between">
                    <p className="text-2xl font-bold text-red-600">
                        Prompt of the day
                    </p>
                    <PromptTab
                        currentPromptOption={currentPromptOption}
                        setCurrentPromptOptionAction={setCurrentPromptOption}
                        currentPrompt={currentPrompt}
                    />
                    <Button
                        onClick={getPrompt}
                        className="w-full bg-transparent hover:bg-red-700 text-red-700 font-semibold hover:text-white
                        py-2 px-4 border border-red-600 hover:border-transparent rounded-full transition-all ease-in">
                        <p className="font-medium">Get a prompt</p>
                    </Button>
                </div>
            </main>
            <footer
                className="absolute -bottom-2 w-full border-t border-zinc-200 flex items-center justify-center">
                <p className="pt-4 text-zinc-400 text-xs">made with :heart:</p>
            </footer>
        </div>
    );
}
