<template>
    <div class="row">
        <div class="row my-5 ms-lg-5 ms-3" >
            <div class="col-lg-4 mx-auto d-flex">
                <button @click="homePage()" style="min-width:120px;padding:25px;font-size:12px;font-weight:600"
                    class="me-3 btn btn-danger text-white">Home</button>
                <button @click="loginPage()"
                    style="min-width:120px;padding:25px;font-size:12px;font-weight:600;background-color:black"
                    class="btn btn-dark text-white">Login</button>
            </div>
        
        </div>
        <div class="col-lg-5 mb-5 mx-auto card shadow-sm rounded p-4">
            
            <div class="mb-3" v-if="validateLogin===true ">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    The Credentials do not match!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
            
            <!--
            <div class="mb-3" v-if="userDataStatus===true">
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                   Login Success!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>
        -->
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input  v-model="userData.email" type="email" class="form-control" placeholder="Enter your email...">
                
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input v-model="userData.password" type="password" class="form-control" placeholder="Enter your password...">

            </div>
           
            <button @click="login()"  style="min-width:120px;padding:25px;font-size:12px;font-weight:600"
                class="w-25 mx-auto me-3 btn btn-danger text-white">Login</button>
        </div>
        
    </div>
</template>

<script src="../js/LoginPage.js"></script>

