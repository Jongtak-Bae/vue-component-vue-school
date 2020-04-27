let todoItemComponent = {
  template: '#todo-item-template',
    data(){
      return{
        completed:false
      }
    }


}



new Vue({
  el: '#app',
  components: {
    'todo-item': todoItemComponent
  }
})
