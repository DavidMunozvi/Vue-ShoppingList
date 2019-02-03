new Vue({
  el: '#root',
  data:{
    newItem:'',
    elements:[
      {item:'Pan'},
      {item:'Leche'},
      {item:'Manzanas'},
      {item:'Mantequilla'},
      {item:'Mermelada'}
    ]
  },

  methods: {

    newitem(item) {
      if(item != ''){
      this.elements.push({item:item})
      this.newItem = ''
    }else{
      alert('introduce a new item')
    }
    },

    deleteitem(item) {
      if(confirm('Are you sure you want to eliminate '+item.item+'?')){
      let index = this.elements.indexOf(item)
      this.elements.splice(index,1)
      }
    }

  }
})