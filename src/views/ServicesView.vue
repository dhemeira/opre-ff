<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <main class="max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h1 class="text-4xl font-extrabold text-blue-900 mb-8 text-center">Szolgáltatásaink</h1>
      <p class="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
        A FutureCode szakértői csapata széleskörű digitális megoldásokat kínál, hogy vállalkozásod minden igényét
        lefedje. Fedezd fel szolgáltatásainkat, és találd meg a számodra legmegfelelőbbet!
      </p>

      <section class="grid gap-10 md:grid-cols-2">
        <!-- Webfejlesztés -->
        <article class="flex flex-col bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <div class="flex items-center mb-4">
            <GlobeAltIcon class="w-10 h-10 text-blue-600 mr-4" />
            <h2 class="text-2xl font-semibold text-blue-900">Webfejlesztés</h2>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Reszponzív, modern weboldalak és webalkalmazások fejlesztése Vue, React és más népszerű technológiákkal. Az
            egyedi igényekre szabott megoldások garantálják a maximális felhasználói élményt és üzleti hatékonyságot.
          </p>
        </article>

        <article class="flex flex-col bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <div class="flex items-center mb-4">
            <DevicePhoneMobileIcon class="w-10 h-10 text-blue-600 mr-4" />
            <h2 class="text-2xl font-semibold text-blue-900">Mobilalkalmazás-fejlesztés</h2>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Android és iOS applikációk tervezése és kivitelezése, natív és cross-platform megoldásokkal. Segítünk, hogy
            mobil jelenléted erős és felhasználóbarát legyen.
          </p>
        </article>

        <article class="flex flex-col bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <div class="flex items-center mb-4">
            <PlusIcon class="w-10 h-10 text-blue-600 mr-4" />
            <h2 class="text-2xl font-semibold text-blue-900">UX/UI Design</h2>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Felhasználóbarát, letisztult és esztétikus felületek tervezése, amelyek támogatják az üzleti célokat és
            növelik a felhasználói elégedettséget.
          </p>
        </article>

        <article class="flex flex-col bg-blue-50 rounded-lg p-6 shadow hover:shadow-lg transition">
          <div class="flex items-center mb-4">
            <BookOpenIcon class="w-10 h-10 text-blue-600 mr-4" />
            <h2 class="text-2xl font-semibold text-blue-900">Tanácsadás & Digitalizáció</h2>
          </div>
          <p class="text-gray-700 leading-relaxed">
            Segítünk a digitális stratégia kialakításában, üzleti folyamatok automatizálásában és hatékonyság
            növelésében, hogy vállalkozásod a jövőben is versenyképes maradjon.
          </p>
        </article>
      </section>

      <div class="text-center mt-12">
        <RouterLink to="/kapcsolat"
          class="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow transition">
          Kérj egyedi ajánlatot
        </RouterLink>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { BookOpenIcon, DevicePhoneMobileIcon, GlobeAltIcon, PlusIcon } from '@heroicons/vue/24/outline';

// Itt bővítheted a logikát, ha szükséges
</script>
