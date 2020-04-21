<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        if (User::where('email', env('ADMIN_EMAIL'))->first() === null) {
            $u = new User();
            $u->name = env('ADMIN_USER');
            $u->email = env('ADMIN_EMAIL');
            $u->email_verified_at = \Carbon\Carbon::now();
            $u->password = bcrypt(env('ADMIN_PASSWORD'));
            $u->save();
        }

    }
}
