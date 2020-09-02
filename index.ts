const w : number = window.innerWidth 
const h : number = window.innerHeight
const parts : number = 2  
const scGap : number = 0.02 / parts  
const strokeFactor : number = 90
const sizeFactor : number = 4.8 
const delay : number = 90 
const foreColor : string = "#bdbdbd"
const color : Array<string> = ["#F44336", "#3F51B5", "#009688", "#2196F3", "#4CAF50"]
const rot : number = Math.PI / 2  

class ScaleUtil {

    static maxScale(scale : number, i : number, n : number) : number {
        return  Math.max(0, scale - i / n)
    }

    static divideScale(scale : number, i : number, n : number) : number {
        return Math.min(1 / n, ScaleUtil.maxScale(scale, i, n)) * n 
    }

    static sinify(scale : number) : number {
        return Math.sin(scale * Math.PI)
    }
}