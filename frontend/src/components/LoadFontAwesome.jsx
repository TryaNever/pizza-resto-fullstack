import {useEffect} from "react";

export default function LoadFontAwesome() {
    useEffect(() => {
        const fontAwesomeKit = import.meta.env.VITE_FONT_AWESOME_KIT;
        if (fontAwesomeKit) {
            const script = document.createElement('script');
            script.src = `https://kit.fontawesome.com/${fontAwesomeKit}.js`;
            script.crossOrigin = 'anonymous';
            script.async = true;
            document.head.appendChild(script);
        }
    }, []);

    return null;
}