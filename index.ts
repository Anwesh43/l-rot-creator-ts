const w : number = window.innerWidth 
const h : number = window.innerHeight
const parts : number = 2  
const scGap : number = 0.02 / parts  
const strokeFactor : number = 90
const sizeFactor : number = 4.8 
const delay : number = 90 
const foreColor : string = "#bdbdbd"
const colors : Array<string> = ["#F44336", "#3F51B5", "#009688", "#2196F3", "#4CAF50"]
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

class DrawingUtil {

    static drawLine(context : CanvasRenderingContext2D, x1 : number, y1 : number, x2 : number, y2 : number) {
        context.beginPath()
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
    }

    static drawLRotCreator(context : CanvasRenderingContext2D, scale : number) {
        const sf : number = ScaleUtil.sinify(scale)
        const sf1 : number = ScaleUtil.divideScale(sf, 0, 2)
        const sf2 : number = ScaleUtil.divideScale(sf, 1, 2)
        const size : number = Math.min(w, h) / sizeFactor 
        context.save()
        context.translate(w / 2, h / 2)
        for (var j = 0; j < 2; j++) {
            context.save()
            context.rotate(Math.PI / 2 * sf2 * j)
            DrawingUtil.drawLine(context, 0, 0, 0, -size * (sf1 + (1 - j) * sf2))
            context.restore()
        }
        context.restore()
    }

    static drawLRCNode(context : CanvasRenderingContext2D, i : number, scale : number) {
        context.lineCap = 'round'
        context.lineWidth = Math.min(w, h) / strokeFactor 
        context.strokeStyle = colors[i]
        DrawingUtil.drawLRotCreator(context, scale)
    
    }
}