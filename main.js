let timeout = 2000 //measure timeout
//measure to be stopped at 2 sec but display should last longer till inactivity
let start_time
let current_time
let words
let measure = false
let new_word = true
let speed

window.onkeydown = function(e){
    if(e.target.nodeName.toLowerCase()=='input' ){ // other text fiels to be added
        if(!measure){
            words = 0
            measure = true
            start_time = new Date()
        }
    }
    else{
        measure = false
    }
};

// add an event listener for mouse clicks outside text box to set measure to false

setInterval(function() {
    if (measure && new Date()-current_time>timeout){
        console.log('timeout')
        measure = false
        new_word = true
    }
}, 1000)

// setInterval(function(){
//     console.log(measure)
// },1000)
//Roboto Mono

document.addEventListener('keydown',(e)=>{
    if(measure){
        if(e.key==' ' || e.key=="Enter"){
            new_word = true
        }
        else if(e.key.length==1){//all printable characters are of length 1
            if(new_word){
                words++
                new_word = false
            }
            current_time = new Date()
        }
        speed = 60*(words/((current_time-start_time)/1000))
        console.log(speed)
    }
})


