<script setup>
import HelloWorld from './components/HelloWorld.vue'
import MainLayout from './Layouts/MainLayout.vue';

const listSidebar = [
  { title: 'Home Page', active: false, icon: 'home', url: '/' },
  {
    title: 'Home Page 2', active: true, icon: 'home', id: 'user',
    children:
      [
        { title: 'Home Page', active: false, icon: 'home', url: '' },
        { title: 'Home Page', active: false, icon: 'home', url: '' },
      ]
  },
  { title: 'Home Page', active: false, icon: 'home', url: '' },
  { title: 'Home Page', active: true, icon: 'home', url: '' },
  {
    title: 'Home Page', active: false, icon: 'home', id: 'moawia',
    children:
      [
        { title: 'Home Page', active: false, icon: 'home', url: '' },
        { title: 'Home Page', active: false, icon: 'home', url: '' },
      ]
  },
  {
    title: 'Home Page', active: false, icon: 'home', id: 'tow',
    children:
      [
        { title: 'Home Page', active: false, icon: 'home', url: '' },
        { title: 'Home Page', active: false, icon: 'home', url: '' },
      ]
  },
]
</script>

<template>
  <MainLayout :listItems="listSidebar">
    <template #header>HelloWorld</template>
    <template #aside>HelloWorld</template>
    <template #content>
      <HelloWorld msg="Vite + Vue hgfhgf hgfhfghfgh fgh fgh" />

      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ...
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Understood</button>
            </div>
          </div>
        </div>
      </div>

    </template>
  </MainLayout>
</template>
