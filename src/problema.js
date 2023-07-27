function func(p){
    if(isNaN(p)||!Number.isInteger(p))return "Error input no valido";
    
    let mat = new Array(p).fill(0).map(() => new Array(p).fill(0));
    
    const dirx=[0,-1,0,1];
    const diry=[1,0,-1,0];
    
    let k=0;
    let c=1;
    
    let y=0;
    let x=p-1;
    while(c<p*p){
        let nx=x+dirx[k];
        let ny=y+diry[k];
        mat[x][y]=c;
        
        if(nx<p&&ny<p&&nx>=0&&ny>=0){
            if(mat[nx][ny]===0){
                c++;
                x=nx;
                y=ny;
            }else{
                k=(k+1)%4;                
            }
        }else{
            k=(k+1)%4;
        }
    }
    mat[Math.floor(p/2)][Math.floor(p/2)]=p*p;
    return mat;
    
}

export default func;
