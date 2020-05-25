/**
 * Created by zhy on 2017/4/1.
 */
'use strict';

/**
 * mavonEditor
 * @author hinesboy
 */
const mavonEditor = require('./mavon-editor.vue');
const mavonRender = require('./mavon-render.vue');
const VueMavonEditor = {
    markdownIt: mavonEditor.mixins[0].data().markdownIt,
    mavonEditor: mavonEditor,
    mavonRender: mavonRender,
    LeftToolbar: require('./components/md-toolbar-left'),
    RightToolbar: require('./components/md-toolbar-right'),
    install: function(Vue) {
        Vue.component('mavon-editor', mavonEditor);
        Vue.component('mavon-render', mavonRender);
    }
};

module.exports = VueMavonEditor;
