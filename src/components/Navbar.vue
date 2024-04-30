<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
    <header class="fixed top-0 left-0 right-0 z-10 bg-green-50 shadow-md ">
        <div class="px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16 lg:h-20">
                <div class="flex-shrink-0">
                    <a href="/" title="" class="flex">
                        <p class="w-auto h-8 text-xl"> Dbanker 🤝 </p>
                    </a>
                </div>

                <button type="button" class="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100" @click="isOpen = !isOpen">
                    <!-- Menu open: "hidden", Menu closed: "block" -->
                    <svg class="block w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isOpen">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <!-- Menu open: "block", Menu closed: "hidden" -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" v-else>
                        <path fill="currentColor" d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12S6.47 2 12 2m3.59 5L12 10.59L8.41 7L7 8.41L10.59 12L7 15.59L8.41 17L12 13.41L15.59 17L17 15.59L13.41 12L17 8.41z" />
                    </svg>
                </button>

                <div class="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10" v-if="!isOpen">
                    <router-link :to="{name:'services'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Services </router-link>

                    <router-link :to="{name:'about'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> About </router-link>

                    <router-link :to="{ name: 'pricing'}" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Pricing </router-link>

                    <div class="w-px h-5 bg-black/20"></div>

                    <a href="#" title="" class="text-base font-semibold text-black transition-all duration-200 hover:text-opacity-80"> Log in </a>

                    <a href="#" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white" role="button"> Get Started</a>
                </div>
            </div>
            <div v-if="isOpen">
                <nav class="border border-grey w-[20rem] bg-slate-800 shadow-md space-y-4 flex flex-col">
                    <router-link :to="{name:'services'}" title="" class="text-base font-semibold text-white hover:text-opacity-80 ml-10 mt-3 "> Services </router-link>
                    <hr>
                    <router-link :to="{name:'about'}" title="" class="text-base font-semibold text-white hover:text-opacity-80 m-10"> About </router-link>
                    <hr>
                    <router-link :to="{ name: 'pricing'}" title="" class="text-base font-semibold text-white hover:text-opacity-80 m-10"> Pricing </router-link>
                    <hr>
                    <a href="#" title="" class="text-base font-semibold text-white hover:text-opacity-80 m-10"> Log in </a>
                    <hr>
                    <a href="#" title="" class="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-grey hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white m-8 " role="button"> Get Started</a>
                    <br>
                </nav>
            </div>
        </div>
    </header>
</template>
