<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="format-detection" content="date=no" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Antonio:wght@400;700&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
  />
  <div class="wrap">
    <div class="scroll-top">
      <a id="scroll-top" href=""><span class="hop">screen</span> top</a>
    </div>
    <div class="left-frame-top">
      <div class="panel-1"><a href="">TASK APP</a></div>
      <div class="panel-2">02<span class="hop">-262000</span></div>
    </div>
    <div class="right-frame-top">
      <div class="lcars-text-bar">
        <span class="blink-slower">SIGN &#149; UP</span>
      </div>
      <!-- data-cascade-button-group -->
      <div class="data-cascade-button-group">
        <div class="cascade-wrapper">
          <div class="data-cascade">
            <div class="row-1">
              <div class="dc1">101</div>
              <div class="dc2">7109</div>
              <div class="dc3">1966</div>
              <div class="dc4">1222</div>
              <div class="dc5">2020</div>
              <div class="dc6">1444</div>
              <div class="dc7">102</div>
              <div class="dc8">1103</div>
              <div class="dc9">1935</div>
              <div class="dc10">1940</div>
              <div class="dc11">708</div>
              <div class="dc12">M113</div>
              <div class="dc13">1956</div>
              <div class="dc14">1209</div>
            </div>
            <div class="row-2">
              <div class="dc1">102</div>
              <div class="dc2">8102</div>
              <div class="dc3">1987</div>
              <div class="dc4">044</div>
              <div class="dc5">0051</div>
              <div class="dc6">607</div>
              <div class="dc7">1976</div>
              <div class="dc8">1031</div>
              <div class="dc9">1984</div>
              <div class="dc10">1954</div>
              <div class="dc11">1103</div>
              <div class="dc12">415</div>
              <div class="dc13">1045</div>
              <div class="dc14">1864</div>
            </div>
            <div class="row-3">
              <div class="dc1">103</div>
              <div class="dc2">714</div>
              <div class="dc3">1993</div>
              <div class="dc4">0222</div>
              <div class="dc5">052</div>
              <div class="dc6">1968</div>
              <div class="dc7">2450</div>
              <div class="dc8">746</div>
              <div class="dc9">56</div>
              <div class="dc10">47</div>
              <div class="dc11">716</div>
              <div class="dc12">8719</div>
              <div class="dc13">417</div>
              <div class="dc14">602</div>
            </div>
            <div class="row-4">
              <div class="dc1">104</div>
              <div class="dc2">6104</div>
              <div class="dc3">1995</div>
              <div class="dc4">322</div>
              <div class="dc5">90</div>
              <div class="dc6">1931</div>
              <div class="dc7">1701</div>
              <div class="dc8">51</div>
              <div class="dc9">29</div>
              <div class="dc10">218</div>
              <div class="dc11">908</div>
              <div class="dc12">2114</div>
              <div class="dc13">85</div>
              <div class="dc14">3504</div>
            </div>
            <div class="row-5">
              <div class="dc1">105</div>
              <div class="dc2">08</div>
              <div class="dc3">2001</div>
              <div class="dc4">713</div>
              <div class="dc5">079</div>
              <div class="dc6">1940</div>
              <div class="dc7">LV</div>
              <div class="dc8">426</div>
              <div class="dc9">105</div>
              <div class="dc10">10</div>
              <div class="dc11">1206</div>
              <div class="dc12">1979</div>
              <div class="dc13">402</div>
              <div class="dc14">795</div>
            </div>
            <div class="row-6">
              <div class="dc1">106</div>
              <div class="dc2">31</div>
              <div class="dc3">2017</div>
              <div class="dc4">429</div>
              <div class="dc5">65</div>
              <div class="dc6">871</div>
              <div class="dc7">1031</div>
              <div class="dc8">541</div>
              <div class="dc9">656</div>
              <div class="dc10">764</div>
              <div class="dc11">88</div>
              <div class="dc12">001</div>
              <div class="dc13">27</div>
              <div class="dc14">05</div>
            </div>
          </div>
        </div>
        <!-- /cascade-wrapper -->
        <div class="button-col">
          <div class="button" id="top-left"><a href="">01</a></div>
          <div class="button" id="bottom-left"><a href="">02</a></div>
        </div>
        <div class="button-col">
          <div class="button" id="top-right"><a href="">03</a></div>
          <div class="button" id="bottom-right">
            <PersonalRouter :route="route" :buttonText="buttonText" />
          </div>
        </div>
      </div>
      <!-- Bar bottom -->
      <div class="lcars-bar">
        <div class="lcars-bar-inner"></div>
      </div>
      <!-- /Bar -->

      <!-- Form SignUp -->
      <div class="signUpCont">
        <form @submit.prevent="signUp" class="form-sign-Up buttonForm">
          <div class="form-input-up">
            <label for="email" class="input-field-label-up"
              ><a>Clearance</a></label
            >
            <input
              type="email"
              class="input-field-up"
              placeholder="LEVEL"
              id="email"
              v-model="email"
              required
            />
          </div>

          <div class="form-input-up">
            <label for="name" class="input-field-label-up"
              ><a>Name</a></label
            >
            <input
              type="name"
              class="input-field-up"
              placeholder="NAME"
              id="name"
              v-model="name"
              required
            />
          </div>

          <div class="form-input-up">
            <label for="surname" class="input-field-label-up"
              ><a>Surname</a></label
            >
            <input
              type="surname"
              class="input-field-up"
              placeholder="SURNAME"
              id="SURNAME"
              v-model="surname"
              required
            />
          </div>


          <div class="form-input-up">
            <label for="password" class="input-field-label-up"
              ><a>Security</a></label
            >
            <input
              :type="confirmPasswordFieldType"
              class="input-field-up"
              placeholder="CODE"
              id="password"
              v-model="password"
              required
            />
          </div>
          <div class="form-input-up">
            <label for="password" class="input-field-label-up"
              ><a>Security</a></label
            >
            <input
              :type="confirmPasswordFieldType"
              class="input-field-up"
              placeholder="CONFIRMATION CODE"
              id="password"
              v-model="confirmPassword"
              required
            />
            <i
              class="bi bi-eye-slash"
              @click.prevent="hidePassword = !hidePassword"
            ></i>
          </div>
          <button type="submit">
            <a class="buttonFormUP sunflower">Sign Up</a>
          </button>
        </form>
        <div class="errormsg" v-show="errorMsg">{{ errorMsg }}</div>
      </div>
      <!-- /Form SignIn -->
      <!-- /data-cascade-button-group -->
      <div class="top-corner-bg">
        <div class="top-corner"></div>
      </div>
      <div class="bar-panel">
        <div class="bar-1"></div>
        <div class="bar-2"></div>
        <div class="bar-3"></div>
        <div class="bar-4"></div>
        <div class="bar-5"></div>
      </div>
    </div>
    <!-- /left-frame-top -->
  </div>
  <!-- /wrap -->
</template>
<script setup>
import { ref, computed } from "@vue/reactivity";
import PersonalRouter from "./PersonalRouter.vue";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";

// Route Variables
const route = "/auth/login";
const buttonText = "SIGN IN";

// Input Fields
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

// Error Message
const errorMsg = ref("");

// Show hide password variable
const confirmPasswordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

//Router to push user once SigneUp to Login
const redirect = useRouter();

//arrow function to signUp to supabase with an error timeout method
const signUp = async () => {
  if (password.value === confirmPassword.value) {
    try {
      // calls the user store and send the users info to backend to logIn
      await useUserStore().signUp(email.value, password.value);
      // redirects user to the homeView
      redirect.push({ path: "/auth/login" });
    } catch (error) {
      // displays error message
      errorMsg.value = error.message;
      // hides error message
      setTimeOut(() => {
        errorMsg.value = null;
      }, 5000);
    }
    return;
  }
  errorMsg.value = "CONFIRMATIONS CODES AREN'T CORRECT";
};
</script>

<style scoped>
@import url(../assets/taskApp.css);
</style>
