<template>
    <div class="container">
      <h1>Le thé de Markov <small>générateur de haikus</small></h1>
      <haiku :haiku="haiku">
      </haiku>
    <nav class="tabs">
        <a class="nav_btn {{tabActive==='markov_model'?'active':''}}" href="" @click="toggleTab('markov_model', $event)" title="changer le modèle">+</a>
        <a class="nav_btn {{tabActive==='credits'?'active':''}}" href="" @click="toggleTab('credits', $event)" title="à propos">?</a>
    </nav>    

   <markov :seed-text="seedText" class="animated" transition="fade" v-show="tabActive==='markov_model'">
   </markov>
   
   <credits class="animated" transition="fade" v-show="tabActive==='credits'">
   
   </credits>
   
   <footer>
    Fait avec <del>amour</del> un ordinateur par <a href="https://twitter.com/0gust1">@0gust1</a>
   </footer>
   
   
</div>
</template>


<script>
import Haiku from './components/Haiku'
import Markov from './components/Markov'
import Credits from './components/Credits'
import haikuGen from './haikuGen'
import seed from './assets/rubayat.txt'
import 'animate.css'

export default {
  components: {
    Haiku,
    Markov,
    Credits
  },
  data: function () {
    return {
      corpusApp: 'blah blah blah',
      title: 'le thé de markov',
      haiku: [],
      seedText: seed,
      markovModel: haikuGen.initializeGenerator(1, seed),
      tabActive: 'none'
    }
  },
  methods: {
    generate: function (event) {
      this.haiku = []
      this.haiku = haikuGen.generateHaiku()
    },
    initializeModel: function (seedtext) {
      this.markovModel = haikuGen.initializeGenerator(1, seedtext)
    },
    toggleTab: function (tab, event) {
      if (this.tabActive === tab) {
        this.tabActive = 'none'
      } else {
        this.tabActive = tab
      }
      event.preventDefault()
    }
  },
  events: {
    'loadText': function (text) {
      this.initializeModel(text)
    },
    'generateHaiku': function () {
      this.generate()
    }
  }
}
</script>

<style>
        body{margin:0; padding:0; font-family: 'Libre Baskerville', serif; color:#333;line-height: 1.5em;}
        *,
        *::before,
        *::after {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
                    box-sizing: border-box;
        }
        
        .wrap.wrap--selected.animated {
            display: inline-block;
            animation-duration: 1s;
            animation-delay: 2s;
            /*animation-iteration-count: infinite;*/
        }
        
        #haiku {}
        #markov_machine{}
        .container{width:70%;
                   margin:0 auto 0 auto; 
                   display: flex; flex-direction:column;
                   min-height: 100vh}
        h1{text-align: center; margin:3em 0 3em 0;}
        h1 small{display: block; font-weight: normal; font-variant: small-caps; font-size: 1rem;}
        :focus{border:1px dotted red;}
        
        .teapot_root{position:relative;}
        .teapot{width:30%;margin:0 auto; display:block; position:relative; left:-1%;}
        .smoke{width:77%;margin:0 auto;display:block; position:absolute; top:-239%; left:10%; pointer-events: none; }
        .btn-generate-haiku{}
        #teapot #teapot_path{fill:none;}
        .btn-generate-haiku #teapot{cursor:pointer;}
        .btn-generate-haiku #teapot:hover #teapot_path{fill:rgb(100,0,0);}
        .haikuZone{position:relative; display:flex; flex-direction:column;}
        .haiku_content{min-height: 12em; padding:2vh 10% 2vh 10%; }
        .haiku__vers{font-size:1.3em;}
        .social_post, .haiku_content{margin: 0rem auto 0rem auto;}
        .social_post {text-align:center;}
        .social_post .social_lnk{display: inline-block; width:2em; height:2em; background-color:#ddd; border-radius:50%; line-height:2em;}
        
        .tabs{text-align: center; margin:1rem 0 3rem 0;}
        
        .nav_btn{display: inline-block; width:2em; height:2em; line-height: 2em; border-radius:50%; border:1px solid #333;text-decoration:none;}
        .nav_btn.active{background-color:#333;color:#fff;}
        .corpus{margin:0; padding:0; border:none;}
        .corpus label{display:block;}
        .corpus_info{position:relative; text-align: right; background-color:#eee; padding:0.5em; margin:0;}
        .corpus textarea{
            display:block; width:100%; height:70vh; padding:1em; background-color: #eee;
            border: none;
            }   
            
        .container footer{padding:3rem 0 5rem 0; text-align:center; font-size:0.7em; color:#999;}
</style>

