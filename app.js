const app = new Vue({
    el:'#app',
    data:{
        emails:[]
    },
    methods:{},
    mounted() {
        let i = 0
        while ( i < 10) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response =>{
            console.log(response);
            this.emails.push(response.data.response)

        })
        i++
    }
        
    }


})