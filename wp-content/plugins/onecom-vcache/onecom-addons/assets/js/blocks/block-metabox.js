!function(){"use strict";var e=window.wp.element,__=wp.i18n.__,t=wp.compose.compose,c=wp.data,o=c.withSelect,n=c.withDispatch,r=wp.editPost.PluginDocumentSettingPanel,i=wp.components,a=i.ToggleControl,l=(i.PanelRow,t([o((function(e){return{postMeta:e("core/editor").getEditedPostAttribute("meta"),postType:e("core/editor").getCurrentPostType()}})),n((function(e){return{setPostMeta:function(t){e("core/editor").editPost({meta:t})}}}))])((function(t){var c=t.postType,o=t.postMeta,n=t.setPostMeta;return"post"!==c&&"page"!==c?null:(0,e.createElement)(r,{title:__("Performance Cache","vcaching"),icon:"performance",initialOpen:"true"},(0,e.createElement)(a,{label:__("Exclude from cache","vcaching"),help:o._oct_exclude_from_cache?"This "+c+" will be excluded from cache.":"This "+c+" will be cached.",onChange:function(e){e||(e=0),n({_oct_exclude_from_cache:e})},checked:o._oct_exclude_from_cache}))})));(0,wp.plugins.registerPlugin)("onecom-exclude-cache-plugin",{render:function(){return(0,e.createElement)(l,null)}})}();