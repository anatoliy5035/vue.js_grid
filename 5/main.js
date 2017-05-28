
Vue.component('task-list', {
    template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',
    data() {
        return {
            tasks: [
                {task: 'Go to home', completed: false},
                {task: 'Go back', completed: true},
                {task: 'Go to car', completed: true},
                {task: 'Go to school', completed: false}
            ]
        }
    }
});

Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue({
    el: '#root'
});