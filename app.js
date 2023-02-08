const app = Vue.createApp({
    //template
    //template: '<h2>Whataaa</h2>'
    data(){
        return{
            showBook: true,
            title: "Start",
            age:33,
            blob: "dsv",
            x:0,
            y:0,
            books: [
                { title: 'wonder woman', author: 'dc-comic', img: 'assets/1.jpg', isFav:true},
                {title: 'wonder ant', author: 'dc-comic', img: 'assets/1.jpg', isFav:true},
                {title: 'wonder wo', author: 'dc-comic', img: 'assets/1.jpg', isFav:true}

            ]
        }
    },
    methods: {
        thisBasic(){
            const timeLeft = this.$el.querySelector("#time-left");
            console.log(this.thisBasic)
        }
        // changeTitle(title){
        //    // this.title = "The Spare"
        //    this.title = title
        // },
        // toggleBooks(){
        //     this.showBook = !this.showBook

        // },
        // handleEvent(e, data){
        //     console.log(e, e.type)
        //     if(data){
        //         console.log(data)
        //     }
        // },
        // handleMouse(e){
        //     this.x = e.offsetX,
        //     this.y = e.offsetY

        // }
    }
  
})

app.mount('#app')