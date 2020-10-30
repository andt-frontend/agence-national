/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
// import "./src/assets/stylesheets/layout.scss"

import { ThemeProvider } from 'styled-components'
import Theme from './src/theme/theme'

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        {element}
    </ThemeProvider>
)