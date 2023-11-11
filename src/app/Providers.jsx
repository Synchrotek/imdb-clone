"use client"

import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
    return (
        <ThemeProvider enableSystem={true} attribute="class">
            <div className="text-gray-700 dark:bg-gray-700 dark:text-gray-200 transition-colors duration-300 min-h-screen select-none">
                {children}
            </div>
        </ThemeProvider>
    )
}
