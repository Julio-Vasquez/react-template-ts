import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { InlineConfig } from 'vitest'
import pluginRewriteAll from 'vite-plugin-rewrite-all'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig
}

export default defineConfig({
  plugins: [react(), pluginRewriteAll()],
  test: { environment: 'happy-dom' }
} as VitestConfigExport)
