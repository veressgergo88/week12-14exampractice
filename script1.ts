function getSiteName(url:string):string{
    let result:string = ""
    let wordFirstCharIndex:number = 0
    let wordSecondPart:string = ""

        let firstSlashIndex = 0
        while(url[firstSlashIndex] !== "/" ){
            firstSlashIndex++
            wordFirstCharIndex = firstSlashIndex + 2 
        }

        let i = wordFirstCharIndex+1
        while(url[i] !== "."){
            wordSecondPart += url[i]
            i++
        }
        
    return result = url[wordFirstCharIndex].toUpperCase() + wordSecondPart
}

let result1: string = getSiteName("https://codecool.com/")
let result2: string = getSiteName("https://twitter.com/")
let result3: string = getSiteName("http://nemzetisport.hu/")

console.log(result1)
console.log(result2)
console.log(result3)