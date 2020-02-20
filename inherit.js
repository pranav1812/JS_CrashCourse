// key board shortcut to comment selected block of code: ctrl+K+C and ctrl+K+U to uncomment


//can't use import
// when you import a module, all its code apart from class is also imported
// so it is recommended to write only classes/ method or reusabe stuff
// and not console.log any thing as has been done in classes.js
const ctf=require('./classes');
//import {ctf} from './classes';

class crypto extends ctf{
    constructor(type,duration,domain,level ){
        super(type,duration);
        this.domain=domain;
        this.level=level;
    }
    showDetails(){
        super.showDetails()+console.log(`duration: ${this.duration} \nlevel: ${this.level} `);
    }
    likedIt(){
        return 'yessss'
    }

}



var owaspCTF= new crypto('jeopardy','1 week','cryptography','intermediate');

owaspCTF.showDetails();
console.log(owaspCTF.likedIt());
