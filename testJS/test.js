/*1. Напишите функцију која конвертује низ вредности из миља у километре користећи метод мапе. На крају, додајте километре у нову променљиву под називом "тоталДистанцеИнКилометерс" и вратите ову променљиву.
 
константне миље = [15,20,1,60,45,120]
 
2. Из низа бројева изаберите парне двоструке бројеве и израчунајте збир користећи методе филтера низа, мапирања и редукције.
 
нека бројеви = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
3. Креирајте нови низ чији су елементи у великим словима речи присутних у оригиналном низу.
 
лет стрингс = ["осветници", "капетан Америка", "гвоздени човек", "црни пантер"];*/



//prvi zadtak 
const milje = [15,20,1,60,45,120];

const convertMiles =(miles)=>{
    const con = miles.map((mil) =>{
        return mil * 1.6
    });

    const totalDistanceInKilometers = con.reduce((mil, con) =>{
        
        return mil+con});

    return totalDistanceInKilometers;
}
console.log( 'prvi zadatak , resenje:', convertMiles(milje));



//drugi zadatak
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const makeParni =(brojevi) =>{
    const parni = brojevi.filter((broj) =>{
        
        return broj % 2 ===0});

    const kvadrat = parni.map((broj) => {
        return broj * broj
    });

    const zbir = kvadrat.reduce((prevV, curV)=>prevV+curV);

    return zbir;


}
console.log('drugi zadtak, resenje:', makeParni(numbers));



//treci zadtak 
const reci = [ "осветници", "капетан Америка", "гвоздени човек", "црни пантер"]

const napraviVelika =(words)=>{
    const velika = words.map((word)=> word.toUpperCase());
    return velika;
}
console.log('treci zadtak, resenje:', napraviVelika(reci));