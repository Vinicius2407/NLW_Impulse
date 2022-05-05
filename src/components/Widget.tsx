import { ChatTeardropDots } from "phosphor-react";
import { Popover } from "@headlessui/react"

//State = é uma variavel que fica sendo observada pelo react e toda vez que o valor foi alterado ele vai criar a interface com o novo valor
// do estado;
// const [isWidgetOpen, setIsWidgetOpen] = useState(false);

// function toggleWidgetVisibility() {
//     setIsWidgetOpen(!isWidgetOpen);
// }

export function Widget() {


    return (
    <Popover className="absolute bottom-4 right-4">
        <Popover.Panel>Hello world</Popover.Panel>

        <Popover.Button className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
            <ChatTeardropDots className="w-6 h-6"/>

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                <span className="pl-2"></span>
                Feedback
            </span>
        </Popover.Button>
    </Popover>
    )
}