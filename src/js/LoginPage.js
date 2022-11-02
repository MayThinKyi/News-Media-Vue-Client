import axios from 'axios'
import {mapGetters} from 'vuex'
    export default {
    name: 'LoginPage',
    data () {
        return {
            userData: {
                email: '',
            password:''
            },
            userDataStatus: 'waiting',
            validateLogin: false


        }
    },
   
        methods: {
            homePage() {
                this.$router.push({
                    name: 'homePage'
                })
            },
            loginPage() {
                this.$router.push({
                    name: 'loginPage'
                })
            },
            login() {
                if (this.userData.email == '' && this.userData.password == '') {
                    this.userDataStatus = false;
                    this.validateLogin = false;
                  

                    
                } else {
                    axios.post('http://127.0.0.1:8000/api/user/login', this.userData)
                        .then((response) => {

                            if (response.data.token == null || response.data.token==undefined) {
                                this.userDataStatus = false;
                                this.validateLogin = true
                                console.log(this.validateLogin)
                               


                            }
                            if (response.data.token == undefined && response.data.user == undefined) {
                                this.validateLogin = true;
                            }
                            if (response.data.token ) {
                                this.$store.dispatch('setToken', response.data.token);
                                this.$store.dispatch('setUserData', response.data.user);
                                this.userDataStatus = true;
                                this.validateLogin = false;
                                this.$router.push({
                                name:'homePage'
                               })
                            }
                          
                            
                        })
                }
               
            }
        }
    }