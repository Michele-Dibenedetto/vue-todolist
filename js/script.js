var app = new Vue({
    el: "#root",
    data: {
        task: "",
        list: [],
    },
    methods: {
        addtasks: function() {
            this.list.push(this.task);
            this.task = "";
        },
        removetasks: function(index) {
            this.list.splice(index,1)
        }
    }
})