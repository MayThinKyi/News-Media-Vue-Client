import axios from "axios"
import { mapGetters } from "vuex"
    export default {
    name: 'HomePage',
    data () {
        return {
            posts: [],
            categories: [],
            searchKey: '',
            tokenStatus: false,
            loginStatus: true,
        }
    },
    methods: {
            getPostData () {
                   axios.get('http://127.0.0.1:8000/api/getPostData')
                       .then((response) => {
                           for (let i = 0; i < response.data.posts.length; i++){
                               if (response.data.posts[i].image != null) {
                                  response.data.posts[i].image = "http://127.0.0.1:8000/storage/" + response.data.posts[i].image;
                               } else {
                                   response.data.posts[i].image = "http://127.0.0.1:8000/images/default.png";
                               }
                           }
                           this.posts = response.data.posts;
                        
                           
            })
        },
        
        getCategoryData() {
            axios.get('http://127.0.0.1:8000/api/getCategoryData')
                .then(((response) => {
                    this.categories = response.data.categories;
            }))
        },
        searchData() {
            let searchKey = {
                searchKey:this.searchKey
            };
            axios.post('http://127.0.0.1:8000/api/searchData',searchKey)
                .then((response) => {
                for (let i = 0; i < response.data.searchData.length; i++){
                               if (response.data.searchData[i].image != null) {
                                  response.data.searchData[i].image = "http://127.0.0.1:8000/storage/" + response.data.searchData[i].image;
                               } else {
                                   response.data.searchData[i].image = "http://127.0.0.1:8000/images/default.png";
                               }
                           }
                this.posts = response.data.searchData;
            })
        },
        searchCategory(key) {
            let searchKey = {
               searchKey:key
           }
            axios.post('http://127.0.0.1:8000/api/searchCategory', searchKey)
                .then((response) => {
                     for (let i = 0; i < response.data.data.length; i++){
                         if (response.data.data[i].image != null) {
                            response.data.data[i].image = "http://127.0.0.1:8000/storage/" +response.data.data[i].image;
                        } else {
                           response.data.data[i].image = "http://127.0.0.1:8000/images/default.png";
                        }
                           }
                    this.posts = response.data.data;
            })
               
        },
        detailsPage(id) {
            this.$router.push({
                name: 'detailsPage',
                params: {
                    id:id
               }
            })
            
        },
        homePage() {
            this.$router.push({
                name:'homePage'
            })
        },
        loginPage() {
            this.$router.push({
                name:'loginPage'
            })
            this.loginStatus = false;
        },
        logoutPage() {
            this.$store.dispatch('setToken', '');
            this.$store.dispatch('setUserData', '');
            this.loginStatus = true;
            console.log(this.$store.state.userData, this.$store.state.token);
        }
        
    },
    computed: {
        ...mapGetters(['getToken'])
    },
    mounted () {
        this.getPostData();
        this.getCategoryData();
        if (this.getToken == null || this.getToken == '') {
            this.tokenStatus = false;
          
        } else {
            this.tokenStatus = true;
            this.loginStatus = false;
        }
       
    }
}
   