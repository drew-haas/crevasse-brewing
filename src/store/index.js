import { createStore } from 'vuex'

export default createStore({
  state: {
    beers: [
      {
        class: 'glacier-ipa',
        name: 'Glacier IPA',
        description: 'Taste the Glacier from the Crevasse',
        alcohol: '',
        ibu: '',
        new: true,
        featured: true
      },
      {
        class: 'medli-ipa',
        name: 'Medli IPA',
        description: 'Best while hiking rocks',
        alcohol: '',
        ibu: '',
        featured: true
      },
      {
        class: 'juneau-stout',
        name: 'Juneau Stout',
        description: 'Only drink in Alaska',
        alcohol: '',
        ibu: ''
      },
      {
        class: 'caetano-pa',
        name: 'Caetano Pale Ale',
        description: 'It\'ll sing to you',
        alcohol: '',
        ibu: ''
      },
      {
        class: 'marvelous-idi',
        name: 'The Marvelous Idi',
        description: 'She thinks she is marvelous',
        alcohol: '',
        ibu: ''
      }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
