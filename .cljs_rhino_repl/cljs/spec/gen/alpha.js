// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__47278__auto__,writer__47279__auto__,opt__47280__auto__){
return cljs.core._write.call(null,writer__47279__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49804 = arguments.length;
var i__48233__auto___49805 = (0);
while(true){
if((i__48233__auto___49805 < len__48231__auto___49804)){
args__48245__auto__.push((arguments[i__48233__auto___49805]));

var G__49806 = (i__48233__auto___49805 + (1));
i__48233__auto___49805 = G__49806;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq49803){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49803));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49808 = arguments.length;
var i__48233__auto___49809 = (0);
while(true){
if((i__48233__auto___49809 < len__48231__auto___49808)){
args__48245__auto__.push((arguments[i__48233__auto___49809]));

var G__49810 = (i__48233__auto___49809 + (1));
i__48233__auto___49809 = G__49810;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq49807){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49807));
});

var g_QMARK__49811 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_49812 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49811){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__49811))
,null));
var mkg_49813 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__49811,g_49812){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__49811,g_49812))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__49811,g_49812,mkg_49813){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__49811).call(null,x);
});})(g_QMARK__49811,g_49812,mkg_49813))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__49811,g_49812,mkg_49813){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_49813).call(null,gfn);
});})(g_QMARK__49811,g_49812,mkg_49813))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__49811,g_49812,mkg_49813){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_49812).call(null,generator);
});})(g_QMARK__49811,g_49812,mkg_49813))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__48362__auto___49833 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__48362__auto___49833){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49834 = arguments.length;
var i__48233__auto___49835 = (0);
while(true){
if((i__48233__auto___49835 < len__48231__auto___49834)){
args__48245__auto__.push((arguments[i__48233__auto___49835]));

var G__49836 = (i__48233__auto___49835 + (1));
i__48233__auto___49835 = G__49836;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49833))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49833){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49833),args);
});})(g__48362__auto___49833))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__48362__auto___49833){
return (function (seq49814){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49814));
});})(g__48362__auto___49833))
;


var g__48362__auto___49837 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__48362__auto___49837){
return (function cljs$spec$gen$alpha$list(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49838 = arguments.length;
var i__48233__auto___49839 = (0);
while(true){
if((i__48233__auto___49839 < len__48231__auto___49838)){
args__48245__auto__.push((arguments[i__48233__auto___49839]));

var G__49840 = (i__48233__auto___49839 + (1));
i__48233__auto___49839 = G__49840;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49837))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49837){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49837),args);
});})(g__48362__auto___49837))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__48362__auto___49837){
return (function (seq49815){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49815));
});})(g__48362__auto___49837))
;


var g__48362__auto___49841 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__48362__auto___49841){
return (function cljs$spec$gen$alpha$map(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49842 = arguments.length;
var i__48233__auto___49843 = (0);
while(true){
if((i__48233__auto___49843 < len__48231__auto___49842)){
args__48245__auto__.push((arguments[i__48233__auto___49843]));

var G__49844 = (i__48233__auto___49843 + (1));
i__48233__auto___49843 = G__49844;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49841))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49841){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49841),args);
});})(g__48362__auto___49841))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__48362__auto___49841){
return (function (seq49816){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49816));
});})(g__48362__auto___49841))
;


var g__48362__auto___49845 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__48362__auto___49845){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49846 = arguments.length;
var i__48233__auto___49847 = (0);
while(true){
if((i__48233__auto___49847 < len__48231__auto___49846)){
args__48245__auto__.push((arguments[i__48233__auto___49847]));

var G__49848 = (i__48233__auto___49847 + (1));
i__48233__auto___49847 = G__49848;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49845))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49845){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49845),args);
});})(g__48362__auto___49845))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__48362__auto___49845){
return (function (seq49817){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49817));
});})(g__48362__auto___49845))
;


var g__48362__auto___49849 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__48362__auto___49849){
return (function cljs$spec$gen$alpha$set(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49850 = arguments.length;
var i__48233__auto___49851 = (0);
while(true){
if((i__48233__auto___49851 < len__48231__auto___49850)){
args__48245__auto__.push((arguments[i__48233__auto___49851]));

var G__49852 = (i__48233__auto___49851 + (1));
i__48233__auto___49851 = G__49852;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49849))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49849){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49849),args);
});})(g__48362__auto___49849))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__48362__auto___49849){
return (function (seq49818){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49818));
});})(g__48362__auto___49849))
;


var g__48362__auto___49853 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__48362__auto___49853){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49854 = arguments.length;
var i__48233__auto___49855 = (0);
while(true){
if((i__48233__auto___49855 < len__48231__auto___49854)){
args__48245__auto__.push((arguments[i__48233__auto___49855]));

var G__49856 = (i__48233__auto___49855 + (1));
i__48233__auto___49855 = G__49856;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49853))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49853){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49853),args);
});})(g__48362__auto___49853))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__48362__auto___49853){
return (function (seq49819){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49819));
});})(g__48362__auto___49853))
;


var g__48362__auto___49857 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__48362__auto___49857){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49858 = arguments.length;
var i__48233__auto___49859 = (0);
while(true){
if((i__48233__auto___49859 < len__48231__auto___49858)){
args__48245__auto__.push((arguments[i__48233__auto___49859]));

var G__49860 = (i__48233__auto___49859 + (1));
i__48233__auto___49859 = G__49860;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49857))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49857){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49857),args);
});})(g__48362__auto___49857))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__48362__auto___49857){
return (function (seq49820){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49820));
});})(g__48362__auto___49857))
;


var g__48362__auto___49861 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__48362__auto___49861){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49862 = arguments.length;
var i__48233__auto___49863 = (0);
while(true){
if((i__48233__auto___49863 < len__48231__auto___49862)){
args__48245__auto__.push((arguments[i__48233__auto___49863]));

var G__49864 = (i__48233__auto___49863 + (1));
i__48233__auto___49863 = G__49864;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49861))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49861){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49861),args);
});})(g__48362__auto___49861))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__48362__auto___49861){
return (function (seq49821){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49821));
});})(g__48362__auto___49861))
;


var g__48362__auto___49865 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__48362__auto___49865){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49866 = arguments.length;
var i__48233__auto___49867 = (0);
while(true){
if((i__48233__auto___49867 < len__48231__auto___49866)){
args__48245__auto__.push((arguments[i__48233__auto___49867]));

var G__49868 = (i__48233__auto___49867 + (1));
i__48233__auto___49867 = G__49868;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49865))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49865){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49865),args);
});})(g__48362__auto___49865))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__48362__auto___49865){
return (function (seq49822){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49822));
});})(g__48362__auto___49865))
;


var g__48362__auto___49869 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__48362__auto___49869){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49870 = arguments.length;
var i__48233__auto___49871 = (0);
while(true){
if((i__48233__auto___49871 < len__48231__auto___49870)){
args__48245__auto__.push((arguments[i__48233__auto___49871]));

var G__49872 = (i__48233__auto___49871 + (1));
i__48233__auto___49871 = G__49872;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49869))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49869){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49869),args);
});})(g__48362__auto___49869))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__48362__auto___49869){
return (function (seq49823){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49823));
});})(g__48362__auto___49869))
;


var g__48362__auto___49873 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__48362__auto___49873){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49874 = arguments.length;
var i__48233__auto___49875 = (0);
while(true){
if((i__48233__auto___49875 < len__48231__auto___49874)){
args__48245__auto__.push((arguments[i__48233__auto___49875]));

var G__49876 = (i__48233__auto___49875 + (1));
i__48233__auto___49875 = G__49876;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49873))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49873){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49873),args);
});})(g__48362__auto___49873))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__48362__auto___49873){
return (function (seq49824){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49824));
});})(g__48362__auto___49873))
;


var g__48362__auto___49877 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__48362__auto___49877){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49878 = arguments.length;
var i__48233__auto___49879 = (0);
while(true){
if((i__48233__auto___49879 < len__48231__auto___49878)){
args__48245__auto__.push((arguments[i__48233__auto___49879]));

var G__49880 = (i__48233__auto___49879 + (1));
i__48233__auto___49879 = G__49880;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49877))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49877){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49877),args);
});})(g__48362__auto___49877))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__48362__auto___49877){
return (function (seq49825){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49825));
});})(g__48362__auto___49877))
;


var g__48362__auto___49881 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__48362__auto___49881){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49882 = arguments.length;
var i__48233__auto___49883 = (0);
while(true){
if((i__48233__auto___49883 < len__48231__auto___49882)){
args__48245__auto__.push((arguments[i__48233__auto___49883]));

var G__49884 = (i__48233__auto___49883 + (1));
i__48233__auto___49883 = G__49884;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49881))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49881){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49881),args);
});})(g__48362__auto___49881))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__48362__auto___49881){
return (function (seq49826){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49826));
});})(g__48362__auto___49881))
;


var g__48362__auto___49885 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__48362__auto___49885){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49886 = arguments.length;
var i__48233__auto___49887 = (0);
while(true){
if((i__48233__auto___49887 < len__48231__auto___49886)){
args__48245__auto__.push((arguments[i__48233__auto___49887]));

var G__49888 = (i__48233__auto___49887 + (1));
i__48233__auto___49887 = G__49888;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49885))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49885){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49885),args);
});})(g__48362__auto___49885))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__48362__auto___49885){
return (function (seq49827){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49827));
});})(g__48362__auto___49885))
;


var g__48362__auto___49889 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__48362__auto___49889){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49890 = arguments.length;
var i__48233__auto___49891 = (0);
while(true){
if((i__48233__auto___49891 < len__48231__auto___49890)){
args__48245__auto__.push((arguments[i__48233__auto___49891]));

var G__49892 = (i__48233__auto___49891 + (1));
i__48233__auto___49891 = G__49892;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49889))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49889){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49889),args);
});})(g__48362__auto___49889))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__48362__auto___49889){
return (function (seq49828){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49828));
});})(g__48362__auto___49889))
;


var g__48362__auto___49893 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__48362__auto___49893){
return (function cljs$spec$gen$alpha$return(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49894 = arguments.length;
var i__48233__auto___49895 = (0);
while(true){
if((i__48233__auto___49895 < len__48231__auto___49894)){
args__48245__auto__.push((arguments[i__48233__auto___49895]));

var G__49896 = (i__48233__auto___49895 + (1));
i__48233__auto___49895 = G__49896;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49893))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49893){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49893),args);
});})(g__48362__auto___49893))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__48362__auto___49893){
return (function (seq49829){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49829));
});})(g__48362__auto___49893))
;


var g__48362__auto___49897 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__48362__auto___49897){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49898 = arguments.length;
var i__48233__auto___49899 = (0);
while(true){
if((i__48233__auto___49899 < len__48231__auto___49898)){
args__48245__auto__.push((arguments[i__48233__auto___49899]));

var G__49900 = (i__48233__auto___49899 + (1));
i__48233__auto___49899 = G__49900;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49897))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49897){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49897),args);
});})(g__48362__auto___49897))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__48362__auto___49897){
return (function (seq49830){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49830));
});})(g__48362__auto___49897))
;


var g__48362__auto___49901 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__48362__auto___49901){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49902 = arguments.length;
var i__48233__auto___49903 = (0);
while(true){
if((i__48233__auto___49903 < len__48231__auto___49902)){
args__48245__auto__.push((arguments[i__48233__auto___49903]));

var G__49904 = (i__48233__auto___49903 + (1));
i__48233__auto___49903 = G__49904;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49901))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49901){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49901),args);
});})(g__48362__auto___49901))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__48362__auto___49901){
return (function (seq49831){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49831));
});})(g__48362__auto___49901))
;


var g__48362__auto___49905 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__48362__auto___49905){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49906 = arguments.length;
var i__48233__auto___49907 = (0);
while(true){
if((i__48233__auto___49907 < len__48231__auto___49906)){
args__48245__auto__.push((arguments[i__48233__auto___49907]));

var G__49908 = (i__48233__auto___49907 + (1));
i__48233__auto___49907 = G__49908;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48362__auto___49905))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48362__auto___49905){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__48362__auto___49905),args);
});})(g__48362__auto___49905))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__48362__auto___49905){
return (function (seq49832){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49832));
});})(g__48362__auto___49905))
;

var g__48375__auto___49930 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__48375__auto___49930){
return (function cljs$spec$gen$alpha$any(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49931 = arguments.length;
var i__48233__auto___49932 = (0);
while(true){
if((i__48233__auto___49932 < len__48231__auto___49931)){
args__48245__auto__.push((arguments[i__48233__auto___49932]));

var G__49933 = (i__48233__auto___49932 + (1));
i__48233__auto___49932 = G__49933;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49930))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49930){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49930);
});})(g__48375__auto___49930))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__48375__auto___49930){
return (function (seq49909){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49909));
});})(g__48375__auto___49930))
;


var g__48375__auto___49934 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__48375__auto___49934){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49935 = arguments.length;
var i__48233__auto___49936 = (0);
while(true){
if((i__48233__auto___49936 < len__48231__auto___49935)){
args__48245__auto__.push((arguments[i__48233__auto___49936]));

var G__49937 = (i__48233__auto___49936 + (1));
i__48233__auto___49936 = G__49937;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49934))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49934){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49934);
});})(g__48375__auto___49934))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__48375__auto___49934){
return (function (seq49910){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49910));
});})(g__48375__auto___49934))
;


var g__48375__auto___49938 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__48375__auto___49938){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49939 = arguments.length;
var i__48233__auto___49940 = (0);
while(true){
if((i__48233__auto___49940 < len__48231__auto___49939)){
args__48245__auto__.push((arguments[i__48233__auto___49940]));

var G__49941 = (i__48233__auto___49940 + (1));
i__48233__auto___49940 = G__49941;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49938))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49938){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49938);
});})(g__48375__auto___49938))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__48375__auto___49938){
return (function (seq49911){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49911));
});})(g__48375__auto___49938))
;


var g__48375__auto___49942 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__48375__auto___49942){
return (function cljs$spec$gen$alpha$char(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49943 = arguments.length;
var i__48233__auto___49944 = (0);
while(true){
if((i__48233__auto___49944 < len__48231__auto___49943)){
args__48245__auto__.push((arguments[i__48233__auto___49944]));

var G__49945 = (i__48233__auto___49944 + (1));
i__48233__auto___49944 = G__49945;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49942))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49942){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49942);
});})(g__48375__auto___49942))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__48375__auto___49942){
return (function (seq49912){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49912));
});})(g__48375__auto___49942))
;


var g__48375__auto___49946 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__48375__auto___49946){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49947 = arguments.length;
var i__48233__auto___49948 = (0);
while(true){
if((i__48233__auto___49948 < len__48231__auto___49947)){
args__48245__auto__.push((arguments[i__48233__auto___49948]));

var G__49949 = (i__48233__auto___49948 + (1));
i__48233__auto___49948 = G__49949;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49946))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49946){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49946);
});})(g__48375__auto___49946))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__48375__auto___49946){
return (function (seq49913){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49913));
});})(g__48375__auto___49946))
;


var g__48375__auto___49950 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__48375__auto___49950){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49951 = arguments.length;
var i__48233__auto___49952 = (0);
while(true){
if((i__48233__auto___49952 < len__48231__auto___49951)){
args__48245__auto__.push((arguments[i__48233__auto___49952]));

var G__49953 = (i__48233__auto___49952 + (1));
i__48233__auto___49952 = G__49953;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49950))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49950){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49950);
});})(g__48375__auto___49950))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__48375__auto___49950){
return (function (seq49914){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49914));
});})(g__48375__auto___49950))
;


var g__48375__auto___49954 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__48375__auto___49954){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49955 = arguments.length;
var i__48233__auto___49956 = (0);
while(true){
if((i__48233__auto___49956 < len__48231__auto___49955)){
args__48245__auto__.push((arguments[i__48233__auto___49956]));

var G__49957 = (i__48233__auto___49956 + (1));
i__48233__auto___49956 = G__49957;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49954))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49954){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49954);
});})(g__48375__auto___49954))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__48375__auto___49954){
return (function (seq49915){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49915));
});})(g__48375__auto___49954))
;


var g__48375__auto___49958 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__48375__auto___49958){
return (function cljs$spec$gen$alpha$double(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49959 = arguments.length;
var i__48233__auto___49960 = (0);
while(true){
if((i__48233__auto___49960 < len__48231__auto___49959)){
args__48245__auto__.push((arguments[i__48233__auto___49960]));

var G__49961 = (i__48233__auto___49960 + (1));
i__48233__auto___49960 = G__49961;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49958))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49958){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49958);
});})(g__48375__auto___49958))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__48375__auto___49958){
return (function (seq49916){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49916));
});})(g__48375__auto___49958))
;


var g__48375__auto___49962 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__48375__auto___49962){
return (function cljs$spec$gen$alpha$int(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49963 = arguments.length;
var i__48233__auto___49964 = (0);
while(true){
if((i__48233__auto___49964 < len__48231__auto___49963)){
args__48245__auto__.push((arguments[i__48233__auto___49964]));

var G__49965 = (i__48233__auto___49964 + (1));
i__48233__auto___49964 = G__49965;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49962))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49962){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49962);
});})(g__48375__auto___49962))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__48375__auto___49962){
return (function (seq49917){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49917));
});})(g__48375__auto___49962))
;


var g__48375__auto___49966 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__48375__auto___49966){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49967 = arguments.length;
var i__48233__auto___49968 = (0);
while(true){
if((i__48233__auto___49968 < len__48231__auto___49967)){
args__48245__auto__.push((arguments[i__48233__auto___49968]));

var G__49969 = (i__48233__auto___49968 + (1));
i__48233__auto___49968 = G__49969;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49966))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49966){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49966);
});})(g__48375__auto___49966))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__48375__auto___49966){
return (function (seq49918){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49918));
});})(g__48375__auto___49966))
;


var g__48375__auto___49970 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__48375__auto___49970){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49971 = arguments.length;
var i__48233__auto___49972 = (0);
while(true){
if((i__48233__auto___49972 < len__48231__auto___49971)){
args__48245__auto__.push((arguments[i__48233__auto___49972]));

var G__49973 = (i__48233__auto___49972 + (1));
i__48233__auto___49972 = G__49973;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49970))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49970){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49970);
});})(g__48375__auto___49970))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__48375__auto___49970){
return (function (seq49919){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49919));
});})(g__48375__auto___49970))
;


var g__48375__auto___49974 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__48375__auto___49974){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49975 = arguments.length;
var i__48233__auto___49976 = (0);
while(true){
if((i__48233__auto___49976 < len__48231__auto___49975)){
args__48245__auto__.push((arguments[i__48233__auto___49976]));

var G__49977 = (i__48233__auto___49976 + (1));
i__48233__auto___49976 = G__49977;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49974))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49974){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49974);
});})(g__48375__auto___49974))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__48375__auto___49974){
return (function (seq49920){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49920));
});})(g__48375__auto___49974))
;


var g__48375__auto___49978 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__48375__auto___49978){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49979 = arguments.length;
var i__48233__auto___49980 = (0);
while(true){
if((i__48233__auto___49980 < len__48231__auto___49979)){
args__48245__auto__.push((arguments[i__48233__auto___49980]));

var G__49981 = (i__48233__auto___49980 + (1));
i__48233__auto___49980 = G__49981;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49978))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49978){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49978);
});})(g__48375__auto___49978))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__48375__auto___49978){
return (function (seq49921){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49921));
});})(g__48375__auto___49978))
;


var g__48375__auto___49982 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__48375__auto___49982){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49983 = arguments.length;
var i__48233__auto___49984 = (0);
while(true){
if((i__48233__auto___49984 < len__48231__auto___49983)){
args__48245__auto__.push((arguments[i__48233__auto___49984]));

var G__49985 = (i__48233__auto___49984 + (1));
i__48233__auto___49984 = G__49985;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49982))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49982){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49982);
});})(g__48375__auto___49982))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__48375__auto___49982){
return (function (seq49922){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49922));
});})(g__48375__auto___49982))
;


var g__48375__auto___49986 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__48375__auto___49986){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49987 = arguments.length;
var i__48233__auto___49988 = (0);
while(true){
if((i__48233__auto___49988 < len__48231__auto___49987)){
args__48245__auto__.push((arguments[i__48233__auto___49988]));

var G__49989 = (i__48233__auto___49988 + (1));
i__48233__auto___49988 = G__49989;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49986))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49986){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49986);
});})(g__48375__auto___49986))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__48375__auto___49986){
return (function (seq49923){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49923));
});})(g__48375__auto___49986))
;


var g__48375__auto___49990 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__48375__auto___49990){
return (function cljs$spec$gen$alpha$string(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49991 = arguments.length;
var i__48233__auto___49992 = (0);
while(true){
if((i__48233__auto___49992 < len__48231__auto___49991)){
args__48245__auto__.push((arguments[i__48233__auto___49992]));

var G__49993 = (i__48233__auto___49992 + (1));
i__48233__auto___49992 = G__49993;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49990))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49990){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49990);
});})(g__48375__auto___49990))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__48375__auto___49990){
return (function (seq49924){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49924));
});})(g__48375__auto___49990))
;


var g__48375__auto___49994 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__48375__auto___49994){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49995 = arguments.length;
var i__48233__auto___49996 = (0);
while(true){
if((i__48233__auto___49996 < len__48231__auto___49995)){
args__48245__auto__.push((arguments[i__48233__auto___49996]));

var G__49997 = (i__48233__auto___49996 + (1));
i__48233__auto___49996 = G__49997;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49994))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49994){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49994);
});})(g__48375__auto___49994))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__48375__auto___49994){
return (function (seq49925){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49925));
});})(g__48375__auto___49994))
;


var g__48375__auto___49998 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__48375__auto___49998){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__48245__auto__ = [];
var len__48231__auto___49999 = arguments.length;
var i__48233__auto___50000 = (0);
while(true){
if((i__48233__auto___50000 < len__48231__auto___49999)){
args__48245__auto__.push((arguments[i__48233__auto___50000]));

var G__50001 = (i__48233__auto___50000 + (1));
i__48233__auto___50000 = G__50001;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___49998))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___49998){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___49998);
});})(g__48375__auto___49998))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__48375__auto___49998){
return (function (seq49926){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49926));
});})(g__48375__auto___49998))
;


var g__48375__auto___50002 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__48375__auto___50002){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__48245__auto__ = [];
var len__48231__auto___50003 = arguments.length;
var i__48233__auto___50004 = (0);
while(true){
if((i__48233__auto___50004 < len__48231__auto___50003)){
args__48245__auto__.push((arguments[i__48233__auto___50004]));

var G__50005 = (i__48233__auto___50004 + (1));
i__48233__auto___50004 = G__50005;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___50002))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___50002){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___50002);
});})(g__48375__auto___50002))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__48375__auto___50002){
return (function (seq49927){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49927));
});})(g__48375__auto___50002))
;


var g__48375__auto___50006 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__48375__auto___50006){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__48245__auto__ = [];
var len__48231__auto___50007 = arguments.length;
var i__48233__auto___50008 = (0);
while(true){
if((i__48233__auto___50008 < len__48231__auto___50007)){
args__48245__auto__.push((arguments[i__48233__auto___50008]));

var G__50009 = (i__48233__auto___50008 + (1));
i__48233__auto___50008 = G__50009;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___50006))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___50006){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___50006);
});})(g__48375__auto___50006))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__48375__auto___50006){
return (function (seq49928){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49928));
});})(g__48375__auto___50006))
;


var g__48375__auto___50010 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__48375__auto___50010){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__48245__auto__ = [];
var len__48231__auto___50011 = arguments.length;
var i__48233__auto___50012 = (0);
while(true){
if((i__48233__auto___50012 < len__48231__auto___50011)){
args__48245__auto__.push((arguments[i__48233__auto___50012]));

var G__50013 = (i__48233__auto___50012 + (1));
i__48233__auto___50012 = G__50013;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});})(g__48375__auto___50010))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__48375__auto___50010){
return (function (args){
return cljs.core.deref.call(null,g__48375__auto___50010);
});})(g__48375__auto___50010))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__48375__auto___50010){
return (function (seq49929){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49929));
});})(g__48375__auto___50010))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__48245__auto__ = [];
var len__48231__auto___50016 = arguments.length;
var i__48233__auto___50017 = (0);
while(true){
if((i__48233__auto___50017 < len__48231__auto___50016)){
args__48245__auto__.push((arguments[i__48233__auto___50017]));

var G__50018 = (i__48233__auto___50017 + (1));
i__48233__auto___50017 = G__50018;
continue;
} else {
}
break;
}

var argseq__48246__auto__ = ((((0) < args__48245__auto__.length))?(new cljs.core.IndexedSeq(args__48245__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__48246__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__50014_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__50014_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq50015){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq50015));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__50019_SHARP_){
return (new Date(p1__50019_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map
