import { SupabaseAuthClient } from "@supabase/supabase-js/dist/module/lib/SupabaseAuthClient";
import { defineStore } from "pinia";
import { supabase } from "../supabase";
export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {

    //Fetch to users
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

    //Fetch to signup
    async signUp(email, password) {
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
    //Fetch to signin
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email, 
        password: password,
      },
      {
        shouldCreateUser: false,
      });
      if (error) throw error;
      if (user) {
        this.user = user;
        console.log(this.user);
      }
    },
    //Fetch to signout
    async singOut(){
      const {error} = await supabase.auth.signOut();
      if (error) throw error;
    }
  },
  // To remain loged in 
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
});
