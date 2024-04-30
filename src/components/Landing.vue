<script setup>
import { ref } from 'vue'
import Reviews from './Reviews.vue'
import Team from './Team.vue'
import Steps from './Steps.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue'
import Hero from './Hero.vue'


const isOpen = ref(false)
const mobileOpen = ref(false)
</script>

<template>
<section>
    <div class="bg-gradient-to-b from-green-50 to-green-100">
        <header class="">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="#" title="" class="flex">
                        <p class="w-auto h-8 text-xl"> Dbanker 🤝 </p>
                    </a>
                </div>

                <button type="button" class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100" @click="isOpen =!isOpen">
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isOpen">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" v-else>
                        <path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z" /></svg>

                    

                </button>

                <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10" v-if="!isOpen">
                    <router-link :to="{name:'services'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Services </router-link>

                    <router-link :to="{name:'about'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About </router-link>

                    <router-link :to="{ name: 'pricing'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </router-link>

                    <div class="w-px h-5 bg-black/20"></div>

                    <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </a>

                    <a href="#" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Get Started</a>
                </div>

                <div class="" v-if="isOpen">
                <nav class="flex flex-col mt-40 space-y-4">
                    <router-link :to="{name:'services'}" title="" class="text-base font-semibold text-black hover:text-opacity-80"> Services </router-link>
                    
                    <router-link :to="{name:'about'}" title="" class="text-base font-semibold text-black hover:text-opacity-80"> About </router-link>
                    
                    <router-link :to="{ name: 'pricing'}" title="" class="text-base font-semibold text-black hover:text-opacity-80"> Pricing </router-link>
                    
                    <a href="#" title="" class="text-base font-semibold text-black hover:text-opacity-80"> Log in </a>
                    
                    <a href="#" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Get Started</a>
                </nav>
            </div>

                    
                
            </div>
        </div>
    </header>

    <section class="py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div class="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 class="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                        Collaborate remotely, with
                        <div class="relative inline-flex">
                            <span class="absolute inset-x-0 bottom-0 border-b-[30px] border-[#ddd]"></span>
                            <h1 class="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">Dbanker.</h1>
                        </div>
                    </h1>

                    <p class="mt-8 text-base text-black sm:text-xl">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>

                    <div class="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" class="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-orange-500 hover:bg-orange-600 focus:bg-orange-600" role="button"> Start exploring </a>

                        
                    </div>
                </div>

                <div>
                    <img class="w-full" src="https://img.freepik.com/free-vector/business-team-brainstorm-idea-lightbulb-from-jigsaw-working-team-collaboration-enterprise-cooperation-colleagues-mutual-assistance-concept-pinkish-coral-bluevector-isolated-illustration_335657-1651.jpg?size=626&ext=jpg&ga=GA1.2.1903551547.1710236598&semt=sph" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>


<Hero/>

<Reviews/>

<Team/>

<Steps/>

<Contact/>
<Footer/>


</section>
</template>