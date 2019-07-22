var Saoma=Vue.extend({template:'#saoma'});
var Mima=Vue.extend({template:'#mima'});
var routes=[
			{path:'/saoma',component:Saoma},
			{path:'/mima',component:Mima}
			]
		
			var router=new VueRouter({
				routes
				
			})
			var vm=new Vue({
				el:"#box",
				data:{
					msg:"ture"
				},
				router:router,
				methods:{
					change(){
						this.msg=!this.msg
						if(this.msg){
						    this.$router.push({path:'/saoma'})
						}
						else{
							this.$router.push({path:'/mima'})
						}
					}
				}
			})
		router.push('/saoma');