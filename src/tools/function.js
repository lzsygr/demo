export const scrollToTop = () => {
  const currentPosition = document.documentElement.scrollTop;
  if (currentPosition > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, currentPosition - currentPosition / 10);
  }
}

export const scrollToPoint = (id,val) => {
  const target = document.querySelector(id);
  if(target){
    // 滚动到锚点位置
    window.scrollTo({
      top: target.offsetTop - val,
      behavior: 'smooth' // 平滑滚动
    });
  }
}

export const goWord = (nowDictionary,url,wd) => {
  let path = url;
  if(nowDictionary === '牛津'){
    path = url + `${wd}?q=${wd}`;
  }
  else if(nowDictionary === 'wordhippo近义词'){
    path = url + `${wd}.html`;
  }
  else{
    path = url + wd;
  }
  window.open(path, '_blank');
}



