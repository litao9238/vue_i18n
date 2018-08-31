<template>
    <div class="hello">
        <!--在标签中使用-->
        <h1>{{ $t('common.header') }}</h1>

        <!--在data里使用-->
        <p>{{msg}}</p>

        <button @click="lang('zh-CN')">简体中文</button>
        <button @click="lang('zh-TW')">繁体中文</button>
        <button @click="lang('en-US')">English</button>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                // 在data里使用
                msg: this.$t('common.msg')
            }

        },
        methods: {
            lang(locale) {
                this.$i18n.locale = locale;
                this.msg = this.$t('common.msg')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>