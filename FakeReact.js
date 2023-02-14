/**# `FakeReact`
  `A class to manage HTML tags using Javascript functions.`*/
class FakeReact{
    qs = id => document.querySelector(id);
    BR = () => document.createElement('br');
    HR = () => document.createElement('hr');
    /**# `Creates a new tag.`
    ## Example:
    `const fr = new FakeReact();` 

    `fr.start( fr.tag('h1', 'Hello!', {id:'hello', class:'center'},`
        `[fr.tag('p', 'child tag.')]))`
    @param name `Tag name.`
    @param text `Tag text.`
    @param atributes `Tag atributes.`
    @param childs `Array of tag childs.`
    */
    tag(name, text='', atributes={}, childs=[]){
        let Tag = document.createElement(name);
        if (text) Tag.appendChild(document.createTextNode(text));
        if(atributes) for(const key in atributes) Tag.setAttribute(key,atributes[key]);
        if(childs.length != 0) for(let i=0; i< childs.length; i++) Tag.appendChild(childs[i]);
        return Tag;
    }
    /**## `Writes in the specified tag.`
    @param id `Tag id.`
    @param tags `Array of tags.`*/
    write = async (id, ...tags) => {
        setTimeout(()=>{ 
            let body = this.qs(id);
            for (let i=0; i <tags.length; i++) body.appendChild(tags[i]);
        },1)
    }
    /**## `Writes in the body tag.`
    @param tags `Array of tags.`*/
    start = async (...tags) => {
        setTimeout(()=>{ 
            let body = this.qs('body');
            for (let i=0; i <tags.length; i++) body.appendChild(tags[i]);
        },1)
    }
}