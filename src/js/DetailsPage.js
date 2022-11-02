import {mapGetters} from 'vuex'
import axios from "axios"
    export default {
    name: 'DetailsPage',
    data () {
        return {
            postId: this.$route.params.id,
            post: {},
            viewCount:0
        }
    },
    computed: {
        ...mapGetters(['getUserData'])
    },
    methods: {
        getPostData(id) {
            let postId = {
                id:this.postId
            }
            axios.post('http://127.0.0.1:8000/api/getPostData', postId)
                .then( (response)=> {
                    if (response.data.post.image == null) {
                        response.data.post.image = "http://127.0.0.1:8000/images/default.png"
                    } else {
                        response.data.post.image = "http://127.0.0.1:8000/storage/" + response.data.post.image;

                    }
                    this.post = response.data.post;
                   
                })
            
        },
        back() {
            this.$router.push({
            name:'homePage'
           })
        },
        setActionLogs() {
            let data= {
                user_id: this.getUserData.id,
                post_id: this.postId
            };
            axios.post('http://127.0.0.1:8000/api/actionLogsData', data)
                .then((response) => {
                    this.viewCount = response.data.data.length;
                    console.log(this.viewCount)
                })
        }
    },
    mounted() {
        this.getPostData(this.postId);
        this.setActionLogs();
        }
    }