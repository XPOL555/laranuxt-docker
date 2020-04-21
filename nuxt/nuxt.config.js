import colors from 'vuetify/es5/util/colors'

const IT_LOCALE = require('vuetify/src/locale/it.ts');

require('dotenv').config();

export default {
    mode: 'spa',
    /*
    ** Headers of the page
    */
    head: {
        titleTemplate: '%s - ' + process.env.npm_package_name,
        title: process.env.npm_package_name || '',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: process.env.npm_package_description || ''}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
    ** Customize the progress-bar color
    */
    loading: {color: '#fff'},
    /*
    ** Global CSS
    */
    css: [
        '@/assets/app.scss'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/notifier.js',
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/moment',
        '@nuxtjs/vuetify',
        '@nuxtjs/router-extras'
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/dotenv',
        '@nuxtjs/axios',
        '@nuxtjs/auth',
        '@nuxtjs/pwa',
        '@nuxtjs/apollo',
    ],
    router: {
        middleware: ['auth'],
    },
    moment: {
        defaultLocale: 'it',
        locales: ['it'],
        plugins: [
            'moment-timezone'
        ]
    },
    /*
    ** Axios module configuration
    ** See https://axios.nuxtjs.org/options
    */
    axios: {
        baseURL: process.env.LARAVEL_ENDPOINT
    },

    /**
     * Auth module configuration
     * @see https://auth.nuxtjs.org/
     * @provider https://auth.nuxtjs.org/providers/laravel-passport.html#usage
     * @laravel https://laravel.com/docs/6.x/passport
     */
    auth: {
        redirect: {
            login: '/login',
            logout: '/',
            callback: '/login',
            user: '/'
        },
        strategies: {
            password_grant: {
                _scheme: 'local',
                endpoints: {
                    login: {
                        url: '/oauth/token',
                        method: 'post',
                        propertyName: 'access_token'
                    },
                    logout: {
                        url: 'api/auth/logout'
                    },
                    user: {
                        url: 'api/auth/me'
                    }
                }
            }
        }
    },

    apollo: {
        //tokenName: 'yourApolloTokenName', // optional, default: apollo-token
        cookieAttributes: {
            /**
             * Define when the cookie will be removed. Value can be a Number
             * which will be interpreted as days from time of creation or a
             * Date instance. If omitted, the cookie becomes a session cookie.
             */
            expires: 7, // optional, default: 7 (days)

            /**
             * Define the path where the cookie is available. Defaults to '/'
             */
            path: '/', // optional
            /**
             * Define the domain where the cookie is available. Defaults to
             * the domain of the page where the cookie was created.
             */
            domain: process.env.LARAVEL_ENDPOINT, // optional

            /**
             * A Boolean indicating if the cookie transmission requires a
             * secure protocol (https). Defaults to false.
             */
            secure: false,
        },
        defaultOptions: {
            // See 'apollo' definition
            // For example: default query options
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'no-cache',
            },
        },
        clientConfigs: {
            default: {
                // required
                httpEndpoint: process.env.LARAVEL_ENDPOINT + '/graphql',
                // optional
                // See https://www.apollographql.com/docs/link/links/http.html#options
                httpLinkOptions: {
                    credentials: 'same-origin'
                },
                // You can use `wss` for secure connection (recommended in production)
                // Use `null` to disable subscriptions
                wsEndpoint: null, // optional
                // LocalStorage token
                tokenName: 'apollo-token', // optional
                // Enable Automatic Query persisting with Apollo Engine
                persisting: false, // Optional
                // Use websockets for everything (no HTTP)
                // You need to pass a `wsEndpoint` for this to work
                websocketsOnly: false // Optional
            },
        }
    },
    /*
    ** vuetify module configuration
    ** https://github.com/nuxt-community/vuetify-module
    */
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        },
        lang: {
            treeShake: true,
            locales: {
                it: IT_LOCALE.default
            },
            current: 'it'
        },
        defaultAssets: {
            font: {
                family: 'Roboto'
            },
            icons: 'md'
        }
    },
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },
    generate: {
        dir: '../public/app'
    }
}
