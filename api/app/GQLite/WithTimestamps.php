<?php


namespace App\GQLite;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use TheCodingMachine\GraphQLite\Annotations\Field;

trait WithTimestamps {

    /**
     * @Field()
     * @return string|null
     */
    public function getCreated_at() {
        /** @var Model $this */
        return $this->created_at;
    }

    /**
     * @Field()
     * @return string|null
     */
    public function getUpdated_at() {
        /** @var Model $this */
        return $this->updated_at;
    }
}
