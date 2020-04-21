<?php


namespace App\GQLite;


use Illuminate\Database\Eloquent\Model;
use TheCodingMachine\GraphQLite\Annotations\Field;

trait WithDescription {
    /**
     * @Field()
     * @return string
     */
    public function getDescription(): string {
        /** @var Model $this */
        return $this->description;
    }
}