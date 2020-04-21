<?php


namespace App\GQLite;


use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use TheCodingMachine\GraphQLite\Annotations\Field;

trait WithSoftDeletesTimestamps {

    /**
     * @Field()
     * @return string|null
     */
    public function getDeleted_at() {
        /** @var Model $this */
        return $this->deleted_at;
    }
}
