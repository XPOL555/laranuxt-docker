<template>
    <time :date="date">{{$moment.utc(date).local().format(format)}}</time>
</template>

<script>
    export default {
        props: {
            date: {
                type: String,
                default: ''
            },
            format: {
                type: String,
                default: 'DD/MM/YYYY'
            }
        }
    }
</script>