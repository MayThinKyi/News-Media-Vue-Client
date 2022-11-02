<template>
    <div>
   
   <!-- Whats New Start -->
   
    <section class="whats-news-area pt-50 pb-20">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="row">
                      <div class="col-lg-4 mx-auto d-flex mb-5">
                        <button @click="homePage()" style="min-width:120px;padding:25px;font-size:12px;font-weight:600" class="me-3 btn btn-danger text-white">Home</button>
                        <button v-if="loginStatus" @click="loginPage()" style="min-width:120px;padding:25px;font-size:12px;font-weight:600;background-color:black" class="btn btn-dark text-white">Login</button>
                        <button v-if="!loginStatus" @click="logoutPage()" style="min-width:120px;padding:25px;font-size:12px;font-weight:600;background-color:black"
                                                class="btn btn-dark text-white">Logout</button>
 
                    </div>
                    <div class="row d-flex justify-content-between">
                        <div class="col-lg-3 col-md-3">
                            <div class="section-tittle mb-30">
                                <h3>Whats New</h3>
                            </div>
                        </div>
                        <div class="col-lg-9 col-md-9">
                            <div class="properties__button">
                                <!--Nav Button  -->
                                <nav>
                                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                                        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" t role="tab"
                                            aria-controls="nav-home" aria-selected="true" v-on:click="searchCategory('')">All</a>
                                        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" role="tab"
                                            aria-controls="nav-profile" aria-selected="false" v-for="(category,index) in categories"
                                            :key="index" v-on:click="searchCategory(category.title)">{{category.title}}</a>
                    
                                    </div>
                                </nav>
                                <!--End Nav Button  -->
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="row mb-4 ">
                        <div class="offset-10 col-2 d-flex">
                            <input v-on:keyup.enter="searchData()" v-model="searchKey" placeholder="Search Post..." type="text" name="" id="" class="form-control">
                            <i v-on:click="searchData()" class=" mt-2 ms-1 fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                  
                    <h3 v-if="!tokenStatus" class="text-dark">You need to Login First!</h3>
                 
                    <!--  -->
                    <div  v-if="tokenStatus" class="row">
                        <div class="col-12">
                            <!-- Nav Card -->
                            <div class="tab-content" id="nav-tabContent">
                                <!-- card one -->
                                <h3 v-if="posts.length==0" class="text-dark">There is no posts.Thank you...</h3>

                                <div v-else class="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab">
                                    <div class="whats-news-caption">
                                        <div class="row" >
                                            
                                            <div  @click="detailsPage(post.id)"  class="col-lg-4 col-md-6" v-for="(post,index) in posts" :key="index">
                                                <div class="single-what-news mb-100">
                                                    <div class="what-img">
                                                       <img style="height:260px" :src="post.image" alt="">
                                                      


                                                    </div>
                                                    <div class="what-cap">
                                                        <span class="color1"> AZ News</span>
                                                        <h4>
                                                            <a href="details.html">{{post.title}}</a>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
    
                                        </div>

                                    </div>
                                </div>

                                
                               
                            </div>
                            <!-- End Nav Card -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </section>

    <!-- Whats New End -->
    
    <!--Start pagination -->
    <div class="pagination-area pb-45 text-center">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="single-wrap d-flex justify-content-center">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination justify-content-start">
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span class="flaticon-arrow roted"></span></a>
                                </li>
                                <li class="page-item active">
                                    <a class="page-link" href="details.html">01</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">02</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html">03</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="details.html"><span
                                            class="flaticon-arrow right-arrow"></span></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End pagination  -->
    </div>
</template>

<script src="../js/HomePage.js"></script>
