<!--
	作者：347526189@qq.com
	时间：2018-09-03
	描述：内部标签js语言包
-->
<template>
    <div class="hello">
        <h1>{{ $t('header') }}</h1>

        <p>{{ $t('msg') }}</p>

        <button @click="lang('zh-CN')">简体中文</button>
        <button @click="lang('zh-TW')">繁体中文</button>
        <button @click="lang('en-US')">English</button>
        
        
        
        <br />
        <!--使用data里修改后的语言-->
       	{{aaa}}
        <br /><br /><br /><br />
        
        
        <div>
        	单个文件组件的方式需要再引入 npm i --save-dev @kazupon/vue-i18n-loader<br /><br />
			并且修改webpack.base.conf.js里的配置<br /><br />
			具体参考文档: http://kazupon.github.io/vue-i18n/guide/sfc.html#basic-usage<br /><br />
			
			外部引用语言包方式和单个文件组件方式不可同时使用<br /><br />
        </div>
        
        
        
        
    </div>
</template>
<i18n>
  {
    "en-US": {
      	"header": "header",
		"msg": "Welcome to Your Vue.js App",
		"xxx": "3333"
    },
    "zh-CN": {
    	"header": "头部",
		"msg": "欢迎使用vue应用",
		"xxx": "1111"
    },
    "zh-TW": {
      	"header": "頭部",
		"msg": "歡迎使用vue應用",
		"xxx": "2222"
    }
  }
</i18n>
<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                // 在data里使用
                aaa: this.$t('xxx')
            }

        },
        methods: {
            lang(locale) {
            	
                this.$i18n.locale = locale;
                this.aaa = this.$t('xxx')
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