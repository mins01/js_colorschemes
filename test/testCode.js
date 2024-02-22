const testCode = function(Colorschemes,colorschemeSets){
    Colorschemes.debug = false;
    Colorschemes.schemeSets = colorschemeSets;
    let r = null;
    
    
    r = Colorschemes.scheme('x');
    // console.log(r);
    console.assert(r===null, new Error('잘못된 응답').stack);
    
    r = Colorschemes.scheme('brewer.YlGn3');
    // console.log(r);
    console.assert(r.length===3, new Error('잘못된 응답').stack);
    
    r = Colorschemes.scheme('brewer.YlGn3',1);
    // console.log(r);
    console.assert(r.length===1, new Error('잘못된 응답').stack);
    
    r = Colorschemes.scheme('brewer.YlGn3',20);
    // console.log(r);
    console.assert(r.length===20, new Error('잘못된 응답').stack);
    
    console.log('test result: ok')
}
export default testCode;
