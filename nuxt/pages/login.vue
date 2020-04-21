<template>
  <v-content>
    <v-container
      fluid
      fill-height
    >
      <v-layout
        align-center
        justify-center
      >
        <v-flex
          xs12
          sm8
          md4
        >
          <div class="text-center">
            <v-icon size="115" color="primary">face</v-icon>
          </div>
          <v-card class="elevation-24">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Benvenuto</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="user.username" label="Utente o Email" :disabled="loading"></v-text-field>
                <v-text-field v-model="user.password" label="Password"
                              :disabled="loading"
                              :type="show ? 'text' : 'password'"
                              :append-icon="show ? 'visibility' : 'visibility_off'"
                              @click:append="show = !show">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="text-center">
              <v-btn text color="primary" @click="passwordGrantLogin" x-large :loading="loading" :disabled="loading">
                Accedi
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <v-snackbar v-model="snackbar.display" :color="snackbar.color" :timeout="snackbar.timeout"
                @close="redirectIfLogged">
      {{ snackbar.text }}
    </v-snackbar>
  </v-content>
</template>

<script>
    export default {
        layout: 'guest',
        auth: false,
        data() {
            return {
                logged: false,
                loading: false,
                show: false,
                snackbar: {
                    display: false,
                    text: '',
                    color: 'warning',
                    timeout: 5000
                },
                user: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            async passwordGrantLogin() {
                this.loading = true;
                try {
                    const authResponse = await this.$auth.loginWith("password_grant", {
                        data: {
                            grant_type: "password",
                            client_id: process.env.PASSPORT_PASSWORD_GRANT_ID,
                            client_secret: process.env.PASSPORT_PASSWORD_GRANT_SECRET,
                            scope: "*",
                            username: this.user.username,
                            password: this.user.password
                        }
                    });
                    this.logged = true;
                    this.snackbar.color = 'success';
                    this.snackbar.timeout = 1000;
                    this.snackbar.text = 'Login effettuato!';
                    this.snackbar.display = true;
                    setTimeout(function () {
                        this.redirectIfLogged()
                    }.bind(this), 1000);

                } catch (e) {
                    this.snackbar.text = 'Impossibile accedere';
                    this.snackbar.display = true;
                    this.loading = false;
                }

            },
            redirectIfLogged() {
                if (this.logged) {
                    this.$router.replace("/");
                }
            }
        }
    };
</script>

<style scoped>
</style>
