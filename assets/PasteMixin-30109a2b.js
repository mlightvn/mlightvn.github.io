const s={methods:{async paste(a){await navigator.clipboard.readText().then(async t=>await a(t))},async pasteFromClipboard(a){await this.paste(a)}}};export{s as _};
