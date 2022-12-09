import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
    test: InlineConfig
}

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'happy-dom',
    },
} as VitestConfigExport)
