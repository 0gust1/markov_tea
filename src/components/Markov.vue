<template>
     <section id="markov_machine" class="markov_model">
        <form action="">
            <h2>Préparez votre infusion</h2>
            <fieldset class="corpus">
                <label for="texte_source">Copiez-collez votre corpus : </label>
                <p class="corpus_info">
                   <span>{{charCount}} caractères</span>, <span>{{wordCount}} "mots"</span>
                </p>
                <textarea name="" id="texte_source" cols="30" rows="10" v-model="seedText" debounce="300">

                </textarea>
                

                <button type="button" id="charger_machine" @click="loadText()">Infuser</button>
            </fieldset>
             
            <h3>prêt à l'emploi</h3>
            <p>Manuel Valls + Rimbaut + Cantique des cantiques : <button type="button">Charger ce corpus</button></p>
            
        </form>
    </section>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      corpus: 'Hello corpus!'
    }
  },
  props: {
    seedText: String
  },
  methods: {
    loadText: function () {
      this.$dispatch('loadText', this.seedText)
    }
  },
  computed: {
    wordCount: function () {
      return this.seedText.split(/\s+/).length
    },
    charCount: function () {
      return this.seedText.length
    }
  }
}
</script>