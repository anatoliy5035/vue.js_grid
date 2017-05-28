
Vue.component('tabs', {
    template: `
        <div class="wrap">
             <div class="tabs">
                <ul>
                    <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">
                        <a href="#" @click = 'selectedTab(tab)'>
                            {{tab.name}}
                        </a>
                    </li>
                </ul>
             </div>
                
            <div class="tabs-detail">
                <slot></slot>
            </div>
        </div>
        `,

    data() {
        return {
            tabs: []
        }
    },

    methods: {
        selectedTab(selectTab) {
          this.tabs.forEach(tab => {
              tab.isActive = (tab.name == selectTab.name);
          });
        }
    },


    created() {
        this.tabs = this.$children;
    }
});

Vue.component('tab', {
    template: `
      <div v-show="isActive">
        <slot></slot>
      </div>
    `,

    data() {
        return {
            isActive: false
        }
    },

    mounted() {
        this.isActive = this.selected;
    },

    props: {
        name: {required: true},
        selected: {default: false}
    }
});

new Vue({
    el: '#root'
});