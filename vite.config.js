import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

/**
 * I modded the build so it sets a base folder because I'm pushing this to a S3 bucket where I already have a static
 * website. Along with other mods I made to my S3 Bucket and CloudFront this will ensure the app looks for the assets
 * in the subfolder instead of the root.
 * {@link https://vitejs.dev/config/}
 */
export default defineConfig(({ command }) => {
  const isProd = command === 'build';
  return {
    plugins: [react()],
    base: isProd ? '/capsule-card' : '/',
  }
})