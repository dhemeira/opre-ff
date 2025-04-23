<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <main class="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h1 class="text-4xl font-extrabold text-blue-900 mb-8 text-center">Áraink</h1>
      <p class="text-gray-700 mb-10 text-center max-w-2xl mx-auto">
        A FutureCode-nál minden projektet egyedi igények alapján árazunk, de az alábbiakban tájékoztató jelleggel
        bemutatjuk a leggyakoribb fejlesztési szolgáltatásaink átlagos árait. A pontos ár minden esetben az
        igényfelmérés és a specifikáció alapján kerül meghatározásra.
      </p>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">Óradíjak</h2>
        <ul class="divide-y divide-blue-100">
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Webfejlesztés</span>
            <span class="text-blue-700 font-semibold">10 000 – 20 000 Ft / óra</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Mobilalkalmazás-fejlesztés</span>
            <span class="text-blue-700 font-semibold">12 000 – 22 000 Ft / óra</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">UX/UI Design</span>
            <span class="text-blue-700 font-semibold">10 000 – 18 000 Ft / óra</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Tanácsadás, konzultáció</span>
            <span class="text-blue-700 font-semibold">15 000 – 25 000 Ft / óra</span>
          </li>
        </ul>
      </section>

      <section class="mb-10">
        <h2 class="text-2xl font-bold text-blue-800 mb-4">Projekt alapú árak (tájékoztató jelleggel)</h2>
        <ul class="divide-y divide-blue-100">
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Egyszerű weboldal (1-3 oldal)</span>
            <span class="text-blue-700 font-semibold">150 000 – 350 000 Ft</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Komplex weboldal vagy webalkalmazás</span>
            <span class="text-blue-700 font-semibold">400 000 – 1 200 000 Ft</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Egyedi szoftverfejlesztés (pl. belső rendszer, CRM)</span>
            <span class="text-blue-700 font-semibold">600 000 – 3 000 000 Ft</span>
          </li>
          <li class="flex justify-between items-center py-3">
            <span class="font-medium text-gray-800">Mobilalkalmazás fejlesztés</span>
            <span class="text-blue-700 font-semibold">700 000 – 2 500 000 Ft</span>
          </li>
        </ul>
        <p class="text-gray-500 text-sm mt-3">
          Az árak tájékoztató jellegűek, a végleges ajánlatot minden esetben részletes egyeztetés után, személyre
          szabottan adjuk meg.
        </p>
      </section>

      <section class="text-center mt-12">
        <h2 class="text-xl font-bold text-blue-800 mb-2">Kérj személyre szabott árajánlatot!</h2>
        <p class="mb-6 text-gray-700">
          Töltsd ki <RouterLink to="/kapcsolat" class="text-blue-600 underline hover:text-blue-800 font-semibold">
            kapcsolati űrlapunkat</RouterLink>,
          és 1 munkanapon belül felvesszük veled a kapcsolatot!
        </p>
        <RouterLink to="/kapcsolat"
          class="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow transition">
          Ajánlatot kérek
        </RouterLink>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
// Itt bővítheted a logikát, ha szükséges
</script>
