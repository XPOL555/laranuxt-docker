<template>
    <time :datetime="time" :title="'UTC: '+time">{{$moment.utc(time).local().format(format)}}</time>
</template>

<script>
    export default {
        props: {
            time: {
                type: String,
                default: ''
            },
            format: {
                type: String,
                default: 'DD/MM/YYYY [alle] HH:mm'
            }
        }
    }
</script>