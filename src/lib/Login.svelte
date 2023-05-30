<script lang="ts">
  import { onMount } from "svelte";
  import { session } from "../stores/session-store";
  import "../../public/scripts/selection-form";
  import "../../public/scripts/style.css";
  let username, password;

  function handleSubmitClick() {
    if (!username || !password) {
      alert("Input missing");
      return;
    }

    if (username === "username" && password === "password") {
      //save session to store
      session.update((ses) => {
        sessionStorage.setItem("session", "1");
        return 1;
      });
    } else {
      alert("Invalid login credentials");
    }
  }

  function handleLogoutClick() {
    sessionStorage.setItem("session", "");
    $session = undefined;
  }

  onMount(async () => {
    $session = sessionStorage.getItem("session") as unknown as number;
    console.log("$session", $session);
  });
</script>

{#if !$session}
  <form>
    <input bind:value={username} required placeholder="Username" />

    <input bind:value={password} required placeholder="Password" />

    <button on:click|preventDefault={handleSubmitClick} type="submit">
      Submit
    </button>
  </form>
{:else}
  <my-selection-form />

  <button on:click|preventDefault={handleLogoutClick}>Logout</button>
{/if}
