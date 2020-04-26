let planComponent={
  template: '#plan-template',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  methods:{
    select(){
      return console.log('selected')
  }
}
}

let planPickerComponent={
  template:'#plan-picker-template',
  components:{
    plan:planComponent
  },
  data(){
    return {
      plans: ['The Single', 'The Curious', 'The Addict']
    }
  }
}





 new Vue({
   el: '#app',
   components:{
     'plan-picker':planPickerComponent
   }

 })
