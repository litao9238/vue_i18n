import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)	// 通过插件的形式挂载

const i18n = new VueI18n({
    locale: 'zh-CN',    // 默认使用语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh-CN': require('./lang/zh-cn'),   // 中文简体语言包
        'zh-TW': require('./lang/zh-tw'),   // 中文繁体语言包
        'en-US': require('./lang/en-us')    // 英文语言包
    }
})
export default i18n ;