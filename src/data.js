export const API_KEY='AIzaSyAi1ZbvmlzEbaUuPG4sfzutOsC-fr4bNew';
export const value_Convertor=(value)=>{
if(value>=1000000){
    return Math.floor(value/1000000)+"M";
}
else if (value>=1000) {
    return Math.floor(value/1000)+"k";
} else {
    return value;
}
}