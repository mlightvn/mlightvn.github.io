import{l as t}from"./lodash-026a56df.js";import{j as i}from"./index-088b151d.js";const n={data(){return{input:{},output:{},origin:null}},methods:{init(){this.origin={input:t.cloneDeep(this.input),output:t.cloneDeep(this.output)}},handleReset(){this.input=t.cloneDeep(this.origin.input),this.output=t.cloneDeep(this.origin.output)}},created:function(){this.init()}},u=i({...n,__name:"InputOutputVariablesMixin",setup(e){return()=>{}}});export{u as _};
