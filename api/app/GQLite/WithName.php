<?php


namespace App\GQLite;


use Illuminate\Database\Eloquent\Model;
use TheCodingMachine\GraphQLite\Annotations\Field;

trait WithName {
    /**
     * @Field()
     * @return string
     */
    public function getName(): string {
        /** @var Model $this */
        return $this->name;
    }
}