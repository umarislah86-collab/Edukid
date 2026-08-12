// English — Tahun 6 & Darjah 1
import { EN_YEAR6, EN_DARJAH1, buildReadingSession } from './reading.js';

const ENGLISH = {
  label: "Bahasa Inggeris",
  icon: "📖",
  color: "#FF8C42",

  tahun6: [
    {
      id: "en-t6-phonics",
      title: "Phonics & Abjad",
      icon: "🔤",
      questions: [
        { type:"mcq", q:"Huruf 'A' berbunyi ___", answer:"ah (apple)", options:["ah (apple)","ee (eel)","oh (orange)","uh (umbrella)"] },
        { type:"mcq", q:"🐱 bermula dengan huruf ___", answer:"C", options:["A","B","C","D"] },
        { type:"mcq", q:"Perkataan mana yang berbunyi sama dengan 'cat'?", answer:"bat", options:["dog","bat","run","sit"] },
        { type:"mcq", q:"🍎 dalam Bahasa Inggeris ialah ___", answer:"Apple", options:["Mango","Apple","Orange","Banana"] },
        { type:"mcq", q:"B - _ - G = ?", answer:"BAG", options:["BIG","BUG","BAG","BOG"] },
        { type:"mcq", q:"🐕 dalam Bahasa Inggeris ialah ___", answer:"Dog", options:["Cat","Dog","Cow","Hen"] },
        { type:"mcq", q:"Huruf vokal dalam 'sun' ialah ___", answer:"u", options:["s","u","n","a"] },
        { type:"match", q:"Padankan gambar dengan perkataan", pairs:[
          {left:"🍎", right:"apple"},
          {left:"🐱", right:"cat"},
          {left:"📚", right:"book"},
          {left:"🌙", right:"moon"},
        ]},
        { type:"match", q:"Padankan gambar dengan perkataan", pairs:[
          {left:"🐠", right:"fish"},
          {left:"🌳", right:"tree"},
          {left:"✏️", right:"pencil"},
          {left:"🏠", right:"house"},
        ]},
        { type:"mcq", q:"'C - A - T' spell out ___", answer:"cat", options:["bat","cat","hat","mat"] },
      ]
    },
    {
      id: "en-t6-vocab",
      title: "Kosa Kata Asas",
      icon: "📝",
      questions: [
        { type:"mcq", q:"I ___ to school every day.", answer:"go", options:["goes","go","gone","going"] },
        { type:"mcq", q:"Lawan kata 'big' ialah ___", answer:"small", options:["large","small","tall","fast"] },
        { type:"mcq", q:"🌙 dalam Bahasa Inggeris ialah ___", answer:"Moon", options:["Sun","Star","Moon","Cloud"] },
        { type:"mcq", q:"This is ___ book. (buku sendiri)", answer:"my", options:["his","her","my","their"] },
        { type:"mcq", q:"Satu kucing, dua ___", answer:"cats", options:["cat","cats","cates","catss"] },
        { type:"match", q:"Padankan warna dengan nama", pairs:[
          {left:"🔴", right:"red"},
          {left:"🔵", right:"blue"},
          {left:"🟡", right:"yellow"},
          {left:"🟢", right:"green"},
        ]},
        { type:"mcq", q:"'Happy' bermaksud ___", answer:"Gembira", options:["Sedih","Marah","Gembira","Takut"] },
        { type:"mcq", q:"'Hot' lawan kata ialah ___", answer:"cold", options:["warm","cold","cool","nice"] },
        { type:"mcq", q:"Nombor 'seven' ialah ___", answer:"7", options:["6","7","8","9"] },
        { type:"arrange", q:"Susun: a am I student", words:["I","am","a","student"], answer:"I am a student" },
      ]
    },
    {
      id: "en-t6-read-aloud",
      title: "Read Aloud 🎤",
      icon: "🎤",
      dynamic: true,
      getQuestions: () => buildReadingSession(EN_YEAR6).map(q => ({...q, lang:'en'})),
      questions: [],
    },
  ],

  darjah1: [
    {
      id: "en-d1-grammar",
      title: "Grammar Basics",
      icon: "✏️",
      questions: [
        { type:"mcq", q:"She ___ to the park yesterday.", answer:"went", options:["go","goes","went","going"] },
        { type:"mcq", q:"The dog is ___ than the cat.", answer:"bigger", options:["big","bigger","biggest","more big"] },
        { type:"mcq", q:"There ___ three birds on the tree.", answer:"are", options:["is","am","are","was"] },
        { type:"mcq", q:"I have ___ umbrella.", answer:"an", options:["a","an","the","—"] },
        { type:"mcq", q:"___ you like nasi lemak?", answer:"Do", options:["Is","Am","Do","Are"] },
        { type:"arrange", q:"Susun ayat: to school goes Ali", words:["Ali","goes","to","school"], answer:"Ali goes to school" },
        { type:"mcq", q:"'She ___ a student.' Pilih yang betul.", answer:"is", options:["am","is","are","be"] },
        { type:"mcq", q:"Plural bagi 'child' ialah ___", answer:"children", options:["childs","childrens","children","child"] },
        { type:"mcq", q:"'Yesterday' bermaksud ___", answer:"Semalam", options:["Esok","Hari ini","Semalam","Minggu lepas"] },
        { type:"match", q:"Padankan dengan terjemahan", pairs:[
          {left:"happy", right:"gembira"},
          {left:"sad",   right:"sedih"},
          {left:"angry", right:"marah"},
          {left:"tired", right:"penat"},
        ]},
      ]
    },
    {
      id: "en-d1-comprehension",
      title: "Reading Comprehension",
      icon: "📚",
      questions: [
        { type:"mcq", q:"'Ali runs to school.' — What does Ali do?", answer:"He runs to school", options:["He walks","He runs to school","He drives","He sleeps"] },
        { type:"mcq", q:"Which sentence is correct?", answer:"She is my friend.", options:["She are my friend.","She is my friend.","She am my friend.","She be my friend."] },
        { type:"mcq", q:"The sun rises in the ___", answer:"East", options:["West","North","East","South"] },
        { type:"mcq", q:"Past tense of 'eat' ialah ___", answer:"ate", options:["eated","eating","ate","eaten"] },
        { type:"mcq", q:"'The cat is on the mat.' Where is the cat?", answer:"On the mat", options:["Under the mat","On the mat","Behind the mat","In the mat"] },
        { type:"arrange", q:"Susun: beautiful a is flower this", words:["This","is","a","beautiful","flower"], answer:"This is a beautiful flower" },
        { type:"mcq", q:"'Big' synonym ialah ___", answer:"large", options:["small","tiny","large","thin"] },
        { type:"mcq", q:"'She ___ milk every morning.'", answer:"drinks", options:["drink","drinks","drank","drinking"] },
        { type:"mcq", q:"Opposite of 'day' ialah ___", answer:"night", options:["morning","evening","night","noon"] },
        { type:"mcq", q:"'We ___ in the park yesterday.'", answer:"played", options:["play","plays","played","playing"] },
      ]
    },
    {
      id: "en-d1-read-aloud",
      title: "Read Aloud 🎤",
      icon: "🎤",
      dynamic: true,
      getQuestions: () => buildReadingSession(EN_DARJAH1).map(q => ({...q, lang:'en'})),
      questions: [],
    },
  ]
};

export { ENGLISH };
