import React from "react";

export default function PromptCard(
    {prompt}: Readonly<{ prompt: string; }>
) {
    return (
        <div
            className="w-full h-5/6 border-zinc-300 border bg-white rounded-2xl hover:bg-white/20
                        transition-all ease-in-out overflow-auto shadow-lg p-8 lg:p-14 flex justify-center items-center">
            <p className="text-center font-medium text-lg">
                {prompt}
            </p>
        </div>
    )
}