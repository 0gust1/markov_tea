<template>
    <section class="credits">
        <h2>C'est quoi ?</h2>
        <p>Le thé de markov est un générateur de <a href="https://fr.wikipedia.org/wiki/Ha%C3%AFku">haikus</a> semi-aléatoire basé sur les <a href="https://fr.wikipedia.org/wiki/Cha%C3%AEne_de_Markov">chaines de Markov</a>.</p>
        <p>Il fonctionne avec un texte, un corpus d'entrée. Ce corpus est découpé en mots ou en groupes de mots (selon <em>l'ordre du modèle</em>), chaque mot ou groupe du texte est lié au mot ou au groupe suivant</p>
        <p>Une fois le texte d'entrée ainsi analysé, on procède à un tirage aléatoire de "phrases", où l'enchainement des mots dépend de l'enchainement des mots dans le texte source</p>
        <p>Chaque phrase générée est ensuite analysée pour en déterminer le nombre de syllabes, si celà satisfait les règles du <em>haiku</em> (5 ou 7 syllabes, en une séquence 5/7/5), le vers est conservé, sinon on recommence le tirage aléatoire.</p>
        <h3>Astuces</h3>
        <p>De façon générale, plus le corpus d'entrée sera volumineux, plus les vers du haiku seront réalistes / crédibles / intéressants</p>
        <p>Attention, l'analyse d'un texte d'entrée peut parfois être longue et demander des ressources en processeur ou mémoire.</p>
        <p>Il peut être intéressant de mélanger plusieurs textes aux styles et aux vocabulaires différents — mais si vous voulez un vrai "mélange" des textes, il faudra que ceux-ci possèdent des mots en commun.<p>
        <p>L'algorithme de comptage de syllabes françaises n'est pas parfait (c'est un authentique "problème difficile"), mettez les loupés sur le compte de la licence poétique :) </p>
        <h2>Crédits:</h2>
        <p><a href="https://github.com/substack/node-markov">Chaines de markov par substack</a></p>
        <p><a href="https://github.com/WhiteFangs/PoetifyJS">Algorithme de comptage de syllabes (fr) par WhiteFangs</a></p>
        <p><a href="https://thenounproject.com/Stephanie%20Wauters/uploads/?i=10676">Théière inspirée de Stephanie Wauters from the Noun Project</a></p>
        <p>Front-end : <a href="http://vuejs.org/">VueJS</a> + webpack, etc.</p>
        <h2>Pour la suite ?</h2>
        <p>Faire une version anglophone ? </p>
        <p>De meilleurs tests ?</p>
   </section>

</template>