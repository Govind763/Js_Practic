// text Node - node that having the text
// document.baseURI - for base url of webpage
//doucment.links - all links, basically a HTMLCollection will be there, it is different from javascript array
// When we use .setAttribute('attributeName', value) --> it will override the value , if there exist priviously

// 1. textContent- it will give the text value , dosent matter it is hidden from dom by some css
// 2. innerText - give only the text values
// 3. innerHtML- give the html tags with text value, basiclly element 

// Selectors 
// 1. document.querySelector
// 2. document.querySelectorAll - NodeList will return {check prototype there will map is not MediaElementAudioSourceNode, foreach is mentioned}
// 3. document.getEelementByClassName - HTMLCOllection it is different from NodeList here ittreation is not possible soe we will convet into an array --> Array.from(tempClassList)

//preventDefualt behaviour --> e.defaultPrevented()  --> e = object of event
// Propogations in event 
// 1. Bubbling ---> inside to outside 
// document.getElementById('idName').addEventListener('click',function(e){
//     e.defaultPrevented();
//     }, false )
// 2. Capturing ---> outside to inside
// document.getElementById('idName').addEventListener('click',function(e){
//     e.defaultPrevented();
//     }, true )
