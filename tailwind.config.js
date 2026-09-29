export default {content:['./index.html','./src/**/*.{js,jsx}'],theme:{extend:{
colors:{navy:{DEFAULT:'#0B2A6F',900:'#06163D',800:'#0A2259'},teal:{DEFAULT:'#12A0B8',400:'#3CC3D8',50:'#E8F6F9'},ice:'#F3F8FC',ink:'#0A1630'},
fontFamily:{display:['"Bricolage Grotesque"','sans-serif'],body:['"Instrument Sans"','sans-serif']},
keyframes:{draw:{to:{strokeDashoffset:'0'}},floaty:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-10px)'}},pulseRing:{'0%':{transform:'scale(.8)',opacity:.6},'100%':{transform:'scale(2.2)',opacity:0}}},
animation:{floaty:'floaty 6s ease-in-out infinite',ring:'pulseRing 3s ease-out infinite'}}},plugins:[]};
