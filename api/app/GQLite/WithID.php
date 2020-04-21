<?php


namespace App\GQLite;


use Illuminate\Database\Eloquent\Model;
use TheCodingMachine\GraphQLite\Annotations\Field;

trait WithID {

    /**
     * @Field()
     * @return int
     */
    public function getId(): int {
        /** @var Model $this */
        return $this->id;
    }
}
