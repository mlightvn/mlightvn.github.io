const i={methods:{async paste(a){await navigator.clipboard.readText().then(async t=>await a(t))},async pasteToObject(a=null,t=null){a&&t&&await this.paste(async s=>a[t]=s)},async pasteFromClipboard(a){await this.paste(a)}}};export{i as _};