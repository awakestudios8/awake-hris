import React, { useState, useCallback, useEffect } from "react";
import { Home, Clock, Calendar, Wallet, FileText, Shield, Upload, Users, Bell, LogOut, Menu, Check, X, Plus, Trash2, Edit3, AlertTriangle, UserCheck, TrendingUp, Key, Sun, Coffee } from "lucide-react";

const LW="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAQpUlEQVR42u1ce7hWVZl/9/q+wzmgAgoqIKiAg0hSqCkjplBiIRqg4iVGUixvWSnW0wx5Gy+lYl4wdXImU7uhpKaWqcVcMqUwdcobepi8cjQQuZ7zXfZe7/71R7+Fb9vvnHAEPdT6Pc9+zvftvfbae633fvmOSERERERERERERERERERERERERERERERERERERERERERERERERMSmRPK3ujAAzqwvERHwSHhokiSILND5Biabah4ApSgh73zznXmHPEmS3I5pbW1tHjFiRP0dzltKkkT5eZiIjBaRiqrulyTJGOfcIBGpiMjDtVrt1paWlpdFRP6uJYWqpNH5HYKUAHDVanXXdyJRQSoADARwPYB1eDuWArgZwGwAYzalZG6pxCiJiKxbt257AB8FcKf3/p8BjMqy7GAzbqs0TQ/qZOOTLogxDcBrBSK8DOBSAB98L1XnlkCMsoiI9/5YACsKm/YGgKsB9ATgAIwAcIq1BzxfNvMNsPMC+KyZzwNYBuAHAPZo8C7NjST174kYYVP3VdUqNy3nxqWGKFtz3EkArrEbbubqD+Cqer2+Z9jANE33AaCcby2Axap6CceUAwGyLJtUr9dHdyUZAPo1eKb7m7MZ1O2vcvNXAsgMN+cA7lmwYEEJwD8AWExV09vc/wHv/Tmq+jqA7/NcE4ASgCdIEKjqakpXr6J0knBveu9nA2gJ6o+HA7A9gMv4uURiloyqdDySLZUYCRfWQ1UXkQB/VNWruIEaCENbMgJAjeN+HzY1y7Ijw4YT+xqO/rI5vx7A9NbW1mZV/S8AFwPYruA4hPmvD9ILoImf71XVXxTd5kYOxhZJFKPfv2s27Vh6QSAxPACkaXoQgKODOvPen2827Lc83wFAvfdfJrF3A9DOa68BGMt7HuS5dgCtAD7X0dGxE4B/ClKpqrdzbAv/foXXTuD37QDMVtWfAFilqj8EMIFMM3BLNuLnGGL8kNf+yO9BzSiAvqp6JdUXSJyEBIQhIACcynnu4/0rghcViK2qr5j7UgD9VXWxsV/jjDo8nfdcz2d+lU5BETcAeIGEvhNAr0ZeX7clRpZl081iXqNNGGeIEQjyB973kBn/SZ57AcBLAJaYzdwBwGFm7EyOPYXfz6EdyvmMuyhpq3j9cSO9nwOwWlWv4PdfF4hQBzAfwEDv/VdI3FxVHwewdbe1KeSUMoAe/L4XVUwOoJqm6VgRESMFG9QVgNt5/5tmIw4EcAI/fwbA82Ez29raetHow3t/Lp93AK//Jx2I1NidmWma7m/mPof3zFbVpwHsTGk+i9cr/NvG+7b33p9dINQRjbzAbiUR5vuO5OogCTcDGANgOjke1qAD+DyAoQWuHE+CXgPg2g0BhvdzGOjBe38BnzdYVZcBWA2gJcuygwse3CAAc4366gvgZI4fTGKcyuvB6C8CcCKAK+nFLQHwMzLP97z3nyIDum4nGfzbS1X/FcC3ATxX0PmdIXDwh7Msm2DOL6f6WkX39JdB0gBcVSBGX1V9hPctU9VvcvPC3M8DSFT1GarH+wF8EQDq9fqedIfHGqmFqt4NYDSAsQBGtbW19dpSXNpwfNZ4QjZaBg34fwOYo6q/Mno9N+qhH4BtAKzhhgRCzuCzXjJuLQBckWXZx1R1IYD/M8+7EMBZ3Fg1hngHOg65Sa3k3vvzOP9PQqCqqk8CaG4UTxXik6TbSQVtwi0FL2hD9E2d3MdE2Mu58Nxs2JOB0ws25GGj/tYbAt4HYLyq3sUgMeAUw+0p1V4O4AgAMwtMoubzBO/9Z8w8+xWzDAsWLCh129gjRKzLly/fWlXv4CJ+DOA2bkBKLr8jiDpVxn0FNRbUQ4i6R3GTMs6zP5+1r/HIlgAYBmAwVdxyznWh4eL/NbYCAPZU1Qc558rg4hqGePOCCy5wAI4E8HK9Xh+zcuXK3lRXZ9J+3NdtParwUsysXpqm6UcA7E21ErhuaZZlk7gwR3d3pdHTSg7OvPezOe8Uw6U/MMSfYc7PExHp6OgYzNwXVPVmju2tqvMLm70UwMeC16SqV1Gqf2SYogbgUM7RU1VvYj4sL6jg8TYv163BdENQCetV9VIAewRuYu7Icq3FR7nQy/n9CzbBx2DtSWaIvwPABQPNiLwJQDlN030ZUxxL17dt7dq1/QBcwbGvU226er0+mvYqSF67qt6bZdkh9NhuM++3CsBvAAzp1ikTE1gNV9WKMdS/997PMt7XrlxUIMa/AZgH4A+q+jVuflBpV4f5GWv0rNVqI2lEhwLYnpv1EoBPmhS8K7zb9QCO4+f5fK9ZNmNMh0CNmgSAtWmajuOYcwFMBbDjlpRO3x/AM0b8c1X9dUgK1mq1Uaq61HDbEgB92tvbBxiOCyqw2dYqyPmn28323gf9v1sDtzt57LHHmnjfCWE+VX0CwJmBicy7f+kv/G/VNgC7N1JL79ar2qy2xyxomCk0+eBd1ev1vXl9CCXlEB4TGFN0VsLdpuA47E6pWuy9n2Ei7ckm9Z40klwA/UVE2tvbB6jqL6mqEkP8MqXy2wBaqRb3CfMW5mv6/zo+m93emAX1MXo8M+roXLNZPbqYJ+SiLmY29Ska6XsZR5QAHGq49ypVXWHihmYTD5T5ORwb4oU0TfcDMMTED3/BqVzLVsX3o7qcyBjmeQA3MvvbaSLREKHc4NrwkBHYZJJiahtOVX/egBiPmk0JaqSHUUW9vfczVPWeQryBguq4kePnUvevodr7xiZkrIGF0nALidw3y7KDVfXRBq92QCfqzDWo8feo1WqjqDofZYpmj42pPr6TxFgpSRIP4N+dc4fwnOPxrIiclCSJ8oFO/tyIlvIlJovIdaVSaaiZL+cRmticiLzunDsDgMvzfJJzLhGRPs659ZVK5WoAI0VkKxHpLSJ9RWSgqjaXSqUVnGM511QSES8iymdlIpJmWZY1NTW153l+o3OuD4BjkiRZKiI1ADuJyJRyufwpEdmL94f9qYpInWvLrfo2bUcDRGQ3EZkiItOam5uHc02S5/llpVJpiR3fGZKNtRvc7Dki8nWevkZEponIdSIyj8RKRMRx7AAR+byIDM7z/BjnXE8uMvRk2WeriJRUdU6pVBorIh8SkV3krd6tt3naIvJGnud3ici2zrmdReRXInKgiDwkIq0islpEenBTM++9iogvl8spN2mqiBzmnPtSnucHOOeO4DMtlonIIyJyr4g8ICLtJIiK/LmfC8AIVZ2aJMkk59wBIhLSLuB6V4jIKN6Ld90DZkT7DBNLzAVwfJZlR1r9ae6ZQb+/USKxUYIxZ6wxA8ArIegj1gG4g5W//wBwEG1QD/O8DwE4n/f1o0d2vK2rN1jXFxr0bmXMyZ3P5GIoYO3OotXU4HzQKbhIVVtDDq6AtFBMK28Su2E8qguYThherVaHA9jbuoTBVVXVqwsLzEz+ypt8lzfnAGAWI/s+NKQhUr6jq/djCmU17c8NLIyF9PuLWZZNNbq+H4BPmBJvqCwuol0Mbm+z9/5sxkZPcOithjn7A/h5AyK0q+pDoVbDvoDyJnd7G9Q7til0lASizDLcoabCl/2VFPyzxvjPKHDYh5lH+gjrJt8g0Vx7e/vAQAyWVYeRKZYUUh9X1uv1DwCYqarPczMv4r3fA7DQe38egD0BHM80j8ULhlg70Su077+QrUu7BnsC4GkAR2+2dIt1K4vum+GciaxZ+AYb75nkOxvA4QBONSXVowwXLzYS1eq9P0tVXzXzHG5SNiFhmavqHYWAL+TMAmF/wY3qT5V2ppGS2zmfbcboIJHGA7iJGedjTWa4CuAZFqp6NtivA0MDxfuS/WWa/N5ivYMR8NxarTaqwb1TWHwKdZXxpmII9uAOBdDG+RYZYlxoJMkD2I+StNrW6wtVwMtMqv81zrmWzQqnmWdXAEw0z3qA1xYyTlITEFc5z+sAfkpGG9Ad0igTzYJSHi+xHr59A9+9mU1xE8zC7y4k9fpx/HNc9I9DLZxjgjFNOzo6dlLVywoE+JqphSvLson3/kQjHZeygPUbU0s/3ajiyW8N1XlZlh0RMsmq+iCj/fkAHqFDkjKDcQlbY9+7rpTwsDVr1mxLL6grvKGq87Msmxq8HxrZrTjPSFUNHR2LsiybyDEf3+C2pOk4elk1Vb3YNFG8RFsTVIuSc3fhHHcbezaU5eGchNuFFc/QNvS4tZs00moaLwbTq2tpFJGr6ly+F7z3X32nHta7dcVckiTqvZ8uIsvyPL/fOZfT/+8tItvmeb6SvvkI59xxzrnj8jxfztrGtUmSdAQ31DnXJCLinJtbKpUWMl6Y45wTEXmhqalppIjcJCKTnXN7ikhwa79Vq9XebGlpeVREThARl+f5A865VwCUVfWeUql0uIi8rqr/WCqVxnHu+51zr+R5vo9zbgjnms8YwwOYzthG8jx/2Dn3CH/HsswQoa/3fmy5XD5NRCY657Y2+7PSxCTvqQ3p+1eutwDoValUhnjvTzYZ4qUAPs7q4xt5nkNVXzYSdJTR1SHdciI5FaZPeEdK2tPm/GSjCn9GnXMRgO+bMVP4nP/h9xUARtJ52c64rxXWUEpGlR2lqteaFlmL5ap6a6OS93tdSQzJvibmsYrucku1Wt2VRaRnuUkd69at66+qv6UamReyxYwRNNgEVb244BrXGB/1Cl2MnON3pj3oFm7s9TT8wSVfxvtKqhoaJV41NZZQnq5kWTbNOiKd5LpAB+XToZ/4fStm2ZpEg2LRCLq6D5gaOEyQ+FxHR8cgY6BDBfHTBQN9nXG/ZwN4ik3YwwAMUtVvBSlS1evo1i5ko0WojVwLoMri1C0iIuy4fya46qr6IzZ+g5mBkabQ9t1OCPEkgEmNnJ33s/GhZPUqpeCnZkNhODg1zRA3s/q3kp7KNgCSSqWycwjQVPW2kEXl32+y3LrB/1+1alUfANfRU7oky7Ip4XqIlFX1GgB31uv1vZn+D4x03tuCJu9PMuvplWXZYSbV8hTr9zfQFR5XiNWS95MYGySiWq3u6r0/jSlnNEihFAPGpwCMVdXvqOrXvfdftEUh5s/uL9Q5enrvT2OnyCC28czy3p/MuvroRtU+ln/XZ1k2KWyyZSa2uF7OfNUUU7kMavgAjhnXiPu7RfODqav3ZBHpxUJKwRupsMnCe+i+JrQV8wEMX7NmzbbWnW5E+EqlMoSua7larQ6jKmnuJKuQGCnYiU3WPTeWg03AOhDAqAbPCHkq152IsZeq/q6ThKLN8npVnRears08Z3jvj25kBK1tKqjDUhedha6TwPUQAJd3kptL7C+mimrH/jr4fVdJXakpAMeoasdG9O5WvPczQw3EqgKmQHp2lhHtavEbEwWb36nMTtP0wI2p2nXluHTHjpNAjLNse6aqvqmqN9FIP06DHBriPtGIiwF8cLNmRN8iWtl7/y9d1fm3SBjxP8H8xAz8+fEgM24Mk3b2J2JNRaJmWTbN+P3J5iAG25FGZll2VLcxvpsQQeXswCL+MOt/m1/FDmK+Z9/OVARdyYmbUx0YSTy0Uqns3K1Vz+ZIMm6M7jUGcmj45dLm3CQAPbIsm7ylEKP8LlTBhn99VOykMNeTLroschFpC80Cm4NJOO+gcrn8opHw+C+ZOpGoHpv7GSZ10xx3vfsQfpu4ExERERERERERERERERERERERERERERERERERERERERERERERERERERGN8CfTU8fosE4hJQAAAABJRU5ErkJggg==";
const LR="data:image/png;base64,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";
const BR="#AF1917",BD="#8a1412",BL="#fdf2f2",TOL=15,CQ=12,CO="AWAKE STUDIOS";
const IE=[
{id:"15194",n:"WILDAN",d:"AWAKESTD",p:"Staff",pd:5,s:5000000},
{id:"170506",n:"ANDRE",d:"AWAKESTD",p:"Staff",pd:5,s:5500000},
{id:"269568",n:"ANAM",d:"AWAKESTD",p:"Staff",pd:5,s:5000000},
{id:"300306",n:"AQIL",d:"AWAKESTD",p:"Staff",pd:5,s:5200000},
{id:"385615",n:"DANIEL",d:"AWAKESTD",p:"Staff",pd:28,s:5000000},
{id:"385618",n:"EMIR",d:"AWAKESTD",p:"Staff",pd:28,s:5300000},
{id:"531853",n:"YUSUF",d:"AWAKESTD",p:"Staff",pd:25,s:5100000},
{id:"611953",n:"TAUFIK",d:"AWAKESTD",p:"Staff",pd:1,s:5000000},
{id:"653648",n:"HISA",d:"AWAKESTD",p:"Staff",pd:28,s:4800000},
{id:"1001",n:"GALIH",d:"AWAKESTD",p:"Staff",pd:5,s:5000000},
];
const PL=["Staff","Senior Staff","Supervisor","Manager","Head","Director"];
const DL={};
const SUPA="https://eardvmsidcrvxvcujqer.supabase.co";const SKEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVhcmR2bXNpZGNydnh2Y3VqcWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU5OTM3NDAsImV4cCI6MjA5MTU2OTc0MH0.qWHrbpcWIaQajH4DwQJflB3ToSqfNgeNkfG7r5tgemk";
const SH={"apikey":SKEY,"Authorization":`Bearer ${SKEY}`,"Content-Type":"application/json","Prefer":"return=representation"};
const sf=async(t,q="")=>{try{const r=await fetch(SUPA+"/rest/v1/"+t+q,{headers:SH});if(!r.ok){console.warn("DB fetch fail:",t,r.status);return [];}return await r.json();}catch(e){console.warn("DB error:",t,e);return [];}};
const si=async(t,d)=>{try{const r=await fetch(SUPA+"/rest/v1/"+t,{method:"POST",headers:SH,body:JSON.stringify(d)});const j=await r.json();return Array.isArray(j)?j:[j];}catch(e){console.error("Insert error:",t,e);return null;}};
const su=async(t,d,q)=>{try{await fetch(SUPA+"/rest/v1/"+t+"?"+q,{method:"PATCH",headers:SH,body:JSON.stringify(d)});}catch(e){}};
const sd=async(t,q)=>{try{await fetch(SUPA+"/rest/v1/"+t+"?"+q,{method:"DELETE",headers:SH});}catch(e){}};
const p2=n=>String(n).padStart(2,"0");
const MN=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const HOLIDAYS={"2026-01-01":"Tahun Baru","2026-01-29":"Isra Miraj","2026-02-18":"Tahun Baru Imlek","2026-03-20":"Hari Raya Nyepi","2026-03-22":"Cuti Bersama Nyepi","2026-04-03":"Wafat Isa Almasih","2026-04-05":"Paskah","2026-05-01":"Hari Buruh","2026-05-16":"Waisak","2026-05-21":"Kenaikan Isa Almasih","2026-06-01":"Hari Lahir Pancasila","2026-06-17":"Idul Adha","2026-07-07":"Tahun Baru Islam","2026-08-17":"Kemerdekaan RI","2026-09-16":"Maulid Nabi","2026-12-25":"Natal","2026-12-26":"Cuti Bersama Natal"};
const isHoliday=(dt)=>{if(!dt)return false;const k=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');return HOLIDAYS[k]||false;};
const rj=n=>Math.round(n*10)/10; // round to 1 decimal, no floating mess
const gM=()=>({});
const otBrk=(mins)=>{if(mins>240)return 60;if(mins>120)return 30;return 0;}; // overtime break: >4h=60m, >2h=30m
const pP=(d,dp)=>{if(!d?.p?.length)return{st:"Alpha",ci:null,co:null,oi:null,oo:null,oh:0,obk:0,la:false,lm:0,wt:false};const s=[...d.p].sort();if(d.w){const oi=s[0],oo=s[1]||null;let oh=0,obk=0;if(oi&&oo){const[h1,m1]=oi.split(":").map(Number),[h2,m2]=oo.split(":").map(Number);const raw=(h2*60+m2)-(h1*60+m1);obk=otBrk(raw);oh=rj(Math.max(0,raw-obk)/60);}return{st:"Lembur Hari Libur",ci:null,co:null,oi,oo,oh,obk,la:false,lm:0,wt:true};}const ci=s[0],co=s[1]||null;let oi=s[2]||null,oo=s[3]||null,oh=0,obk=0;if(oi&&oo){const[h1,m1]=oi.split(":").map(Number),[h2,m2]=oo.split(":").map(Number);const raw=(h2*60+m2)-(h1*60+m1);obk=otBrk(raw);oh=rj(Math.max(0,raw-obk)/60);}const[h,m]=ci.split(":").map(Number),lm=Math.max(0,h*60+m-480),la=lm>TOL&&!dp;return{st:la?"Terlambat":"Hadir",ci,co,oi,oo,oh,obk,la,lm,wt:false};};
const fm=n=>"Rp "+new Intl.NumberFormat("id-ID").format(n);
const fj=n=>{const v=rj(n);return v%1===0?v+" jam":v+" jam";}; // always "X jam"
const CC={hadir:{b:"#f0fdf4",f:"#16a34a"},terlambat:{b:"#fefce8",f:"#ca8a04"},sakit:{b:"#fef2f2",f:"#dc2626"},izin:{b:"#f5f3ff",f:"#7c3aed"},cuti:{b:"#eff6ff",f:"#2563eb"},alpha:{b:"#f4f4f5",f:"#71717a"},"lembur hari libur":{b:"#fff7ed",f:"#c2410c"},lembur:{b:"#fefce8",f:"#a16207"},pending:{b:"#fefce8",f:"#ca8a04"},approved:{b:"#f0fdf4",f:"#16a34a"},rejected:{b:"#fef2f2",f:"#dc2626"},sp1:{b:"#fefce8",f:"#ca8a04"},sp2:{b:"#fff7ed",f:"#ea580c"},sp3:{b:"#fef2f2",f:"#dc2626"}};
const bg=t=>{const c=CC[t.toLowerCase()]||CC.alpha;return{display:"inline-flex",alignItems:"center",padding:"3px 10px",borderRadius:20,fontSize:11,fontWeight:600,background:c.b,color:c.f,whiteSpace:"nowrap"};};
const AV=["#AF1917","#6d28d9","#059669","#d97706","#2563eb","#0891b2","#7c3aed","#be185d","#0d9488"];
const gST=items=>{const i=items.filter(x=>x.t==="i").reduce((a,x)=>a+(x.a||0),0);const d=items.filter(x=>x.t==="d").reduce((a,x)=>a+(x.a||0),0);return{i,d,n:i-d};};
// Period label helper: "5 Okt - 4 Apr 2026"
const pLbl=(pd)=>{
const now=new Date();const y=now.getFullYear();const m=now.getMonth();const d=now.getDate();
if(pd===1){return"1 "+MN[m]+" - "+new Date(y,m+1,0).getDate()+" "+MN[m]+" "+y;}
let sm,sy,em2,ey;
if(d>=pd){sm=m;sy=y;em2=m+1;ey=y;if(em2>11){em2=0;ey++;}}
else{sm=m-1;sy=y;em2=m;ey=y;if(sm<0){sm=11;sy--;}}
const ed=pd-1;
return pd+" "+MN[sm]+(sy!==y?" "+sy:"")+" - "+ed+" "+MN[em2]+" "+ey;
};
const getPR=(pd)=>{
const now=new Date();const y=now.getFullYear();const m=now.getMonth();const d=now.getDate();
if(pd===1){return{sd:new Date(y,m,1),ed:new Date(y,m+1,0)};}
let sd,ed;
if(d>=pd){sd=new Date(y,m,pd);ed=new Date(y,m+1,pd-1);}
else{sd=new Date(y,m-1,pd);ed=new Date(y,m,pd-1);}
return{sd,ed};
};


const css=`@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');*{box-sizing:border-box;margin:0;padding:0}body{font-family:'Plus Jakarta Sans',system-ui,sans-serif;background:#f8f9fb;color:#0f172a;-webkit-font-smoothing:antialiased}@keyframes fi{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.ly{display:flex;min-height:100vh}.sb{width:240px;background:#fff;border-right:1px solid #eef1f5;padding:16px 12px;position:fixed;top:0;left:0;bottom:0;z-index:100;transition:transform .3s;display:flex;flex-direction:column;overflow-y:auto}.so{display:none;position:fixed;inset:0;background:rgba(15,23,42,.3);z-index:99;backdrop-filter:blur(4px)}.ni{display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:10px;cursor:pointer;font-size:13px;font-weight:500;color:#64748b;transition:all .15s;margin-bottom:2px;border:none;background:none;width:100%;text-align:left;font-family:inherit}.ni:hover{background:#f8f9fb;color:#0f172a}.ni.act{background:${BL};color:${BR};font-weight:600}.nb{margin-left:auto;background:${BR};color:#fff;font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px}.mn{flex:1;margin-left:240px;padding:24px 32px;min-height:100vh;max-width:1200px}.tb{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}.tb h1{font-size:20px;font-weight:700;letter-spacing:-0.02em}.mb{display:none;background:none;border:none;color:#64748b;cursor:pointer;padding:4px}.sg{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:20px}.sc{background:#fff;border-radius:14px;padding:16px;border:1px solid #eef1f5;animation:fi .4s ease both;transition:box-shadow .2s}.sc:hover{box-shadow:0 4px 12px rgba(0,0,0,.04)}.sl{font-size:11px;color:#94a3b8;font-weight:500;margin-bottom:4px}.sv2{font-size:24px;font-weight:700;letter-spacing:-0.02em}.cd{background:#fff;border-radius:14px;padding:20px;border:1px solid #eef1f5;margin-bottom:16px;animation:fi .4s ease both}.ch{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px}.ct{font-size:15px;font-weight:700}.tw{overflow-x:auto}table{width:100%;border-collapse:separate;border-spacing:0;font-size:13px}th{text-align:left;padding:10px 12px;font-weight:600;color:#94a3b8;font-size:11px;text-transform:uppercase;letter-spacing:.05em;white-space:nowrap;border-bottom:1px solid #eef1f5}td{padding:10px 12px;white-space:nowrap;border-bottom:1px solid #f8f9fb}tr:hover td{background:#f8f9fb}.mo{font-family:monospace;font-size:12px;color:#475569}.btn{display:inline-flex;align-items:center;gap:6px;padding:8px 16px;border-radius:10px;font-size:13px;font-weight:600;cursor:pointer;border:none;background:${BR};color:#fff;font-family:inherit;white-space:nowrap;transition:all .15s}.btn:hover{opacity:.9;transform:translateY(-1px)}.bd{background:#ef4444}.bo{background:#fff;border:1.5px solid #e2e8f0;color:#475569}.bo:hover{border-color:${BR};color:${BR}}.bs{padding:6px 10px;font-size:12px;border-radius:8px}.av{width:32px;height:32px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;color:#fff;flex-shrink:0}.av.sm{width:24px;height:24px;font-size:10px;border-radius:8px}.er{display:flex;align-items:center;gap:8px}.slip{border:1.5px solid #eef1f5;border-radius:14px;padding:20px;margin-bottom:12px;background:#fff}.slH{text-align:center;border-bottom:1.5px dashed #eef1f5;padding-bottom:12px;margin-bottom:12px}.sr{display:flex;justify-content:space-between;padding:4px 0;font-size:13px}.srt{border-top:2px solid #0f172a;margin-top:8px;padding-top:8px;font-weight:700;font-size:15px}.ssc{font-weight:700;margin-top:10px;margin-bottom:4px;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:.05em}.ua{border:2px dashed #e2e8f0;border-radius:14px;padding:32px;text-align:center;cursor:pointer;transition:all .2s}.ua:hover{border-color:${BR};background:${BL}}.lb{font-size:12px;font-weight:600;color:#64748b;display:block;margin-bottom:4px;margin-top:8px}.inp{width:100%;padding:9px 14px;border-radius:10px;border:1.5px solid #e2e8f0;font-family:inherit;font-size:13px;outline:none;background:#fff}.inp:focus{border-color:${BR};box-shadow:0 0 0 3px rgba(175,25,23,.08)}select.inp{appearance:auto}.abg{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#fafafa,#f0f0f0);padding:16px}.abx{width:100%;max-width:380px;animation:fi .5s ease}.acd{background:#fff;border-radius:20px;padding:32px;border:1px solid #eef1f5;box-shadow:0 8px 32px rgba(0,0,0,.06)}.aab{display:flex;align-items:center;gap:8px;padding:12px;border-radius:12px;background:${BL};color:${BR};cursor:pointer;font-weight:600;font-size:13px;border:1.5px solid rgba(175,25,23,.1);justify-content:center;transition:all .15s}.aab:hover{background:${BR};color:#fff}.adv{text-align:center;margin:12px 0;font-size:11px;color:#94a3b8;text-transform:uppercase;letter-spacing:2px}.asb{width:100%;padding:12px;border-radius:12px;border:none;background:${BR};color:#fff;font-weight:700;font-size:14px;cursor:pointer;font-family:inherit;margin-top:12px}.asb:hover{background:${BD}}.aer{color:#ef4444;font-size:12px;font-weight:600;margin-top:6px;padding:8px 12px;background:#fef2f2;border-radius:8px}@media(max-width:768px){.sb{transform:translateX(-100%);width:280px}.sb.op{transform:translateX(0)}.so.sh{display:block}.mn{margin-left:0;padding:12px}.mb{display:block}.sg{grid-template-columns:repeat(2,1fr);gap:8px}.tb h1{font-size:16px}.cd{padding:14px}}`;


// ═══ STANDALONE FORM COMPONENTS (outside App to prevent re-render issues) ═══

const RegForm=({em,ac,onSubmit,onCancel,onError})=>{
const[f,sF]=useState({e:"",u:"",p:""});
return <div style={{background:"#f8f9fb",borderRadius:14,padding:16,marginBottom:12,border:"1px solid #eef1f5"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}><div><label className="lb">Karyawan</label><select className="inp" value={f.e} onChange={e=>sF(p=>({...p,e:e.target.value}))}><option value="">Pilih</option>{em.filter(e=>!ac.find(a=>a.e===e.id)).map(e=><option key={e.id} value={e.id}>{e.n}</option>)}</select></div><div><label className="lb">Username</label><input className="inp" value={f.u} onChange={e=>sF(p=>({...p,u:e.target.value}))}/></div><div style={{gridColumn:"1/-1"}}><label className="lb">Password</label><input className="inp" value={f.p} onChange={e=>sF(p=>({...p,p:e.target.value}))}/></div></div>
<button className="btn" style={{marginTop:10}} onClick={()=>{if(!f.e){onError("Pilih karyawan");return;}if(f.u.length<3){onError("Username min 3");return;}if(f.p.length<4){onError("Password min 4");return;}if(ac.find(a=>a.u===f.u)){onError("Username sudah ada");return;}onSubmit(f);sF({e:"",u:"",p:""});}}>Daftarkan</button></div>;};

const SPForm=({em,PL,onSubmit,onCancel})=>{
const[f,sF]=useState({e:"",l:1,r:"",dt:"",ex:""});
return <div style={{background:"#f8f9fb",borderRadius:14,padding:16,marginBottom:12,border:"1px solid #eef1f5"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
<div><label className="lb">Karyawan</label><select className="inp" value={f.e} onChange={e=>sF(p=>({...p,e:e.target.value}))}><option value="">Pilih</option>{em.map(e=><option key={e.id} value={e.id}>{e.n}</option>)}</select></div>
<div><label className="lb">Level</label><select className="inp" value={f.l} onChange={e=>sF(p=>({...p,l:+e.target.value}))}><option value={1}>SP 1 (3 bulan)</option><option value={2}>SP 2 (6 bulan)</option><option value={3}>SP 3 (6 bulan)</option></select></div>
<div style={{gridColumn:"1/-1"}}><label className="lb">Alasan</label><input className="inp" value={f.r} onChange={e=>sF(p=>({...p,r:e.target.value}))} placeholder="Alasan pemberian SP"/></div>
<div><label className="lb">Tanggal Terbit</label><input className="inp" type="date" value={f.dt} onChange={e=>sF(p=>({...p,dt:e.target.value}))}/></div>
<div><label className="lb">Tanggal Kadaluarsa</label><input className="inp" type="date" value={f.ex} onChange={e=>sF(p=>({...p,ex:e.target.value}))}/></div>
</div><button className="btn" style={{marginTop:10}} onClick={()=>{if(!f.e||!f.r||!f.dt||!f.ex)return;onSubmit(f);sF({e:"",l:1,r:"",dt:"",ex:""});}}>Terbitkan</button></div>;};

const LbrForm=({em,onSubmit})=>{
const[f,sF]=useState({ei:"",tgl:"",jam:0,ket:""});
return <div style={{background:"#f8f9fb",borderRadius:14,padding:16,marginBottom:12,border:"1px solid #eef1f5"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
<div><label className="lb">Karyawan</label><select className="inp" value={f.ei} onChange={e=>sF(p=>({...p,ei:e.target.value}))}><option value="">Pilih</option>{em.map(e=><option key={e.id} value={e.id}>{e.n}</option>)}</select></div>
<div><label className="lb">Tanggal</label><input className="inp" type="date" value={f.tgl} onChange={e=>sF(p=>({...p,tgl:e.target.value}))}/></div>
<div><label className="lb">Jumlah Jam Lembur</label><input className="inp" type="number" step="0.5" value={f.jam} onChange={e=>sF(p=>({...p,jam:+e.target.value}))}/></div>
<div><label className="lb">Keterangan</label><input className="inp" value={f.ket} onChange={e=>sF(p=>({...p,ket:e.target.value}))} placeholder="Misal: lembur pesanan A"/></div>
</div>
<button className="btn" style={{marginTop:10}} onClick={()=>{if(!f.ei||!f.tgl||!f.jam)return;onSubmit(f);sF({ei:"",tgl:"",jam:0,ket:""});}}>Simpan Lembur</button>
</div>;};

const AdminLeaveForm=({em,onSubmit})=>{
const[f,sF]=useState({ei:"",t:"Cuti",s:"",e:"",d:1,r:""});
return <div style={{background:"#f8f9fb",borderRadius:14,padding:16,marginBottom:12,border:"1px solid #eef1f5"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}>
<div><label className="lb">Karyawan</label><select className="inp" value={f.ei} onChange={e=>sF(p=>({...p,ei:e.target.value}))}><option value="">Pilih</option>{em.map(e=><option key={e.id} value={e.id}>{e.n}</option>)}</select></div>
<div><label className="lb">Tipe</label><select className="inp" value={f.t} onChange={e=>sF(p=>({...p,t:e.target.value}))}>{["Cuti","Sakit","Izin"].map(t=><option key={t}>{t}</option>)}</select></div>
<div><label className="lb">Mulai</label><input className="inp" type="date" value={f.s} onChange={e=>sF(p=>({...p,s:e.target.value}))}/></div>
<div><label className="lb">Selesai</label><input className="inp" type="date" value={f.e} onChange={e=>sF(p=>({...p,e:e.target.value}))}/></div>
<div><label className="lb">Jumlah Hari</label><input className="inp" type="number" value={f.d} onChange={e=>sF(p=>({...p,d:+e.target.value}))}/></div>
<div><label className="lb">Alasan</label><input className="inp" value={f.r} onChange={e=>sF(p=>({...p,r:e.target.value}))}/></div>
</div><button className="btn" style={{marginTop:10}} onClick={()=>{if(!f.ei||!f.s||!f.r)return;onSubmit(f);sF({ei:"",t:"Cuti",s:"",e:"",d:1,r:""});}}>Simpan</button></div>;};

const EmpLeaveForm=({le,cu,CQ,onSubmit})=>{
const[f,sF]=useState({t:"Cuti",s:"",e:"",r:""});
return <div style={{background:"#f8f9fb",borderRadius:14,padding:16,marginBottom:12,border:"1px solid #eef1f5"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8}}><div><label className="lb">Tipe</label><select className="inp" value={f.t} onChange={e=>sF(p=>({...p,t:e.target.value}))}>{["Cuti","Sakit","Izin"].map(t=><option key={t}>{t}</option>)}</select></div><div><label className="lb">Mulai</label><input className="inp" type="date" value={f.s} onChange={e=>sF(p=>({...p,s:e.target.value}))}/></div><div><label className="lb">Selesai</label><input className="inp" type="date" value={f.e} onChange={e=>sF(p=>({...p,e:e.target.value}))}/></div><div style={{gridColumn:"1/-1"}}><label className="lb">Alasan</label><input className="inp" value={f.r} onChange={e=>sF(p=>({...p,r:e.target.value}))}/></div></div><button className="btn" style={{marginTop:10}} onClick={()=>{if(!f.s||!f.r)return;const end=f.e||f.s,d=Math.max(1,Math.round((new Date(end)-new Date(f.s))/864e5)+1);if(f.t==="Cuti"&&d>cu)return;onSubmit({...f,end,d});sF({t:"Cuti",s:"",e:"",r:""});}}>Kirim</button></div>;};

const ChpwForm=({myAcc,onSubmit,onError,ae})=>{
const[f,sF]=useState({o:"",n:"",c:""});
return <div style={{maxWidth:400}}>
<label className="lb">Password Lama</label><input className="inp" type="password" value={f.o} onChange={e=>sF(p=>({...p,o:e.target.value}))}/>
<label className="lb">Password Baru (min 4)</label><input className="inp" type="password" value={f.n} onChange={e=>sF(p=>({...p,n:e.target.value}))}/>
<label className="lb">Konfirmasi</label><input className="inp" type="password" value={f.c} onChange={e=>sF(p=>({...p,c:e.target.value}))}/>
{ae&&<div className="aer" style={{marginTop:8}}>{ae}</div>}
<button className="btn" style={{marginTop:12}} onClick={()=>{if(f.o!==myAcc?.p){onError("Password lama salah");return;}if(f.n.length<4){onError("Min 4 karakter");return;}if(f.n!==f.c){onError("Tidak cocok");return;}onSubmit(f.n);sF({o:"",n:"",c:""});}}>Simpan</button>
</div>;};


export default function App(){
const[ld,sLd]=useState(true);const[pg,sPg]=useState("login");const[rl,sRl]=useState(null);const[le,sLe]=useState(null);
const[ac,sAc]=useState([]);
const[lf,sLf]=useState({u:"",p:""});const[ae,sAe]=useState("");
const[vw,sVw]=useState("dashboard");const[so,sSo]=useState(false);const[aP,sAP]=useState({});const[dp,sDp]=useState({});
const[em,sEm]=useState([]);
const[lv,sLv]=useState([]);
const[sp,sSp]=useState([]);
const[sl,sSl]=useState({});const[ek,sEk]=useState(null);const[ssf,sSsf]=useState(false);const[spf,sSpf]=useState({e:"",l:1,r:"",dt:"",ex:""});const[espE,sEspE]=useState(null);const[espF,sEspF]=useState({lv:1,r:"",dt:"",ex:""});
const[clf,sClf]=useState({t:"Cuti",s:"",e:"",r:""});const[scl,sScl]=useState(false);
const[ee,sEe]=useState(null);const[ef,sEf]=useState({p:"",pd:1,s:0});
const[sns,sSns]=useState(false);const[snp,sSnp]=useState("");const[sls,sSls]=useState("");const[ups,sUps]=useState("");const[ovr,sOvr]=useState({});const[manAtt,sManAtt]=useState({});const[lbr,sLbr]=useState([]);const[showLbr,sShowLbr]=useState(false);const[lbrF,sLbrF]=useState({ei:"",tgl:"",jam:0,ket:""});const[eLbr,sELbr]=useState(null);const[eLbrF,sELbrF]=useState({jam:0,ket:""});
const[regF,sRegF]=useState({e:"",u:"",p:""});const[showReg,sShowReg]=useState(false);
const[chpw,sChpw]=useState({o:"",n:"",c:""});

useEffect(()=>{(async()=>{try{
const[emps,accs,lvs,sps,pss,otms,atts]=await Promise.all([
sf("employees","?order=name"),
sf("accounts"),
sf("leaves","?order=created_at.desc"),
sf("warnings","?order=issued_date.desc"),
sf("payslips"),
sf("overtime","?order=date.desc"),
sf("daily_status"),
]);
if(emps?.length){const mapped=emps.map(e=>({id:e.id,n:e.name,d:e.department,p:e.position,pd:e.pay_date,s:e.salary}));sEm(mapped);const ap={};mapped.forEach(e=>{ap[e.id]={};});sAP(ap);}
if(accs?.length)sAc(accs.map(a=>({id:a.id,u:a.username,p:a.password,r:a.role,e:a.employee_id})));
if(lvs?.length)sLv(lvs.map(l=>({id:l.id,ei:l.employee_id,en:l.employee_name,t:l.type,s:String(l.start_date).slice(0,10),e:String(l.end_date).slice(0,10),d:l.days,r:l.reason,st:l.status})));
if(sps?.length)sSp(sps.map(s=>({id:s.id,ei:s.employee_id,en:s.employee_name,lv:s.level,r:s.reason,dt:s.issued_date,ex:s.expiry_date})));
if(pss?.length){const sm={};pss.forEach(p=>{if(!sm[p.employee_id])sm[p.employee_id]={};sm[p.employee_id][p.period]={it:p.items,nt:p.notes};});sSl(sm);}
if(otms?.length)sLbr(otms.map(o=>({id:o.id,ei:o.employee_id,en:o.employee_name,tgl:String(o.date).slice(0,10),jam:Number(o.hours),ket:o.notes})));
console.log("daily_status loaded:",atts?.length||0,"rows",atts);if(atts?.length){const ma={};atts.forEach(a=>{const dd=String(a.date).slice(0,10);ma[a.employee_id+"-"+dd]=a.status||"Hadir";});console.log("manAtt keys:",Object.keys(ma));sManAtt(ma);}
}catch(err){console.error("Load error:",err);}sLd(false);})();},[]);



const gA=(ei,d,dt)=>{
const none={st:"-",ci:null,co:null,oi:null,oo:null,oh:0,obk:0,la:false,lm:0,wt:false};
const today=new Date();today.setHours(0,0,0,0);
const checkDt=dt?new Date(dt):null;
if(checkDt){checkDt.setHours(0,0,0,0);}
const fmtDt=(x)=>x?x.getFullYear()+'-'+String(x.getMonth()+1).padStart(2,'0')+'-'+String(x.getDate()).padStart(2,'0'):null;
const dateStr=fmtDt(checkDt);
/* Helper: get overtime hours for this date */
const getOT=()=>{if(!dateStr)return 0;const ot=lbr.find(o=>o.ei===ei&&o.tgl===dateStr);return ot?Number(ot.jam):0;};
/* 1. Future date */
if(checkDt&&checkDt>today)return none;
/* 2. Manual attendance override */
const dateKey=dateStr?ei+'-'+dateStr:null;
if(dateKey&&manAtt[dateKey]){const ms=manAtt[dateKey];return{...none,st:ms,ci:ms==="Hadir"?"08:00":null,co:ms==="Hadir"?"17:00":null,oh:getOT()};}
/* 3. Approved leaves */
if(dateStr){const leave=lv.find(l=>l.ei===ei&&l.st==="Approved"&&dateStr>=l.s&&dateStr<=l.e);if(leave)return{...none,st:leave.t,oh:getOT()};}
/* 4. Punch data */
const r=pP(aP[ei]?.[d],dp[ei+"-"+d]);const ok=ei+"-"+d;if(ovr[ok]?.oh!==undefined)r.oh=ovr[ok].oh;if(ovr[ok]?.obk!==undefined)r.obk=ovr[ok].obk;
/* 5. Sunday or public holiday */
if(checkDt){const w=checkDt.getDay();const hol=isHoliday(checkDt);if(w===0||hol){const otH=getOT();if(r.st==="Alpha")return{...none,st:"-",oh:otH,wt:otH>0};if(otH>0)r.oh=Math.max(r.oh,otH);}}
/* 6. Regular day overtime */
const otH2=getOT();if(otH2>0&&r.oh===0)r.oh=otH2;
return r;};
const tD=(ei,d)=>{const k=ei+"-"+d;sDp(p=>({...p,[k]:!p[k]}));};
const cU=(ei)=>lv.filter(l=>l.ei===ei&&l.t==="Cuti"&&l.st==="Approved").reduce((a,l)=>a+l.d,0);
const aS=(ei)=>sp.filter(s=>s.ei===ei&&new Date(s.ex)>new Date());
const pN=lv.filter(l=>l.st==="Pending").length;
const pR=(ei,pd)=>{let h=0,t=0,a=0,ol=0,ow=0,iz=0,sk=0;
const pr=getPR(pd);const today=new Date();today.setHours(0,0,0,0);
for(let dt=new Date(pr.sd);dt<=pr.ed;dt.setDate(dt.getDate()+1)){
const chk=new Date(dt);chk.setHours(0,0,0,0);if(chk>today)continue;
const d=dt.getDate();const w=dt.getDay();const hol=isHoliday(chk);
if(w===0||hol){const at=gA(ei,d,new Date(dt));if(at.oh>0)ow=rj(ow+at.oh);continue;}
const at=gA(ei,d,new Date(dt));
if(at.st==="Hadir"||at.st==="Terlambat")h++;
else if(at.st==="Alpha")a++;
else if(at.st==="Sakit")sk++;
else if(at.st==="Izin")iz++;
if(at.st==="Terlambat")t++;
if(at.oh>0&&!hol&&w!==0)ol=rj(ol+at.oh);
}return{h,t,a,ol,ow,iz,sk};};
const[savMsg,sSavMsg]=useState("");
const setAtt=(ei,dateStr,status)=>{const k=ei+"-"+dateStr;sManAtt(p=>({...p,[k]:status}));
sSavMsg("Menyimpan...");
fetch(SUPA+"/rest/v1/daily_status?on_conflict=employee_id,date",{method:"POST",headers:{...SH,"Prefer":"return=representation,resolution=merge-duplicates"},body:JSON.stringify({employee_id:ei,date:dateStr,status:status})}).then(async r=>{if(!r.ok){const t=await r.text();sSavMsg("GAGAL: "+r.status+" - "+t);console.error("Save FAILED:",r.status,t);}else{sSavMsg("Tersimpan ✓");setTimeout(()=>sSavMsg(""),2000);}}).catch(e=>{sSavMsg("Error koneksi");console.error("Save error:",e);});};

const svSl=(ei,pr,it,nt)=>{sSl(p=>({...p,[ei]:{...(p[ei]||{}),[pr]:{it,nt}}}));fetch(SUPA+"/rest/v1/payslips",{method:"POST",headers:{...SH,"Prefer":"resolution=merge-duplicates,return=representation"},body:JSON.stringify({employee_id:ei,period:pr,items:it,notes:nt})});};
const eSP=ei=>Object.keys(sl[ei]||{}).sort().reverse();

if(ld)return <><style>{css}</style><div className="abg"><div style={{textAlign:"center"}}><img src={LR} alt="" style={{width:80,opacity:.6,marginBottom:16}}/><div style={{fontSize:13,color:"#94a3b8",fontWeight:500}}>Menghubungkan ke database...</div></div></div></>;

if(pg!=="app"){
return <><style>{css}</style><div className="abg"><div className="abx">
<div style={{textAlign:"center",marginBottom:24}}><img src={LR} alt="" style={{width:80,marginBottom:8}}/><div style={{fontSize:11,color:"#94a3b8",letterSpacing:3,textTransform:"uppercase",fontWeight:600}}>HRIS</div></div>
<div className="acd">
<label className="lb">Username</label><input className="inp" value={lf.u} onChange={e=>sLf(p=>({...p,u:e.target.value}))} placeholder="Masukkan username"/>
<label className="lb">Password</label><input className="inp" type="password" value={lf.p} onChange={e=>sLf(p=>({...p,p:e.target.value}))} placeholder="Masukkan password"/>
{ae&&<div className="aer">{ae}</div>}
<button className="asb" onClick={()=>{if(!ac.length){sAe("Gagal terhubung ke database. Pastikan tabel accounts sudah dibuat di Supabase.");return;}const a=ac.find(x=>x.u===lf.u&&x.p===lf.p);if(!a){sAe("Username atau password salah");return;}if(a.r==="admin"){sRl("admin");sVw("dashboard");sPg("app");}else{sLe(em.find(x=>x.id===a.e));sRl("employee");sVw("emp-dash");sPg("app");}}}>Masuk</button>
<div style={{textAlign:"center",marginTop:12,fontSize:12,color:"#94a3b8"}}>Akun dibuat oleh admin perusahaan</div>
</div></div></div></>;
}

const SlipEd=({ei,pr,ex,onSv,onCn})=>{const emp=em.find(e=>e.id===ei);const[it,sIt]=useState(ex?.it||[{l:"Gaji Pokok",a:emp?.s||0,t:"i"},{l:"Transport",a:300000,t:"i"},{l:"Makan",a:450000,t:"i"},{l:"BPJS",a:Math.round((emp?.s||0)*.04),t:"d"},{l:"PPh 21",a:Math.round((emp?.s||0)*.025),t:"d"}]);const[nt,sNt]=useState(ex?.nt||"");const tot=gST(it);
return <div style={{background:"#f8f9fb",borderRadius:14,padding:20,border:"1px solid #eef1f5",marginBottom:12}}>
<h3 style={{fontSize:14,fontWeight:700,color:BR,marginBottom:12}}>{ex?"Edit":"Buat"} Slip — {pr}</h3>
<div style={{fontSize:12,fontWeight:700,color:"#16a34a",marginBottom:6}}>PENDAPATAN</div>
{it.filter(x=>x.t==="i").map(x=>{const ri=it.indexOf(x);return <div key={ri} style={{display:"flex",gap:6,marginBottom:4}}><input className="inp" style={{flex:1}} value={x.l} onChange={e=>sIt(p=>p.map((v,j)=>j===ri?{...v,l:e.target.value}:v))}/><input className="inp" style={{width:120}} type="number" value={x.a} onChange={e=>sIt(p=>p.map((v,j)=>j===ri?{...v,a:+e.target.value}:v))}/><button className="btn bd bs" onClick={()=>sIt(p=>p.filter((_,j)=>j!==ri))}><X size={12}/></button></div>;})}
<button className="btn bo bs" style={{marginBottom:12}} onClick={()=>sIt(p=>[...p,{l:"",a:0,t:"i"}])}><Plus size={12}/>Pendapatan</button>
<div style={{fontSize:12,fontWeight:700,color:"#ef4444",marginBottom:6}}>POTONGAN</div>
{it.filter(x=>x.t==="d").map(x=>{const ri=it.indexOf(x);return <div key={ri} style={{display:"flex",gap:6,marginBottom:4}}><input className="inp" style={{flex:1}} value={x.l} onChange={e=>sIt(p=>p.map((v,j)=>j===ri?{...v,l:e.target.value}:v))}/><input className="inp" style={{width:120}} type="number" value={x.a} onChange={e=>sIt(p=>p.map((v,j)=>j===ri?{...v,a:+e.target.value}:v))}/><button className="btn bd bs" onClick={()=>sIt(p=>p.filter((_,j)=>j!==ri))}><X size={12}/></button></div>;})}
<button className="btn bo bs" style={{marginBottom:12}} onClick={()=>sIt(p=>[...p,{l:"",a:0,t:"d"}])}><Plus size={12}/>Potongan</button>
<div style={{display:"flex",justifyContent:"space-between",fontWeight:700,fontSize:15,padding:"8px 0",borderTop:"2px solid #0f172a"}}><span>TOTAL DITERIMA</span><span style={{color:"#16a34a"}}>{fm(tot.n)}</span></div>
<label className="lb">Catatan</label><input className="inp" value={nt} onChange={e=>sNt(e.target.value)} placeholder="Deviden, bonus kinerja, dll"/>
<div style={{display:"flex",gap:8,marginTop:12}}><button className="btn" onClick={()=>onSv(it,nt)}><Check size={14}/>Simpan</button><button className="btn bo" onClick={onCn}>Batal</button></div>
</div>;};

const SlipVw=({ei,pr,dt,adm,onEd,onDl})=>{const emp=em.find(e=>e.id===ei);const tot=gST(dt.it);
return <div className="slip"><div className="slH"><img src={LR} alt="" style={{width:48}}/><div style={{fontSize:12,color:"#94a3b8",marginTop:4,fontWeight:500}}>{pr}</div></div>
<div className="sr"><span style={{color:"#94a3b8"}}>Nama</span><strong>{emp?.n}</strong></div>
<div className="sr"><span style={{color:"#94a3b8"}}>Jabatan</span><span>{emp?.p}</span></div>
<div className="ssc">PENDAPATAN</div>
{dt.it.filter(i=>i.t==="i").map((i,j)=><div key={j} className="sr"><span>{i.l}</span><span style={{fontWeight:600}}>{fm(i.a)}</span></div>)}
{dt.it.some(i=>i.t==="d")&&<><div className="ssc">POTONGAN</div>{dt.it.filter(i=>i.t==="d").map((i,j)=><div key={j} className="sr"><span>{i.l}</span><span style={{color:"#ef4444",fontWeight:600}}>-{fm(i.a)}</span></div>)}</>}
<div className="sr srt"><span>TOTAL DITERIMA</span><span style={{color:"#16a34a"}}>{fm(tot.n)}</span></div>
{dt.nt&&<div style={{fontSize:12,color:"#94a3b8",marginTop:6,padding:"8px 12px",background:"#f8f9fb",borderRadius:8}}>{dt.nt}</div>}
{adm&&<div style={{display:"flex",gap:6,marginTop:10}}><button className="btn bo bs" onClick={onEd}><Edit3 size={12}/>Edit</button><button className="btn bd bs" onClick={onDl}><Trash2 size={12}/>Hapus</button></div>}
</div>;};

const aN=[{id:"dashboard",l:"Dashboard",ic:Home},{id:"attendance",l:"Kehadiran",ic:Clock},{id:"calendar",l:"Rekap Periode",ic:Calendar},{id:"payslip",l:"Slip Gaji",ic:Wallet},{id:"leave",l:"Cuti & Izin",ic:FileText},{id:"sp2",l:"Surat Peringatan",ic:AlertTriangle},{id:"lembur",l:"Input Lembur",ic:TrendingUp},{id:"dispensasi",l:"Dispensasi",ic:Shield},{id:"employees",l:"Karyawan",ic:Users},{id:"accounts",l:"Akun Karyawan",ic:Key},{id:"upload",l:"Upload Deli",ic:Upload}];
const eN=[{id:"emp-dash",l:"Beranda",ic:Home},{id:"emp-att",l:"Kehadiran",ic:Clock},{id:"emp-pay",l:"Slip Gaji",ic:Wallet},{id:"emp-leave",l:"Cuti & Izin",ic:FileText},{id:"emp-sp",l:"SP Saya",ic:AlertTriangle},{id:"emp-pw",l:"Ubah Password",ic:Key}];
const nav=rl==="admin"?aN:eN;
const titles={dashboard:"Dashboard",attendance:"Kehadiran",calendar:"Rekap Periode Gaji",payslip:"Slip Gaji",leave:"Cuti & Izin",sp2:"Surat Peringatan",lembur:"Input Lembur",dispensasi:"Dispensasi Keterlambatan",employees:"Karyawan & Jabatan",accounts:"Akun Karyawan",upload:"Upload Deli 3765","emp-dash":"Beranda","emp-att":"Kehadiran","emp-pay":"Slip Gaji","emp-leave":"Cuti & Izin","emp-sp":"Surat Peringatan","emp-pw":"Ubah Password"};

// ═══ EMPLOYEE DASHBOARD — simplified, period-aware ═══
const EDash=()=>{if(!le)return null;const rc=pR(le.id,le.pd),cu=CQ-cU(le.id),spp=aS(le.id),ml=lv.filter(l=>l.ei===le.id);const prd=pLbl(le.pd);
return <div style={{maxWidth:520,margin:"0 auto"}}>
<div style={{background:"linear-gradient(135deg,"+BD+","+BR+")",borderRadius:20,padding:"24px 22px 18px",color:"#fff",marginBottom:20,boxShadow:"0 8px 32px rgba(175,25,23,.15)"}}>
<div style={{fontSize:12,opacity:.7,fontWeight:500}}>{CO}</div>
<div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:6}}>
<div><div style={{fontSize:24,fontWeight:800,letterSpacing:"-0.02em"}}>{le.n}</div><div style={{fontSize:13,opacity:.7}}>{le.p}</div></div>
<div style={{width:48,height:48,borderRadius:"50%",background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,fontWeight:800}}>{le.n[0]}</div>
</div>
<div style={{background:"rgba(255,255,255,.1)",borderRadius:14,padding:16,marginTop:16,display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:8}}>
{[{l:"Kehadiran",Ic:Clock,v:"emp-att"},{l:"Cuti/Izin",Ic:Sun,v:"emp-leave"},{l:"Slip Gaji",Ic:Wallet,v:"emp-pay"},{l:"SP",Ic:AlertTriangle,v:"emp-sp"}].map(m=><div key={m.v} onClick={()=>sVw(m.v)} style={{textAlign:"center",cursor:"pointer",padding:10,borderRadius:12,display:"flex",flexDirection:"column",alignItems:"center",gap:6}}><div style={{width:40,height:40,borderRadius:12,background:"rgba(255,255,255,.15)",display:"flex",alignItems:"center",justifyContent:"center"}}><m.Ic size={20}/></div><div style={{fontSize:10,fontWeight:600,opacity:.9,lineHeight:1.2}}>{m.l}</div></div>)}
</div></div>

{/* Period info */}
<div style={{textAlign:"center",marginBottom:14,fontSize:12,color:"#94a3b8"}}>Periode gaji: <strong style={{color:"#0f172a"}}>{prd}</strong></div>

{/* 3 key stats */}
<div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:10,marginBottom:16}}>
{[{l:"Kehadiran",sub:"termasuk terlambat",v:rc.h,c:"#16a34a",Ic:UserCheck},{l:"Sakit/Izin",sub:"periode ini",v:rc.sk+rc.iz,c:"#7c3aed",Ic:Clock},{l:"Total Lembur",sub:"kerja + libur",v:fj(rj(rc.ol+rc.ow)),c:"#d97706",Ic:TrendingUp},{l:"Sisa Cuti",sub:"dari "+CQ+" hari",v:cu<=3?cu+"/"+CQ:cu+"/"+CQ,c:cu<=3?"#ef4444":"#2563eb",Ic:Coffee}].map((x,i)=><div key={i} style={{background:"#fff",borderRadius:14,padding:14,border:"1px solid #eef1f5",textAlign:"center"}}>
<div style={{width:36,height:36,borderRadius:10,background:x.c+"12",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 8px"}}><x.Ic size={18} color={x.c}/></div>
<div style={{fontSize:24,fontWeight:700,color:x.c}}>{x.v}</div>
<div style={{fontSize:11,color:"#94a3b8"}}>{x.l}</div>
<div style={{fontSize:10,color:"#cbd5e1"}}>{x.sub}</div>
</div>)}
</div>

{spp.length>0&&<div style={{background:"#fffbeb",borderRadius:14,padding:16,marginBottom:16,border:"1px solid #fef3c7"}}><div style={{fontSize:13,fontWeight:700,marginBottom:6,display:"flex",alignItems:"center",gap:6}}><AlertTriangle size={14} color="#ca8a04"/>SP Aktif</div>{spp.map(s=><div key={s.id} style={{display:"flex",justifyContent:"space-between",padding:"4px 0"}}><div><span style={bg("sp"+s.lv)}>SP {s.lv}</span><span style={{fontSize:12,marginLeft:8}}>{s.r}</span></div><span style={{fontSize:11,color:"#ca8a04"}}>{Math.ceil((new Date(s.ex)-new Date())/864e5)} hari</span></div>)}</div>}
{ml.length>0&&<div className="cd"><div className="ct" style={{marginBottom:8}}>Pengajuan Terakhir</div>{ml.map(l=><div key={l.id} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid #f8f9fb"}}><span style={{fontSize:13}}>{l.t} — {l.s}</span><span style={bg(l.st.toLowerCase())}>{l.st}</span></div>)}</div>}
</div>;};

// ═══ ADMIN DASHBOARD ═══
const ADash=()=>{
const today=new Date().getDate();
let th=0,tt=0,ta=0;em.forEach(e=>{const at=gA(e.id,today,new Date());if(at.st==="Hadir"||at.st==="Terlambat")th++;else if(at.st==="Alpha")ta++;if(at.st==="Terlambat")tt++;});
let mh=0,mt=0,ma=0,mol=0,mow=0;em.forEach(e=>{const rc2=pR(e.id,e.pd);mh+=rc2.h;mt+=rc2.t;ma+=rc2.a;mol=rj(mol+rc2.ol);mow=rj(mow+rc2.ow);});
return <><div className="cd" style={{marginBottom:16}}><div className="ct" style={{marginBottom:12}}>Hari Ini — {new Date().getDate()} {MN[new Date().getMonth()]} {new Date().getFullYear()}</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:10}}>{[{l:"Hadir",v:th,c:"#16a34a",Ic:UserCheck},{l:"Terlambat",v:tt,c:"#ca8a04",Ic:Clock},{l:"Alpha",v:ta,c:"#ef4444",Ic:X},{l:"Pending Cuti",v:pN,c:BR,Ic:FileText}].map((x,i)=><div key={i} style={{display:"flex",alignItems:"center",gap:10,padding:12,background:"#f8f9fb",borderRadius:12}}><div style={{width:36,height:36,borderRadius:10,background:x.c+"12",display:"flex",alignItems:"center",justifyContent:"center"}}><x.Ic size={16} color={x.c}/></div><div><div className="sl">{x.l}</div><div className="sv2" style={{color:x.c}}>{x.v}</div></div></div>)}</div></div>
<div className="cd" style={{marginBottom:16}}><div className="ct" style={{marginBottom:12}}>Periode Ini</div>
<div className="sg">{[{l:"Kehadiran",v:mh,c:"#16a34a",Ic:UserCheck},{l:"Terlambat",v:mt,c:"#ca8a04",Ic:Clock},{l:"Alpha",v:ma,c:"#ef4444",Ic:X},{l:"Lembur",v:fj(mol),c:"#d97706",Ic:TrendingUp},{l:"Lembur Hari Libur",v:fj(mow),c:"#c2410c",Ic:Sun},{l:"Pending",v:pN,c:BR,Ic:FileText}].map((x,i)=><div key={i} className="sc"><div style={{display:"flex",alignItems:"center",gap:10}}><div style={{width:36,height:36,borderRadius:10,background:x.c+"12",display:"flex",alignItems:"center",justifyContent:"center"}}><x.Ic size={16} color={x.c}/></div><div><div className="sl">{x.l}</div><div className="sv2" style={{color:x.c}}>{x.v}</div></div></div></div>)}</div></div>
<div className="cd"><div className="ch"><span className="ct">Ringkasan Karyawan</span></div><div className="tw"><table><thead><tr><th>Nama</th><th>Jabatan</th><th>Gaji Tgl</th><th>Sisa Cuti</th><th>SP</th></tr></thead><tbody>{em.map((e,i)=>{const cu=CQ-cU(e.id),spp=aS(e.id);return <tr key={e.id}><td><div className="er"><div className="av" style={{background:AV[i%9]}}>{e.n[0]}</div><span style={{fontWeight:600}}>{e.n}</span></div></td><td style={{color:"#64748b"}}>{e.p}</td><td><span style={bg("cuti")}>Tgl {e.pd}</span></td><td style={{fontWeight:600,color:cu<=3?"#ef4444":"#16a34a"}}>{cu}/{CQ}</td><td>{spp.length?spp.map(s=><span key={s.id} style={{...bg("sp"+s.lv),marginRight:3}}>SP{s.lv}</span>):"-"}</td></tr>;})}</tbody></table></div></div>
{pN>0&&<div className="cd"><div className="ch"><span className="ct">Menunggu Approval</span><span className="nb">{pN}</span></div><div className="tw"><table><thead><tr><th>Nama</th><th>Tipe</th><th>Tanggal</th><th>Alasan</th><th>Aksi</th></tr></thead><tbody>{lv.filter(l=>l.st==="Pending").map(l=><tr key={l.id}><td style={{fontWeight:600}}>{l.en}</td><td><span style={bg(l.t.toLowerCase())}>{l.t}</span></td><td>{l.s}</td><td style={{maxWidth:140,whiteSpace:"normal",fontSize:12}}>{l.r}</td><td><div style={{display:"flex",gap:4}}><button className="btn bs" onClick={()=>{sLv(p=>p.map(x=>x.id===l.id?{...x,st:"Approved"}:x));su("leaves",{status:"Approved"},"id=eq."+l.id);}}><Check size={12}/></button><button className="btn bd bs" onClick={()=>{sLv(p=>p.map(x=>x.id===l.id?{...x,st:"Rejected"}:x));su("leaves",{status:"Rejected"},"id=eq."+l.id);}}><X size={12}/></button></div></td></tr>)}</tbody></table></div></div>}</>;};

const AAtt=()=><div className="cd"><div className="ch"><span className="ct">Kehadiran</span></div><div className="tw"><table><thead><tr><th>Tanggal</th><th>Nama</th><th>Masuk</th><th>Keluar</th><th>Status</th><th>OT In</th><th>OT Out</th><th>Lembur</th><th>Override</th></tr></thead><tbody>{[4,3,2,1].flatMap(d=>em.map((e,i)=>{const a=gA(e.id,d);if(a.st==="Alpha")return null;return <tr key={d+"-"+e.id}><td style={{fontWeight:600}}>{d} April</td><td><div className="er"><div className="av sm" style={{background:AV[i%9]}}>{e.n[0]}</div>{e.n}</div></td><td className="mo">{a.ci||"-"}</td><td className="mo">{a.co||"-"}</td><td><span style={bg(a.st)}>{a.st}{a.la?" +"+a.lm+"m":""}</span></td><td className="mo">{a.oi||"-"}</td><td className="mo">{a.oo||"-"}</td><td>{a.oh>0?<span style={bg(a.wt?"lembur hari libur":"lembur")}>{fj(a.oh)}{a.obk>0?" (-"+a.obk+"m)":""}</span>:"-"}</td><td>{(()=>{const ok=e.id+"-"+d;const cur=ovr[ok];return <div style={{display:"flex",gap:4,alignItems:"center"}}><input className="inp" type="number" step="0.5" placeholder="jam" value={cur?.oh!==undefined?cur.oh:""} onChange={ev=>{const v=ev.target.value;if(v==="")sOvr(p=>{const n={...p};delete n[ok];return n;});else sOvr(p=>({...p,[ok]:{oh:+v,obk:0}}));}} style={{width:70,padding:"4px 8px",fontSize:11}}/>{cur?.oh!==undefined&&<span style={{fontSize:10,color:BR,fontWeight:600}}>manual</span>}</div>;})()}</td></tr>;})).filter(Boolean)}</tbody></table></div></div>;

const ACal=()=>{const emp=sls?em.find(e=>e.id===sls):null;const rc=emp?pR(emp.id,emp.pd):null;const prd=emp?pLbl(emp.pd):"";
return <div className="cd"><div className="ch"><span className="ct">Rekap Periode Gaji</span></div>
<div style={{display:"flex",flexWrap:"wrap",gap:6,marginBottom:16}}>{em.map(e=><button key={e.id} className={"btn bs "+(sls===e.id?"":"bo")} style={sls===e.id?{background:BR,color:"#fff"}:{}} onClick={()=>sSls(sls===e.id?"":e.id)}>{e.n}</button>)}</div>
{emp&&rc&&<><div style={{background:BL,borderRadius:14,padding:16,marginBottom:16,border:"1px solid rgba(175,25,23,.08)"}}><div className="er" style={{marginBottom:8}}><div className="av" style={{background:BR,width:40,height:40,fontSize:16}}>{emp.n[0]}</div><div><div style={{fontWeight:700,fontSize:16}}>{emp.n}</div><div style={{fontSize:12,color:"#64748b"}}>{emp.p} — Gaji tgl {emp.pd}</div><div style={{fontSize:12,color:BR,fontWeight:600,marginTop:2}}>Periode: {prd}</div></div></div>
{savMsg&&<div style={{padding:"8px 14px",borderRadius:10,fontSize:12,fontWeight:600,marginBottom:10,background:savMsg.includes("GAGAL")?"#fef2f2":savMsg.includes("✓")?"#f0fdf4":"#fefce8",color:savMsg.includes("GAGAL")?"#dc2626":savMsg.includes("✓")?"#16a34a":"#ca8a04"}}>{savMsg}</div>}<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(100px,1fr))",gap:8}}>{[{l:"Kehadiran",v:rc.h,c:"#16a34a"},{l:"Sakit",v:rc.sk,c:"#dc2626"},{l:"Izin",v:rc.iz,c:"#7c3aed"},{l:"Alpha",v:rc.a,c:"#ef4444"},{l:"Lembur",v:fj(rj(rc.ol+rc.ow)),c:"#d97706"},{l:"Sisa Cuti",v:(CQ-cU(emp.id))+"/"+CQ,c:"#2563eb"}].map((x,i)=><div key={i} style={{background:"#fff",borderRadius:10,padding:10,textAlign:"center"}}><div style={{fontSize:20,fontWeight:700,color:x.c}}>{x.v}</div><div style={{fontSize:10,color:"#94a3b8",fontWeight:600}}>{x.l}</div></div>)}</div></div>
<div className="tw"><table><thead><tr><th>Tgl</th><th>Hari</th><th>Masuk</th><th>Keluar</th><th>Status</th><th>Lembur</th><th>Edit</th></tr></thead><tbody>{(()=>{const pr2=getPR(emp.pd);const ds=[];for(let dt=new Date(pr2.sd);dt<=pr2.ed;dt.setDate(dt.getDate()+1)){ds.push(new Date(dt));}return ds.map(dt=>{const d=dt.getDate();const mo=dt.getMonth();const w=dt.getDay();const dn=["Min","Sen","Sel","Rab","Kam","Jum","Sab"][w];const a=gA(emp.id,d,new Date(dt));const we=w===0;const hol=isHoliday(new Date(dt));if((we||hol)&&a.oh===0&&a.st==="-"){const ds2h=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');const isFutH=new Date(dt)>new Date(new Date().setHours(0,0,0,0));return <tr key={dt.toISOString()} style={{opacity:.4}}><td>{d} {MN[mo]}</td><td style={{color:BR}}>{dn}</td><td colSpan={3} style={{color:"#cbd5e1",fontSize:12}}>{hol||"Libur"}</td><td>-</td>{!isFutH&&<td><select className="inp" value={manAtt[emp.id+"-"+ds2h]||""} onChange={e=>{const v=e.target.value;if(v)setAtt(emp.id,ds2h,v);else{sManAtt(p=>{const n={...p};delete n[emp.id+"-"+ds2h];return n;});fetch(SUPA+"/rest/v1/daily_status?employee_id=eq."+emp.id+"&date=eq."+ds2h,{method:"DELETE",headers:SH}).catch(()=>{});}}} style={{width:90,padding:"4px 6px",fontSize:11}}><option value="">Auto</option><option value="Hadir">Hadir</option><option value="Sakit">Sakit</option><option value="Izin">Izin</option><option value="Cuti">Cuti</option><option value="Alpha">Alpha</option></select></td>}</tr>;}const ds2=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');const isFut=new Date(dt)>new Date(new Date().setHours(0,0,0,0));
return <tr key={dt.toISOString()}><td style={{fontWeight:600}}>{d} {MN[mo]}</td><td style={{color:we?BR:"inherit"}}>{dn}</td><td className="mo">{a.ci||"-"}</td><td className="mo">{a.co||"-"}</td><td>{isFut?<span style={{color:"#cbd5e1"}}>—</span>:<span style={bg(a.st==="Hadir"||a.st==="Terlambat"?"hadir":a.st.toLowerCase())}>{a.st}</span>}</td><td>{a.oh>0?<span style={bg(a.wt?"lembur hari libur":"lembur")}>{fj(a.oh)}</span>:"-"}</td>{!isFut&&<td><select className="inp" value={manAtt[emp.id+"-"+ds2]||""} onChange={e=>{const v=e.target.value;if(v)setAtt(emp.id,ds2,v);else{sManAtt(p=>{const n={...p};delete n[emp.id+"-"+ds2];return n;});fetch(SUPA+"/rest/v1/daily_status?employee_id=eq."+emp.id+"&date=eq."+ds2,{method:"DELETE",headers:SH}).catch(()=>{});}}} style={{width:90,padding:"4px 6px",fontSize:11}}><option value="">Auto</option><option value="Hadir">Hadir</option><option value="Sakit">Sakit</option><option value="Izin">Izin</option><option value="Cuti">Cuti</option><option value="Alpha">Alpha</option></select></td>}</tr>;});})()}</tbody></table></div></>}</div>;};

const APay=()=>{const sel=sls||em[0]?.id;const pds=eSP(sel);
return <><div className="cd"><div className="ch"><span className="ct">Slip Gaji</span><select className="inp" style={{fontWeight:600,width:"auto",maxWidth:200}} value={sel} onChange={e=>sSls(e.target.value)}>{em.map(e=><option key={e.id} value={e.id}>{e.n}</option>)}</select></div>
{!sns?<button className="btn" onClick={()=>{sSns(true);sSnp("April 2026");}}><Plus size={14}/>Buat Slip Baru</button>:<div style={{display:"flex",gap:6,alignItems:"center",marginBottom:8}}><input className="inp" value={snp} onChange={e=>sSnp(e.target.value)} placeholder="April 2026" style={{width:220}}/><button className="btn bs" onClick={()=>{if(snp){sEk({e:sel,p:snp});sSns(false);}}}>Buat</button><button className="btn bo bs" onClick={()=>sSns(false)}>Batal</button></div>}
</div>
{ek?.e===sel&&<SlipEd ei={sel} pr={ek.p} ex={sl[sel]?.[ek.p]} onSv={(it,nt)=>{svSl(sel,ek.p,it,nt);sEk(null);}} onCn={()=>sEk(null)}/>}
{pds.filter(p=>!(ek?.e===sel&&ek?.p===p)).map(p=><SlipVw key={p} ei={sel} pr={p} dt={sl[sel][p]} adm={true} onEd={()=>sEk({e:sel,p})} onDl={()=>{sSl(prev=>{const n={...prev};if(n[sel]){const c={...n[sel]};delete c[p];n[sel]=c;}return n;});}}/>)}
{pds.length===0&&!ek&&<div className="cd" style={{textAlign:"center",color:"#94a3b8",padding:32}}>Belum ada slip gaji.</div>}</>;};

const ALvWrap=()=>{const[elv,sElv]=useState(null);const[elvF,sElvF]=useState({t:"",s:"",e:"",d:0,r:"",st:""});const[nlv,sNlv]=useState(false);const[nlvF,sNlvF]=useState({ei:"",t:"Cuti",s:"",e:"",d:1,r:""});
return <div className="cd"><div className="ch"><span className="ct">Cuti / Sakit / Izin</span><button className="btn" onClick={()=>sNlv(!nlv)}>{nlv?"Batal":<><Plus size={14}/>Tambah</>}</button></div>
{nlv&&<AdminLeaveForm em={em} onSubmit={(f)=>{const emp=em.find(e=>e.id===f.ei);si("leaves",{employee_id:f.ei,employee_name:emp.n,type:f.t,start_date:f.s,end_date:f.e||f.s,days:f.d||1,reason:f.r,status:"Approved"}).then(r=>{if(r?.[0])sLv(p=>[...p,{id:r[0].id,ei:f.ei,en:emp.n,t:f.t,s:f.s,e:f.e||f.s,d:f.d||1,r:f.r,st:"Approved"}]);});sNlv(false);}}/>}
<div className="tw"><table><thead><tr><th>Nama</th><th>Tipe</th><th>Tanggal</th><th>Hari</th><th>Sisa Cuti</th><th>Alasan</th><th>Status</th><th>Aksi</th></tr></thead><tbody>{lv.map(l=>{const cu=CQ-cU(l.ei);const isE=elv===l.id;
return isE?<tr key={l.id} style={{background:"#f8f9fb"}}><td style={{fontWeight:600}}>{l.en}</td><td><select className="inp" value={elvF.t} onChange={e=>sElvF(p=>({...p,t:e.target.value}))} style={{width:80}}>{["Cuti","Sakit","Izin"].map(t=><option key={t}>{t}</option>)}</select></td><td><input className="inp" type="date" value={elvF.s} onChange={e=>sElvF(p=>({...p,s:e.target.value}))} style={{width:130}}/></td><td><input className="inp" type="number" value={elvF.d} onChange={e=>sElvF(p=>({...p,d:+e.target.value}))} style={{width:50}}/></td><td style={{fontWeight:600,color:cu<=3?"#ef4444":"#16a34a"}}>{cu}/{CQ}</td><td><input className="inp" value={elvF.r} onChange={e=>sElvF(p=>({...p,r:e.target.value}))} style={{width:120}}/></td><td><select className="inp" value={elvF.st} onChange={e=>sElvF(p=>({...p,st:e.target.value}))} style={{width:90}}>{["Pending","Approved","Rejected"].map(s=><option key={s}>{s}</option>)}</select></td><td><div style={{display:"flex",gap:4}}><button className="btn bs" onClick={()=>{sLv(p=>p.map(x=>x.id===l.id?{...x,t:elvF.t,s:elvF.s,d:elvF.d,r:elvF.r,st:elvF.st}:x));su("leaves",{type:elvF.t,start_date:elvF.s,days:elvF.d,reason:elvF.r,status:elvF.st},"id=eq."+l.id);sElv(null);}}><Check size={12}/></button><button className="btn bo bs" onClick={()=>sElv(null)}><X size={12}/></button></div></td></tr>
:<tr key={l.id}><td style={{fontWeight:600}}>{l.en}</td><td><span style={bg(l.t.toLowerCase())}>{l.t}</span></td><td>{l.s}{l.s!==l.e?" s/d "+l.e:""}</td><td>{l.d}</td><td style={{fontWeight:600,color:cu<=3?"#ef4444":"#16a34a"}}>{cu}/{CQ}</td><td style={{maxWidth:140,whiteSpace:"normal",fontSize:12}}>{l.r}</td><td><span style={bg(l.st.toLowerCase())}>{l.st}</span></td><td><div style={{display:"flex",gap:4}}>{l.st==="Pending"&&<><button className="btn bs" onClick={()=>{sLv(p=>p.map(x=>x.id===l.id?{...x,st:"Approved"}:x));su("leaves",{status:"Approved"},"id=eq."+l.id);}}><Check size={12}/></button><button className="btn bd bs" onClick={()=>{sLv(p=>p.map(x=>x.id===l.id?{...x,st:"Rejected"}:x));su("leaves",{status:"Rejected"},"id=eq."+l.id);}}><X size={12}/></button></>}<button className="btn bo bs" onClick={()=>{sElv(l.id);sElvF({t:l.t,s:l.s,d:l.d,r:l.r,st:l.st});}}><Edit3 size={12}/></button><button className="btn bd bs" onClick={()=>{sLv(p=>p.filter(x=>x.id!==l.id));sd("leaves","id=eq."+l.id);}}><Trash2 size={12}/></button></div></td></tr>;})}</tbody></table></div></div>;};

const ASP=()=><div className="cd"><div className="ch"><span className="ct">Surat Peringatan</span><button className="btn" onClick={()=>sSsf(!ssf)}>{ssf?"Batal":<><Plus size={14}/>Terbitkan SP</>}</button></div>
{ssf&&<SPForm em={em} PL={PL} onSubmit={(f)=>{const emp=em.find(e=>e.id===f.e);si("warnings",{employee_id:f.e,employee_name:emp.n,level:f.l,reason:f.r,issued_date:f.dt,expiry_date:f.ex}).then(r=>{if(r?.[0])sSp(p=>[...p,{id:r[0].id,ei:f.e,en:emp.n,lv:f.l,r:f.r,dt:f.dt,ex:f.ex}]);});sSsf(false);}} onCancel={()=>sSsf(false)}/>}
<div className="tw"><table><thead><tr><th>Nama</th><th>Level</th><th>Alasan</th><th>Tanggal Terbit</th><th>Kadaluarsa</th><th>Sisa</th><th>Aksi</th></tr></thead><tbody>{sp.map(s=>{const dl=Math.ceil((new Date(s.ex)-new Date())/864e5);const isE=espE===s.id;
return isE?<tr key={s.id} style={{background:"#f8f9fb"}}><td style={{fontWeight:600}}>{s.en}</td><td><select className="inp" value={espF.lv} onChange={e=>sEspF(p=>({...p,lv:+e.target.value}))} style={{width:70}}><option value={1}>SP 1</option><option value={2}>SP 2</option><option value={3}>SP 3</option></select></td><td><input className="inp" value={espF.r} onChange={e=>sEspF(p=>({...p,r:e.target.value}))} style={{width:140}}/></td><td><input className="inp" type="date" value={espF.dt} onChange={e=>sEspF(p=>({...p,dt:e.target.value}))} style={{width:130}}/></td><td><input className="inp" type="date" value={espF.ex} onChange={e=>sEspF(p=>({...p,ex:e.target.value}))} style={{width:130}}/></td><td>-</td><td><div style={{display:"flex",gap:4}}><button className="btn bs" onClick={()=>{sSp(p=>p.map(x=>x.id===s.id?{...x,lv:espF.lv,r:espF.r,dt:espF.dt,ex:espF.ex}:x));su("warnings",{level:espF.lv,reason:espF.r,issued_date:espF.dt,expiry_date:espF.ex},"id=eq."+s.id);sEspE(null);}}><Check size={12}/></button><button className="btn bo bs" onClick={()=>sEspE(null)}><X size={12}/></button></div></td></tr>
:<tr key={s.id}><td style={{fontWeight:600}}>{s.en}</td><td><span style={bg("sp"+s.lv)}>SP {s.lv}</span></td><td style={{maxWidth:160,whiteSpace:"normal",fontSize:12}}>{s.r}</td><td>{s.dt}</td><td>{s.ex}</td><td>{dl>0?<span style={{color:"#ca8a04",fontWeight:600}}>{dl} hari</span>:<span style={bg("approved")}>Selesai</span>}</td><td><div style={{display:"flex",gap:4}}><button className="btn bo bs" onClick={()=>{sEspE(s.id);sEspF({lv:s.lv,r:s.r,dt:s.dt,ex:s.ex});}}><Edit3 size={12}/></button><button className="btn bd bs" onClick={()=>{sSp(p=>p.filter(x=>x.id!==s.id));sd("warnings","id=eq."+s.id);}}><Trash2 size={12}/></button></div></td></tr>;})}</tbody></table></div></div>;

const ALbr=()=>{
const lbrEmp=(ei)=>lbr.filter(l=>l.ei===ei);
const lbrTotal=(ei)=>rj(lbr.filter(l=>l.ei===ei).reduce((a,l)=>a+l.jam,0));
return <div className="cd"><div className="ch"><span className="ct">Input Lembur</span><button className="btn" onClick={()=>sShowLbr(!showLbr)}>{showLbr?"Batal":<><Plus size={14}/>Input Lembur</>}</button></div>
<div style={{fontSize:12,color:"#64748b",marginBottom:12,padding:"10px 14px",background:"#fefce8",borderRadius:10,lineHeight:1.8}}>
Lembur hanya dihitung jika ada perintah dari atasan. Admin input manual di sini.<br/>
Potongan istirahat: lembur &gt;2 jam dipotong 30 menit, &gt;4 jam dipotong 60 menit.
</div>
{showLbr&&<LbrForm em={em} onSubmit={(f)=>{const emp=em.find(e=>e.id===f.ei);si("overtime",{employee_id:f.ei,employee_name:emp.n,date:f.tgl,hours:f.jam,notes:f.ket}).then(r=>{if(r?.[0])sLbr(p=>[...p,{id:r[0].id,ei:f.ei,en:emp.n,tgl:f.tgl,jam:f.jam,ket:f.ket}]);});sShowLbr(false);}}/>}

<div style={{fontSize:13,fontWeight:700,marginBottom:10}}>Rekap Lembur per Karyawan</div>
<div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginBottom:16}}>
{em.map((e,i)=>{const t=lbrTotal(e.id);return <div key={e.id} style={{background:"#fff",borderRadius:12,padding:12,border:"1px solid #eef1f5",display:"flex",alignItems:"center",gap:8}}>
<div className="av" style={{background:AV[i%9]}}>{e.n[0]}</div>
<div><div style={{fontWeight:600,fontSize:13}}>{e.n}</div><div style={{fontSize:18,fontWeight:700,color:t>0?"#d97706":"#94a3b8"}}>{t>0?fj(t):"-"}</div></div>
</div>;})}
</div>

<div style={{fontSize:13,fontWeight:700,marginBottom:10}}>Riwayat Input Lembur</div>
{lbr.length===0?<div style={{textAlign:"center",padding:20,color:"#94a3b8"}}>Belum ada data lembur.</div>:
<div className="tw"><table><thead><tr><th>Nama</th><th>Tanggal</th><th>Jam Lembur</th><th>Keterangan</th><th>Aksi</th></tr></thead>
<tbody>{[...lbr].reverse().map(l=>{const isE=eLbr===l.id;
return isE?<tr key={l.id} style={{background:"#f8f9fb"}}>
<td style={{fontWeight:600}}>{l.en}</td>
<td>{l.tgl}</td>
<td><input className="inp" type="number" step="0.5" value={eLbrF.jam} onChange={e=>sELbrF(p=>({...p,jam:+e.target.value}))} style={{width:80}}/></td>
<td><input className="inp" value={eLbrF.ket} onChange={e=>sELbrF(p=>({...p,ket:e.target.value}))} style={{width:150}}/></td>
<td><div style={{display:"flex",gap:4}}><button className="btn bs" onClick={()=>{sLbr(p=>p.map(x=>x.id===l.id?{...x,jam:eLbrF.jam,ket:eLbrF.ket}:x));su("overtime",{hours:eLbrF.jam,notes:eLbrF.ket},"id=eq."+l.id);sELbr(null);}}><Check size={12}/></button><button className="btn bo bs" onClick={()=>sELbr(null)}><X size={12}/></button></div></td>
</tr>:<tr key={l.id}>
<td><div className="er"><div className="av sm" style={{background:AV[em.findIndex(e=>e.id===l.ei)%9]}}>{l.en[0]}</div>{l.en}</div></td>
<td>{l.tgl}</td>
<td style={{fontWeight:600,color:"#d97706"}}>{fj(l.jam)}</td>
<td style={{fontSize:12,color:"#64748b"}}>{l.ket||"-"}</td>
<td><div style={{display:"flex",gap:4}}><button className="btn bo bs" onClick={()=>{sELbr(l.id);sELbrF({jam:l.jam,ket:l.ket});}}><Edit3 size={12}/></button><button className="btn bd bs" onClick={()=>{sLbr(p=>p.filter(x=>x.id!==l.id));sd("overtime","id=eq."+l.id);}}><Trash2 size={12}/></button></div></td>
</tr>;})}</tbody></table></div>}
</div>;};

const ADisp=()=><div className="cd"><div className="ch"><span className="ct">Dispensasi Keterlambatan</span></div><div style={{fontSize:12,color:"#64748b",marginBottom:12,padding:"10px 14px",background:BL,borderRadius:10}}>Toleransi: {TOL} menit dari 08:00.</div><div className="tw"><table><thead><tr><th>Tanggal</th><th>Nama</th><th>Masuk</th><th>Telat</th><th>Status</th><th>Aksi</th></tr></thead><tbody>{[4,3,2,1].flatMap(d=>em.map((e,i)=>{const a=gA(e.id,d);if(a.lm<=0||a.wt)return null;const k=e.id+"-"+d;return <tr key={k}><td style={{fontWeight:600}}>{d} Apr</td><td><div className="er"><div className="av sm" style={{background:AV[i%9]}}>{e.n[0]}</div>{e.n}</div></td><td className="mo">{a.ci}</td><td><span style={bg("terlambat")}>+{a.lm}m</span></td><td><span style={bg(dp[k]?"hadir":"terlambat")}>{dp[k]?"Hadir":"Terlambat"}</span></td><td><button className={"btn bs "+(dp[k]?"bd":"bo")} onClick={()=>tD(e.id,d)}>{dp[k]?"Cabut":"Dispensasi"}</button></td></tr>;})).filter(Boolean)}</tbody></table></div></div>;

const AEmp=()=><div className="cd"><div className="ch"><span className="ct">Karyawan & Jabatan</span></div><div className="tw"><table><thead><tr><th>ID</th><th>Nama</th><th>Jabatan</th><th>Tgl Gaji</th><th>Gaji Pokok</th><th>Aksi</th></tr></thead><tbody>{em.map((e,i)=>{const isE=ee===e.id;return <tr key={e.id}><td className="mo" style={{color:BR,fontWeight:600}}>{e.id}</td><td><div className="er"><div className="av" style={{background:AV[i%9]}}>{e.n[0]}</div><strong>{e.n}</strong></div></td><td>{isE?<select className="inp" value={ef.p} onChange={x=>sEf(p=>({...p,p:x.target.value}))} style={{width:130}}>{PL.map(p=><option key={p}>{p}</option>)}</select>:e.p}</td><td>{isE?<input className="inp" type="number" value={ef.pd} onChange={x=>sEf(p=>({...p,pd:+x.target.value}))} style={{width:60}}/>:<span style={bg("cuti")}>Tgl {e.pd}</span>}</td><td>{isE?<input className="inp" type="number" value={ef.s} onChange={x=>sEf(p=>({...p,s:+x.target.value}))} style={{width:120}}/>:fm(e.s)}</td><td>{isE?<div style={{display:"flex",gap:4}}><button className="btn bs" onClick={()=>{sEm(p=>p.map(x=>x.id===e.id?{...x,...ef}:x));su("employees",{position:ef.p,pay_date:ef.pd,salary:ef.s},"id=eq."+e.id);sEe(null);}}><Check size={12}/></button><button className="btn bo bs" onClick={()=>sEe(null)}><X size={12}/></button></div>:<button className="btn bo bs" onClick={()=>{sEe(e.id);sEf({p:e.p,pd:e.pd,s:e.s});}}><Edit3 size={12}/></button>}</td></tr>;})}</tbody></table></div></div>;

const AAcc=()=><div className="cd"><div className="ch"><span className="ct">Akun Karyawan</span><button className="btn" onClick={()=>sShowReg(!showReg)}>{showReg?"Batal":<><Plus size={14}/>Daftarkan</>}</button></div>
<p style={{fontSize:12,color:"#94a3b8",marginBottom:10}}>Admin mendaftarkan akun. Karyawan bisa ubah password sendiri.</p>
{showReg&&<RegForm em={em} ac={ac} onError={sAe} onSubmit={(f)=>{si("accounts",{username:f.u,password:f.p,role:"employee",employee_id:f.e}).then(r=>{if(r?.[0])sAc(p=>[...p,{id:r[0].id,u:f.u,p:f.p,r:"employee",e:f.e}]);});sAe("");sShowReg(false);}} onCancel={()=>sShowReg(false)}/>}
<div className="tw"><table><thead><tr><th>Nama</th><th>Username</th><th>Status</th></tr></thead><tbody>{em.map(e=>{const a=ac.find(x=>x.e===e.id);return <tr key={e.id}><td style={{fontWeight:600}}>{e.n}</td><td>{a?a.u:<span style={{color:"#94a3b8"}}>-</span>}</td><td>{a?<span style={bg("approved")}>Aktif</span>:<span style={bg("alpha")}>Belum</span>}</td></tr>;})}</tbody></table></div></div>;

const AUp=()=><div className="cd"><div className="ch"><span className="ct">Upload Deli 3765</span></div><div className="ua" onClick={()=>{sUps("r");setTimeout(()=>sUps("p"),1200);setTimeout(()=>sUps("d"),2800);}}><Upload size={32} color={BR} style={{marginBottom:8}}/><div style={{fontWeight:700,fontSize:15}}>Upload File</div><div style={{fontSize:13,color:"#94a3b8",marginTop:4}}>.dat .xls .csv</div></div>{ups&&<div style={{marginTop:12,padding:12,borderRadius:10,fontWeight:600,fontSize:13,background:ups==="d"?"#f0fdf4":"#fefce8",color:ups==="d"?"#16a34a":"#ca8a04"}}>{ups==="r"?"Membaca...":ups==="p"?"Memproses...":"Berhasil!"}</div>}
<div style={{marginTop:16,padding:16,background:"#f8f9fb",borderRadius:12,fontSize:12,color:"#64748b",lineHeight:2}}>
<div style={{fontWeight:700,color:"#0f172a",marginBottom:4}}>Flow Absensi di Mesin Deli 3765</div>
<strong>Hari kerja (2x absen):</strong> Masuk 08:00 &#8594; Pulang (jam berapapun). Lembur diinput manual oleh admin<br/>
<strong>Hari libur / tanggal merah:</strong> Jika ada absen, semua dihitung lembur<br/>
<strong>Potongan istirahat lembur otomatis:</strong> Lembur &gt;2 jam dipotong 30 menit, &gt;4 jam dipotong 60 menit<br/>
<strong>Time Card:</strong> Log absen harian (Before Noon In/Out, After Noon In/Out, Overtime In/Out)
</div></div>;

const EAtt=()=>{if(!le)return null;const pr=getPR(le.pd);const days=[];for(let dt=new Date(pr.ed);dt>=pr.sd;dt.setDate(dt.getDate()-1)){days.push(new Date(dt));}const today2=new Date();today2.setHours(0,0,0,0);
return <div className="cd"><div className="ch"><span className="ct">Kehadiran</span></div><div style={{fontSize:12,color:"#94a3b8",marginBottom:10}}>Periode: <strong style={{color:"#0f172a"}}>{pLbl(le.pd)}</strong></div><div className="tw"><table><thead><tr><th>Tanggal</th><th>Hari</th><th>Masuk</th><th>Keluar</th><th>Status</th><th>Lembur</th></tr></thead><tbody>{days.map(dt=>{const d=dt.getDate();const mo=dt.getMonth();const w=dt.getDay();const dn=["Min","Sen","Sel","Rab","Kam","Jum","Sab"][w];const chk=new Date(dt);chk.setHours(0,0,0,0);if(chk>today2)return null;const a=gA(le.id,d,new Date(dt));const we=w===0;const hol=isHoliday(new Date(dt));if((we||hol)&&!a.wt)return <tr key={dt.toISOString()} style={{opacity:.3}}><td>{d} {MN[mo]}</td><td style={{color:BR}}>{dn}</td><td colSpan={4} style={{color:"#cbd5e1"}}>{hol||"Libur"}</td></tr>;if(a.st==="-")return null;return <tr key={dt.toISOString()}><td style={{fontWeight:600}}>{d} {MN[mo]}</td><td style={{color:we?BR:"inherit"}}>{dn}</td><td className="mo">{a.ci||"-"}</td><td className="mo">{a.co||"-"}</td><td><span style={bg(a.st.toLowerCase())}>{a.st}</span></td><td>{a.oh>0?<span style={bg(a.wt?"lembur hari libur":"lembur")}>{fj(a.oh)}{a.obk>0?" (-"+a.obk+"m istirahat)":""}</span>:"-"}</td></tr>;}).filter(Boolean)}</tbody></table></div></div>;};

const EPay=()=>{if(!le)return null;const pds=eSP(le.id);return <div className="cd"><div className="ch"><span className="ct">Slip Gaji</span></div>{pds.length===0?<div style={{textAlign:"center",padding:24,color:"#94a3b8"}}>Belum ada slip gaji.</div>:pds.map(p=><SlipVw key={p} ei={le.id} pr={p} dt={sl[le.id][p]} adm={false} onEd={()=>{}} onDl={()=>{}}/>)}</div>;};

const ELvWrap=()=>{if(!le)return null;const ml=lv.filter(l=>l.ei===le.id),cu=CQ-cU(le.id);
return <div className="cd"><div className="ch"><span className="ct">Cuti / Sakit / Izin</span><button className="btn" onClick={()=>sScl(!scl)}>{scl?"Batal":<><Plus size={14}/>Ajukan</>}</button></div>
<div style={{fontSize:13,color:"#64748b",marginBottom:10}}>Sisa cuti: <strong style={{color:cu<=3?"#ef4444":"#16a34a"}}>{cu} dari {CQ} hari</strong></div>
{scl&&<EmpLeaveForm le={le} cu={cu} CQ={CQ} onSubmit={(f)=>{si("leaves",{employee_id:le.id,employee_name:le.n,type:f.t,start_date:f.s,end_date:f.end,days:f.d,reason:f.r,status:"Pending"}).then(r=>{if(r?.[0])sLv(p=>[...p,{id:r[0].id,ei:le.id,en:le.n,t:f.t,s:f.s,e:f.end,d:f.d,r:f.r,st:"Pending"}]);});sScl(false);}}/>}
{ml.length>0&&<div className="tw"><table><thead><tr><th>Tipe</th><th>Tanggal</th><th>Hari</th><th>Alasan</th><th>Status</th></tr></thead><tbody>{ml.map(l=><tr key={l.id}><td><span style={bg(l.t.toLowerCase())}>{l.t}</span></td><td>{l.s}{l.s!==l.e?" s/d "+l.e:""}</td><td>{l.d}</td><td style={{maxWidth:160,whiteSpace:"normal",fontSize:12}}>{l.r}</td><td><span style={bg(l.st.toLowerCase())}>{l.st}</span></td></tr>)}</tbody></table></div>}</div>;};

const ESP2=()=>{if(!le)return null;const spp=sp.filter(s=>s.ei===le.id);return <div className="cd"><div className="ch"><span className="ct">Surat Peringatan</span></div>{spp.length===0?<div style={{textAlign:"center",padding:24,color:"#16a34a",fontWeight:600}}>Tidak ada SP aktif</div>:spp.map(s=>{const dl=Math.ceil((new Date(s.ex)-new Date())/864e5);return <div key={s.id} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",borderBottom:"1px solid #f8f9fb"}}><div><span style={bg("sp"+s.lv)}>SP {s.lv}</span><span style={{fontSize:13,marginLeft:10}}>{s.r}</span></div><span style={{fontSize:12,color:"#64748b"}}>{dl>0?dl+" hari lagi":"Selesai"}</span></div>;})}</div>;};

const EPw=()=>{if(!le)return null;const myAcc=ac.find(a=>a.e===le.id);
return <div className="cd"><div className="ch"><span className="ct">Ubah Password</span></div>
<ChpwForm myAcc={myAcc} ae={ae} onError={sAe} onSubmit={(newPw)=>{sAc(p=>p.map(a=>a.e===le.id?{...a,p:newPw}:a));const myAcc2=ac.find(a=>a.e===le.id);if(myAcc2)su("accounts",{password:newPw},"id=eq."+myAcc2.id);sAe("");}}/></div>;};

const renderView=()=>{switch(vw){
case"dashboard":return ADash();
case"attendance":return AAtt();
case"calendar":return ACal();
case"payslip":return APay();
case"leave":return <ALvWrap/>;
case"sp2":return ASP();
case"lembur":return ALbr();
case"dispensasi":return ADisp();
case"employees":return AEmp();
case"accounts":return AAcc();
case"upload":return AUp();
case"emp-dash":return EDash();
case"emp-att":return EAtt();
case"emp-pay":return EPay();
case"emp-leave":return <ELvWrap/>;
case"emp-sp":return ESP2();
case"emp-pw":return EPw();
default:return ADash();
}};

return <><style>{css}</style><div className="ly">
<div className={"so"+(so?" sh":"")} onClick={()=>sSo(false)}/>
<aside className={"sb"+(so?" op":"")}>
<div style={{padding:"4px 8px 16px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #eef1f5",marginBottom:12}}><img src={LR} alt="" style={{width:32}}/><div><div style={{fontSize:14,fontWeight:700,letterSpacing:"-0.02em"}}>Awake HRIS</div><div style={{fontSize:10,color:"#94a3b8"}}>{rl==="admin"?"Admin":"Karyawan"}</div></div></div>
{nav.map(n=>{const NI=n.ic;return <button key={n.id} className={"ni"+(vw===n.id?" act":"")} onClick={()=>{sVw(n.id);sSo(false);sAe("");}}><NI size={18}/><span>{n.l}</span>{n.id==="leave"&&pN>0&&rl==="admin"&&<span className="nb">{pN}</span>}</button>;})}
<div style={{marginTop:"auto",borderTop:"1px solid #eef1f5",paddingTop:8}}><button className="ni" onClick={()=>{sPg("login");sRl(null);sLe(null);sAe("");sLf({u:"",p:""});}}><LogOut size={18}/>Logout</button></div>
<div style={{padding:8,display:"flex",alignItems:"center",gap:8,background:"#f8f9fb",borderRadius:10,marginTop:8}}><div className="av" style={{background:BR}}>{rl==="admin"?"A":le?.n[0]}</div><div><div style={{fontSize:13,fontWeight:600}}>{rl==="admin"?"Admin":le?.n}</div><div style={{fontSize:11,color:"#94a3b8"}}>{rl==="admin"?"Super Admin":le?.p}</div></div></div>
</aside>
<main className="mn"><div className="tb"><div style={{display:"flex",alignItems:"center",gap:10}}><button className="mb" onClick={()=>sSo(true)}><Menu size={22}/></button><h1>{titles[vw]}</h1></div>
{rl==="admin"&&pN>0&&<button className="btn bs" style={{position:"relative"}} onClick={()=>sVw("leave")}><Bell size={16}/><span style={{position:"absolute",top:-4,right:-4,width:16,height:16,borderRadius:"50%",background:"#ef4444",color:"#fff",fontSize:9,fontWeight:700,display:"flex",alignItems:"center",justifyContent:"center"}}>{pN}</span></button>}
</div>{renderView()}</main></div></>;
}
