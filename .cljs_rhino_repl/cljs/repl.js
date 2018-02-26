// Compiled by ClojureScript 1.9.946 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__49132){
var map__49133 = p__49132;
var map__49133__$1 = ((((!((map__49133 == null)))?((((map__49133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49133.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49133):map__49133);
var m = map__49133__$1;
var n = cljs.core.get.call(null,map__49133__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__49133__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49135_49157 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49136_49158 = null;
var count__49137_49159 = (0);
var i__49138_49160 = (0);
while(true){
if((i__49138_49160 < count__49137_49159)){
var f_49161 = cljs.core._nth.call(null,chunk__49136_49158,i__49138_49160);
cljs.core.println.call(null,"  ",f_49161);

var G__49162 = seq__49135_49157;
var G__49163 = chunk__49136_49158;
var G__49164 = count__49137_49159;
var G__49165 = (i__49138_49160 + (1));
seq__49135_49157 = G__49162;
chunk__49136_49158 = G__49163;
count__49137_49159 = G__49164;
i__49138_49160 = G__49165;
continue;
} else {
var temp__5457__auto___49166 = cljs.core.seq.call(null,seq__49135_49157);
if(temp__5457__auto___49166){
var seq__49135_49167__$1 = temp__5457__auto___49166;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49135_49167__$1)){
var c__47538__auto___49168 = cljs.core.chunk_first.call(null,seq__49135_49167__$1);
var G__49169 = cljs.core.chunk_rest.call(null,seq__49135_49167__$1);
var G__49170 = c__47538__auto___49168;
var G__49171 = cljs.core.count.call(null,c__47538__auto___49168);
var G__49172 = (0);
seq__49135_49157 = G__49169;
chunk__49136_49158 = G__49170;
count__49137_49159 = G__49171;
i__49138_49160 = G__49172;
continue;
} else {
var f_49173 = cljs.core.first.call(null,seq__49135_49167__$1);
cljs.core.println.call(null,"  ",f_49173);

var G__49174 = cljs.core.next.call(null,seq__49135_49167__$1);
var G__49175 = null;
var G__49176 = (0);
var G__49177 = (0);
seq__49135_49157 = G__49174;
chunk__49136_49158 = G__49175;
count__49137_49159 = G__49176;
i__49138_49160 = G__49177;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_49178 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__46549__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__46549__auto__)){
return or__46549__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_49178);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_49178)))?cljs.core.second.call(null,arglists_49178):arglists_49178));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__49139_49179 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__49140_49180 = null;
var count__49141_49181 = (0);
var i__49142_49182 = (0);
while(true){
if((i__49142_49182 < count__49141_49181)){
var vec__49143_49183 = cljs.core._nth.call(null,chunk__49140_49180,i__49142_49182);
var name_49184 = cljs.core.nth.call(null,vec__49143_49183,(0),null);
var map__49146_49185 = cljs.core.nth.call(null,vec__49143_49183,(1),null);
var map__49146_49186__$1 = ((((!((map__49146_49185 == null)))?((((map__49146_49185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49146_49185.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49146_49185):map__49146_49185);
var doc_49187 = cljs.core.get.call(null,map__49146_49186__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49188 = cljs.core.get.call(null,map__49146_49186__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49184);

cljs.core.println.call(null," ",arglists_49188);

if(cljs.core.truth_(doc_49187)){
cljs.core.println.call(null," ",doc_49187);
} else {
}

var G__49189 = seq__49139_49179;
var G__49190 = chunk__49140_49180;
var G__49191 = count__49141_49181;
var G__49192 = (i__49142_49182 + (1));
seq__49139_49179 = G__49189;
chunk__49140_49180 = G__49190;
count__49141_49181 = G__49191;
i__49142_49182 = G__49192;
continue;
} else {
var temp__5457__auto___49193 = cljs.core.seq.call(null,seq__49139_49179);
if(temp__5457__auto___49193){
var seq__49139_49194__$1 = temp__5457__auto___49193;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49139_49194__$1)){
var c__47538__auto___49195 = cljs.core.chunk_first.call(null,seq__49139_49194__$1);
var G__49196 = cljs.core.chunk_rest.call(null,seq__49139_49194__$1);
var G__49197 = c__47538__auto___49195;
var G__49198 = cljs.core.count.call(null,c__47538__auto___49195);
var G__49199 = (0);
seq__49139_49179 = G__49196;
chunk__49140_49180 = G__49197;
count__49141_49181 = G__49198;
i__49142_49182 = G__49199;
continue;
} else {
var vec__49148_49200 = cljs.core.first.call(null,seq__49139_49194__$1);
var name_49201 = cljs.core.nth.call(null,vec__49148_49200,(0),null);
var map__49151_49202 = cljs.core.nth.call(null,vec__49148_49200,(1),null);
var map__49151_49203__$1 = ((((!((map__49151_49202 == null)))?((((map__49151_49202.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49151_49202.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49151_49202):map__49151_49202);
var doc_49204 = cljs.core.get.call(null,map__49151_49203__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_49205 = cljs.core.get.call(null,map__49151_49203__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_49201);

cljs.core.println.call(null," ",arglists_49205);

if(cljs.core.truth_(doc_49204)){
cljs.core.println.call(null," ",doc_49204);
} else {
}

var G__49206 = cljs.core.next.call(null,seq__49139_49194__$1);
var G__49207 = null;
var G__49208 = (0);
var G__49209 = (0);
seq__49139_49179 = G__49206;
chunk__49140_49180 = G__49207;
count__49141_49181 = G__49208;
i__49142_49182 = G__49209;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__49153 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__49154 = null;
var count__49155 = (0);
var i__49156 = (0);
while(true){
if((i__49156 < count__49155)){
var role = cljs.core._nth.call(null,chunk__49154,i__49156);
var temp__5457__auto___49210__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49210__$1)){
var spec_49211 = temp__5457__auto___49210__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49211));
} else {
}

var G__49212 = seq__49153;
var G__49213 = chunk__49154;
var G__49214 = count__49155;
var G__49215 = (i__49156 + (1));
seq__49153 = G__49212;
chunk__49154 = G__49213;
count__49155 = G__49214;
i__49156 = G__49215;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__49153);
if(temp__5457__auto____$1){
var seq__49153__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49153__$1)){
var c__47538__auto__ = cljs.core.chunk_first.call(null,seq__49153__$1);
var G__49216 = cljs.core.chunk_rest.call(null,seq__49153__$1);
var G__49217 = c__47538__auto__;
var G__49218 = cljs.core.count.call(null,c__47538__auto__);
var G__49219 = (0);
seq__49153 = G__49216;
chunk__49154 = G__49217;
count__49155 = G__49218;
i__49156 = G__49219;
continue;
} else {
var role = cljs.core.first.call(null,seq__49153__$1);
var temp__5457__auto___49220__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___49220__$2)){
var spec_49221 = temp__5457__auto___49220__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_49221));
} else {
}

var G__49222 = cljs.core.next.call(null,seq__49153__$1);
var G__49223 = null;
var G__49224 = (0);
var G__49225 = (0);
seq__49153 = G__49222;
chunk__49154 = G__49223;
count__49155 = G__49224;
i__49156 = G__49225;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
