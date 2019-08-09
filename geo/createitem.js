function createItem(){
var main1 = document.getElementsByTagName("container");
var parser = new DOMParser();
var domString = '<div class="container"><span class="intro">Hello</span> <span id="name"> World!</span></div>';
var html = parser.parseFromString(domString, 'text/html');    
document.getElementsByTagName("container").append(html.body.firstChild);
}