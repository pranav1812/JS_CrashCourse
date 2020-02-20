// key board shortcut to comment selected block of code: ctrl+K+C and ctrl+K+U to uncomment


class ctf{
    constructor(type, duration){
        this.type=type;
        this.duration=duration;
    }
    showDetails(){
        console.log(`name: ${this.name ||'picoCTF'} \ntype: ${this.type ||'jeopardy'} `);
    }
}
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

var I_see_U= new ctf('attack-defence','1 week');
//I_see_U.showDetails();

var owaspCTF= new crypto('jeopardy','1 week','cryptography','intermediate');

owaspCTF.showDetails();
console.log(owaspCTF.likedIt());
module.exports =ctf
//export {ctf};