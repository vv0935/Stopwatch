function Stopwatch(){
    let startTime, endTime, duration=0,running;
    this.start= function(){
        if(running){
            throw new Error('stopwatch has already started');
        }
        running=true;
        startTime=new Date();
    }
    this.stop= function(){
        if(!running){
            throw new Error('stopwatch hasnt been already started');
        }
        running=false;
        endTime=new Date();
        const sec=(endTime.getTime()-startTime.getTime())/1000;
        duration+=sec;
    }
    this.reset= function(){
        startTime=null;
        endTime=null;
        running=false;
        duration=0;
    }
    Object.defineProperty(this, 'duration', {
        get: function(){
            return duration;
        }
    }) 
}
const sw= new Stopwatch();
