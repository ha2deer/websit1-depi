let sora=document.querySelector('.sora');
let text=document.querySelector('.text');
let btns=document.querySelectorAll('.shape');
let header=document.querySelector('.header');
let data=[
    {
        image:'https://mohameds16.github.io/jfc-consultant/images/About/about-img.webp',
        txt:"Market disruption is an accepted reality for business, as.new competition and technologies drive the pace of change faster than ever before. Our clients want employees who are prepared to lead, differentiate and adapt in a constantly changing world. They want advisers who are curious about the world, and embrace collaboration and candour.",
        head:'WHO WE ARE?',
    },
    {
image:'https://mohameds16.github.io/jfc-consultant/images/About/About-us.webp',
txt:"Our company is established in 2006, Specialized at consultant works for companies and finishing their legal services.We have many important clients as KOREAN EMBASSY IN EGYPT, KOREAN ASSOCIATION IN EGYPT, etc.We have many employees included 5 lawyers and 1 official accountant. Our managers are -Philip Kim -Mohamed Ismail ",
head:'ABOUT COMPANY?',
},

{
    image:'https://mohameds16.github.io/jfc-consultant/images/About/About-uss.webp',
    txt:'You can freely contact us through our social media accounts or our number that is written on this website.',
    head:'HOW CAN I CONTACT YOU?',
}
];
btns.forEach(function(s,idx){
s.addEventListener('click',function(){
    sora.src=data[idx].image;
text.innerHTML=data[idx].txt;
header.innerHTML=data[idx].head;
})
});
