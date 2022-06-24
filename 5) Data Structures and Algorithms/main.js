/* [A]    [B]    [C]    [D]    [E]
 [P][C] [A][E] [A][E]  [O][R] [A][Y]
 [P][T] [L][A] [T][L]  [O][E] [T][E]
 [L]    [L][T]    [L]  [R][A] 
 [E]                      [M] 

*/




class Trie{


    constructor(){

        this.length = 0;
        this.head = [];

    }

    add(word){

        let verdict = false;

        if(this.head.length === 0){

            this.head.push(word[0]);
        }

        else{

            for(let i = 0; i < this.head.length; i++){

                if(this.head[i] === word[0]){

                    verdict = true;
                }

            }

            if(verdict){

                console.log('ale');
            }

            else{

                this.head.push(word[0])
            }
        }
        

        return this.head;

    }
}

let Trying = new Trie();

// console.log(Trying.add("sami"));
console.log(Trying.add("hat"));
console.log(Trying.add("jim"));
console.log(Trying.add("grow"));
console.log(Trying.add("love"));
console.log(Trying.add("ant"));


