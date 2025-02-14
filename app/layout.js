import React from 'react'

export default function RootLayout({children}) {
    return(
        <html>
            <head>
                {/* meta */}
                <meta name='description' content='Portfolio nextjs website' />
                <meta name='keywords' content='nextjs, react, portfolio, gouravsharma-00' />
                <meta name='author' content='gouravsharma-00' />
                {/* Opengraph */}
                <meta property='og:title' content='Gourav Sharma | Fullstack developer' />
                <meta property='og:description' content='Portfolio of gouravsharma-00' />
                <meta property='og:image' content='https://dev-gouravsharma-00.vercel.app/favicon.png' />
                <meta property='og:url' content='https://dev-gouravsharma-00.vercel.app' />
                {/* Icon */}
                <link rel='icon' href='/favicon.png' />
                {/* Title */}
                <title>Gourav Sharma | Fullstack developer</title>
            </head>
            <body>
                { children }
            </body>
        </html>
    )
}