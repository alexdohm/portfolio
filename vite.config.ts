import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import {quasar, transformAssetUrls} from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue({
        template: {transformAssetUrls},
    }), quasar({
        sassVariables: 'src/styles/quasar-variables.sass'
    })],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    css: {
        preprocessorOptions: {
            sass: {
                additionalData: [
                    // Make the variables defined in these files available to all components, without requiring an explicit
                    // @import of the files themselves
                    '@import "./src/styles/_variables"',
                    '@import "./src/styles/_mixins"',
                    '', // end with newline
                ].join('\n'),
            },
        },
    },
})
