//配置安装插件


// **整体引入全局使用**

import Vue from 'vue';


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import '../assets/theme/index.css' //使用自定义主题

// import locale from 'element-ui/lib/locale/lang/en'

// Vue.use(ElementUI,{ locale });
Vue.use(ElementUI);


//**按需引入**
/* import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';


import { Button } from 'element-ui';
// Vue.component(Button.name, Button);//注册到全局   √
Vue.use(Button)
 */

/* import { Xxxx } from 'element-ui';
// Vue.component(Xxxx.name, Xxxx);//注册到全局   √
Vue.use(Xxxx)
 */