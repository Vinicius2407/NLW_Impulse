import { CloseButton } from "../CloseButton";

import bugImageUrl from "../../assets/Emoji.svg";
import ideaImageUrl from "../../assets/Emoji-1.svg";
import thoughtImageUrl from "../../assets/Emoji-2.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";


export const feedbackTypes = {
    BUG: {
        title: "Problema",
        image: {
            source: bugImageUrl,
            alt: "Imagem de um inseto"
        }
    },
    IDEA: {
        title: "Ideia",
        image: {
            source: ideaImageUrl,
            alt: "Imagem de uma lampada"
        }
    },
    OTHER: {
        title: "Outro",
        image: {
            source: thoughtImageUrl,
            alt: "Imagem de um balao de pensamento"
        }
    },
}

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

    function handleRestartFeedback() {
        setFeedbackType(null);
    }

    return (
        <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">

            {!feedbackType ? (
                <FeedbackTypeStep onFeedbackTypeChange={setFeedbackType} />
            ) : (
                <FeedbackContentStep 
                    feedbackType={feedbackType} 
                    onFeedbackRestartRequest={handleRestartFeedback}
                />
            )}

            <footer>
                Feito com 🤍 pela <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rockeatseat</a>
            </footer>
        </div>
    )
}