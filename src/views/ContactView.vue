<template>
  <div class="bg-gray-50 min-h-screen py-12 px-4">
    <main class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
      <h1 class="text-4xl font-extrabold text-blue-900 mb-8 text-center">Kapcsolat</h1>
      <p class="text-gray-700 mb-10 text-center max-w-xl mx-auto">
        Vedd fel velünk a kapcsolatot az alábbi űrlapon keresztül, vagy írj közvetlenül e-mail címünkre! Minden
        megkeresésre 1 munkanapon belül válaszolunk.
      </p>

      <form class="space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Név</label>
          <input type="text" id="name" name="name" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600"
            autocomplete="name" />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">E-mail cím</label>
          <input type="email" id="email" name="email" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600"
            autocomplete="email" />
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700">Üzenet</label>
          <textarea id="message" name="message" rows="5" required
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-600 focus:border-blue-600"></textarea>
        </div>
        <button type="submit"
          class="w-full inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-md shadow transition">
          Üzenet elküldése
        </button>
      </form>

      <div class="mt-12 text-center text-gray-700">
        <p class="mb-2">
          <span class="font-semibold">E-mail:</span>
          <a href="mailto:info@futurecode.hu" class="text-blue-600 hover:underline">info@futurecode.hu</a>
        </p>
        <p>
          <span class="font-semibold">Telefon:</span>
          <a href="tel:+3612345678" class="text-blue-600 hover:underline">+36 1 234 5678</a>
        </p>
        <p class="mt-6 text-sm text-gray-500">
          FutureCode Kft.<br>
          1111 Budapest, Innováció utca 1.
        </p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// Itt bővítheted a logikát, például űrlapkezeléssel vagy validációval.
</script>
