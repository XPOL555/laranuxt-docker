<template>
    <v-app id="inspire">
        <v-navigation-drawer
            app
            :mini-variant.sync="mini"
            permanent
        >
            <v-list-item>
                <v-menu offset-y>
                    <template v-slot:activator="{on}">
                        <v-list-item-avatar>
                            <v-img v-on="on" src="//randomuser.me/api/portraits/lego/2.jpg"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-title v-on="on">{{username}}</v-list-item-title>
                    </template>
                    <v-list>
                        <v-list-item @click="logout()">
                            <v-list-item-title>Esci</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn
                    icon
                    @click.stop="mini = !mini"
                >
                    <v-icon>keyboard_arrow_left</v-icon>
                </v-btn>
            </v-list-item>
            <v-list shaped class="mt-5">
                <v-list-item-group v-model="currentPage" color="primary">
                    <div v-for="(page,i) in pages" :key="i">
                        <v-list-group
                            v-if="page.hasOwnProperty('group')"
                        >
                            <template v-slot:activator>
                                <v-list-item-icon>
                                    <v-icon color="primary">{{page.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{page.name}}</v-list-item-title>
                            </template>

                            <v-list-item
                                v-for="(subpage, j) in page.group" :to="subpage.path"
                                :key="j"
                                link
                                exact
                                dense
                            >
                                <v-list-item-icon>
                                    <v-icon>{{subpage.icon}}</v-icon>
                                </v-list-item-icon>
                                <v-list-item-title>{{subpage.name}}</v-list-item-title>
                            </v-list-item>
                        </v-list-group>
                        <v-list-item v-else :to="page.path">
                            <v-list-item-icon>
                                <v-icon v-text="page.icon" color="primary"></v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                                <v-list-item-title>{{page.name}}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </div>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            dark
        >
            <v-app-bar-nav-icon @click.stop="mini = !mini"></v-app-bar-nav-icon>
            <v-toolbar-title>{{$nuxt.$route.name}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <strong class="valera">App</strong>
        </v-app-bar>
        <Snackbar></Snackbar>
        <nuxt/>

    </v-app>
</template>

<script>
    import Snackbar from "~/components/Snackbar.vue";

    export default {
        components: {
            Snackbar
        },
        props: {
            source: String,
        },
        data: () => ({
            currentPage: null,
            currentSubpage: [],
            pages: [
                {
                    icon: 'dashboard',
                    name: 'Dashboard',
                    path: '/'
                },
                {
                    icon: 'mdi-check',
                    name: 'List',
                    group: [
                        {
                            icon: 'list',
                            name: 'List',
                            path: '/items/'
                        },
                        {
                            icon: 'add',
                            name: 'New',
                            path: '/items/add'
                        },
                    ]
                },
            ],
            mini: null
        }),
        computed: {
            username() {
                return this.$auth.user.name
            },
            email() {
                return this.$auth.user.email
            }
        },
        created() {
            //this.$vuetify.theme.dark = true
        },
        methods: {
            async logout() {
                await this.$auth.logout();
                this.$router.push('login');
            },
            goTo(path) {
                this.$router.push(path);
            }
        }
    }
</script>
