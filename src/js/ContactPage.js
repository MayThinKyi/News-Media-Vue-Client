import axios from 'axios'
    export default {
    name: 'ContactPage',
    data () {
        return {
            contactData: {
                message: '',
                name: '',
                email: '',
                subject: ''
           }
        }
    },
    methods: {
        send() {
            axios.post('http://127.0.0.1:8000/api/getContactData', this.contactData)
                
            
                
                    
       }
    }
    }
 