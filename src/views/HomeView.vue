<script setup lang="ts">
import { ArrowTrendingUpIcon, ClockIcon, UserIcon } from '@heroicons/vue/24/outline';
import { RouterLink } from 'vue-router';

</script>

<template>
  <div class="bg-gray-50 min-h-screen">
    <header
      class="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-400 text-white py-20 px-4 text-center shadow-lg">
      <h1 class="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight">FutureCode</h1>
      <p class="text-lg md:text-2xl mb-8 max-w-2xl mx-auto font-medium">
        A jövő digitális megoldásai - ma. Innováció, megbízhatóság, szakértelem.
      </p>
      <RouterLink to="/kapcsolat"
        class="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow transition">
        Kapcsolatfelvétel
      </RouterLink>
    </header>

    <div class="mx-4">
      <section class="max-w-3xl mx-auto bg-white rounded-xl shadow-md mt-12 p-8">
        <h2 class="text-2xl font-bold mb-4 text-blue-800">Rólunk</h2>
        <p class="text-gray-700 text-lg leading-relaxed">
          A FutureCode egy elhivatott, innovatív szoftverfejlesztő csapat, amely a legmodernebb technológiákkal segíti
          ügyfeleit a digitális átalakulásban.
          Célunk, hogy egyszerű, átlátható és hatékony megoldásokat nyújtsunk vállalkozásod számára – legyen szó
          weboldalról, mobilappról vagy egyedi fejlesztésű rendszerről.
        </p>
      </section>
    </div>

    <section class="max-w-4xl mx-auto mt-12 grid gap-8 md:grid-cols-3 px-4">
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <ClockIcon class="w-12 h-12 text-blue-600 mb-4" />
        <h3 class="font-semibold text-lg mb-2 text-blue-800">Gyorsaság & Rugalmasság</h3>
        <p class="text-gray-600">Villámgyors fejlesztés, rugalmas csapat, amely alkalmazkodik az igényeidhez.</p>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <ArrowTrendingUpIcon class="w-12 h-12 text-blue-600 mb-4" />
        <h3 class="font-semibold text-lg mb-2 text-blue-800">Innováció</h3>
        <p class="text-gray-600">Legújabb technológiákat alkalmazzuk, hogy vállalkozásod a versenytársak előtt járjon.
        </p>
      </div>
      <div class="bg-white rounded-xl shadow p-6 flex flex-col items-center text-center">
        <UserIcon class="w-12 h-12 text-blue-600 mb-4" />
        <h3 class="font-semibold text-lg mb-2 text-blue-800">Ügyfélközpontúság</h3>
        <p class="text-gray-600">Minden projektünket személyre szabottan, az ügyfél igényeit szem előtt tartva
          valósítjuk meg.</p>
      </div>
    </section>
    <div class="mx-4">
      <section class="max-w-2xl mx-auto mt-16 mb-12 bg-blue-900 rounded-xl text-white p-8 text-center shadow-lg">
        <h2 class="text-2xl font-bold mb-4">Készen állsz a digitális fejlődésre?</h2>
        <p class="mb-6 text-lg">
          Vedd fel velünk a kapcsolatot, és egyedi ajánlatot készítünk számodra!
        </p>
        <RouterLink to="/kapcsolat"
          class="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow transition">
          Ajánlatot kérek
        </RouterLink>
      </section>
    </div>
  </div>
</template>
