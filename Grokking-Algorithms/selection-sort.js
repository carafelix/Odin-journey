function Artist(name, playCount){
    this.name = name;
    this.playCount = playCount;
}

const radiohead = new Artist('radiohead',156);
const kishoreKumar = new Artist('kishoreKumar',141);
const theBlackKeys = new Artist('theBlackKeys',35);
const neutralMilkHotel = new Artist('neutralMilkHotel',94);
const beck = new Artist('beck',88);
const theStrokes = new Artist('theStrokes',61);
const wilco = new Artist('wilco',111);


const music = [radiohead, kishoreKumar, theBlackKeys, neutralMilkHotel, beck, theStrokes, wilco];

function sortMostListen(arr){
    arr.reduce((a,b)=>{
        (b.playCount>a) ? true : false
    },0)
}