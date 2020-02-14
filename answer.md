What do you know about Vue ?
- Vue adalah salah satu framework Javascript baru yang digunakan untuk me-render data dari back-end secara asynchronous sehingga dapat menekan waktu FFTB yang berujung pada loading time yang semakin singkat

How to define data in Vue ?
- dengan cara menyematkan tag componentnya pada html.
 Contoh:
 <div>
  <vue-component></vue-component>
 </div>

In Vue What lifecycle you can run after instance created ?
- Ada fase BeforeMount, Mounted, BeforeUpdate, Updated, BeforeDestroy, Destroyed

How to bind vue property to page ?
- Vue.component('blog-post', {
  // camelCase in JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

How to trigger an event and handling it in Vue ?
- Dengan menyematkan v-bind pada tag html-nya. contoh: <button <strong>v-bind:disabled="isButtonDisabled"</strong> >Button</button>

What usage of Computed Properties ?
- properti yang akan menjalankan fungsi sederhana apabila data yang ter-computed mengalami perubahan

What usage of Watch Properties ?
- fungsi yang lebih rumit dari computed yang akan dijalankan apabila data yang ter-watch mengalami perubahan

How to handling input in Vue ?
- dengan menyematkan v-model pada tag input
contoh: <input <strong>v-model="message"</strong> placeholder="edit me">

How to make class html tag receive property ?
- Menggunakan <strong>props</strong> pada component vue-nya, kemudian nama propsnya dipanggil pada saat menyematkan tag componentnya.
contoh:

Vue.component('blog-post', {
  // camelCase in JavaScript
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})

<blog-post post-title="hello!"></blog-post>

How to make conditional rendering in vue ?
- menggunakan v-if. contoh: <h1 v-if="awesome">Vue is awesome!</h1>

How we can render list in vue ?
- menggunakan v-for
contoh: 
<ul id="example-1">
  <li <strong>v-for</strong>="item in items">
    {{ item.message }}
  </li>
</ul>

If we rendering list there must be bind key tag describe usage of it ?
- untuk memberikan atribut unique di tiap list

How we can handling input in vue ?
- dengan menyematkan v-model pada tag input
contoh: <input <strong>v-model="message"</strong> placeholder="edit me">

What is props describe it ? 
- cara untuk mempassing variabel luar ke komponen

What is component in vue ?
- instance di Vue yang dapat digunakan berkali-kali

How to pass property from parent component to child component ?
- Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})

<blog-post title="My journey with Vue"></blog-post>


What is Vuex ?
- vuex adalah state management pada vuejs yang bertugas sebagai centralized store bagi semua component (seperti session/cookie)
