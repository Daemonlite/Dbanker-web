<script setup>
import { ref } from 'vue'
import Reviews from './Reviews.vue'
import Team from './Team.vue'
import Steps from './Steps.vue';
import Contact from './Contact.vue';
import Footer from './Footer.vue'
import Hero from './Hero.vue'




</script>

<template>
<section>
    <div class="bg-gradient-to-b from-green-50 to-green-100 mt-10">
        

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