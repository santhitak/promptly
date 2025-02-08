"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import * as React from "react";
import PromptCard from "@/app/component/promptCard";

interface TabsProps {
    currentPromptOption: string,
    setCurrentPromptOptionAction: (tab: string) => void,
    currentPrompt?: PromptType,
}

export default function PromptTab(
    {
        currentPromptOption,
        setCurrentPromptOptionAction,
        currentPrompt,
    }: TabsProps
) {
    return (
        <Tabs value={currentPromptOption} onValueChange={setCurrentPromptOptionAction} defaultValue="JOURNAL"
              className="w-full h-full">
            <TabsList className="w-full">
                <TabsTrigger value="JOURNAL" className="w-1/2">Journal</TabsTrigger>
                <TabsTrigger value="POETRY" className="w-1/2">Poetry</TabsTrigger>
            </TabsList>
            <TabsContent forceMount={true} className="h-full" value="JOURNAL">
                <PromptCard prompt={currentPrompt?.prompt ?? "Hit the button for new prompt"}/>
            </TabsContent>
        </Tabs>
    )
}