import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'

export default function Page() {
    return (
        <ThemeProvider>
            <Meta />
        </ThemeProvider>
    )
}
