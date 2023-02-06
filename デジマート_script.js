let es = document.querySelectorAll(".itemSearchBlock");
let as = document.querySelectorAll(".ProductBox");


for(let i = 0; i < es.length; i++){
  let e = es[i];
  let genreNode = e.querySelector(".ttl");
  let basscable = ['BJB-1R','WJB-BP','Affinity Series Jazz','Affinity Series Precision','AFFINITY SERIES JAZZ','AFFINITY SERIES PRECISION',"CLASSIC VIBE '60S","Classic Vibe '60s","Deluxe Dimension Bass","deluxe dimension bass",'TRBX304',' JJB6R','JJB7','SR300E','SR500','SSR640','NJB10','Player Jazz Bass','Hybrid Jazz','Hybrid II',"Traditional 70s",'BB434','TRBX174','Aerodyne Jazz','AERODYN JAZZ','Ray34','L-2000',
  'Professional Cable GS-6','8412','BSC8412','#8412','LE501','鶯 -UGUISU-','PROFESSIONAL TONE CABLE','Professional Tone Cable']; //上行はおすすめベース、下行はおすすめケーブル
  let badword = ["セット",'パッチ','Patch','PATCH','cm','ギターケーブル','1m','2m']; //好ましくないワード
  if (!(basscable.some(el => genreNode && genreNode.textContent.includes(el)))){e.style.display = 'none';} else if (badword.some(el => genreNode && genreNode.textContent.includes(el))){e.style.display = 'none';}
}

for(let i = 0; i < as.length; i++){
    let a = as[i];
    let genreNode = a.querySelector(".ttl appEllipsis");
    let basscable = ['BJB-1R','WJB-BP','Affinity Series Jazz','Affinity Series Precision','AFFINITY SERIES JAZZ','AFFINITY SERIES PRECISION',"CLASSIC VIBE '60S","Classic Vibe '60s","Deluxe Dimension Bass","deluxe dimension bass",'TRBX304',' JJB6R','JJB7','SR300E','SR500','SSR640','NJB10','Player Jazz Bass','Hybrid Jazz','Hybrid II',"Traditional 70s",'BB434','TRBX174','Aerodyne Jazz','AERODYN JAZZ','Ray34','L-2000',
    'Professional Cable GS-6','8412','BSC8412','#8412','Providence LE501','鶯 -UGUISU-','PROFESSIONAL TONE CABLE','Professional Tone Cable']; //上行はおすすめベース、下行はおすすめケーブル
    let badword = ["セット",'パッチ','Patch','PATCH','cm','ギターケーブル','1m','2m']; //好ましくないワード
    if (!(basscable.some(el => genreNode && genreNode.textContent.includes(el)))){a.style.display = 'none';} else if (badword.some(el => genreNode && genreNode.textContent.includes(el))){a.style.display = 'none';}
  }
  
