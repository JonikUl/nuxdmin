import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },

  css: ['assets/css/main.css'],
  modules: ['@nuxt/ui', '@pinia/nuxt', '@nuxt/eslint'],
  devtools: {
    enabled: true,
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },

  app: {
    head: {
      title: 'nuxdmin',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Reusable admin dashboard template built with Nuxt 4',
        },
      ],
    },
  },

  runtimeConfig: {
    // Private keys (only available server-side)
    // Add your environment variables here
  },
});
