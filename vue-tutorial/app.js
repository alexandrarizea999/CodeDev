const app = Vue.createApp({
    // data, functions
    // template: '<h2>I am a template.</h2>'
    data() {
        // we must return an object inside that function
        return {
            url: 'https://www.youtube.com/',
            // it doesn't matter what data type i use 
            showBooks: true,
            books: [
                {title: 'name of the wind', author: 'patrick rothfuss', img: '/assets/1.jpg', isFav: true},
                {title: 'the ways of kings', author: 'brandon sanderson', img: '/assets/2.jpg' ,isFav: false},
                {title: 'the final empire', author: 'patrick rothfuss', img: '/assets/3.jpg', isFav: true}
            ]
        }
    },
    methods: {
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },
        toggleisFav(book){
            book.isFav = !book.isFav
        }
    },
    // it depends on other data
    computed: {
        filteredBooks(){
            // if this filter function return true, it will keep the items in the array
            // if it return false it will filter the item out of the array
            return this.books.filter((book) => book.isFav)
        }
    }
})
app.mount('#app')