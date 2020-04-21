<?php

use Illuminate\Database\Seeder;

class OAuthClients extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        if (\App\OauthClient::where('name', 'Laravel Personal Access Client')->first() === null) {
            $personal = new \App\OauthClient();
            $personal->name = 'Laravel Personal Access Client';
            $personal->secret = 'jRuBAHyIpM2E5hz702uuPzreR6UwT7yymzNQxqu0';
            $personal->redirect = 'http://localhost';
            $personal->personal_access_client = 1;
            $personal->password_client = 0;
            $personal->revoked = 0;
            $personal->save();
        }
        if (\App\OauthClient::where('name', 'Laravel Password Grant Client')->first() === null) {
            $personal = new \App\OauthClient();
            $personal->name = 'Laravel Password Grant Client';
            $personal->secret = 'xi80eJN7uCTGWWfHRO6T0moc2QOoQNoMg5WQskja';
            $personal->redirect = 'http://localhost';
            $personal->personal_access_client = 0;
            $personal->password_client = 1;
            $personal->revoked = 0;
            $personal->save();
        }
    }
}
