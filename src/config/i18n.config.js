/**
 * @Description:
 * @author 云离
 * @date: 2018/12/31
 */
const i18nContext = require.context('../i18n/', false, /\.js$/)
export const messages = {}
i18nContext.keys().forEach(key=> {
    const i18nKey = key.match(/^\.\/(\S*)\.js$/)[1]
    messages[i18nKey] = i18nContext(key).default
})
export const langulageSpecialMap = {
    'zh-CN': 'zh'
}

