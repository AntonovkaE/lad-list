const windImg = 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const stormImg = 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80';
const snowImg = 'https://images.unsplash.com/photo-1422930717940-92ec7c690afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80';
const rainImg = 'https://images.unsplash.com/photo-1620385019253-b051a26048ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
const fogImg = 'https://images.unsplash.com/photo-1486184885347-1464b5f10296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80';
const sunImg = 'https://images.unsplash.com/photo-1511836536898-6d6f1b8f6948?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80';
const cloudsImg = 'https://images.unsplash.com/photo-1536532184021-da5392b55da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
const commonArray = [1859908, 1863540, 1856476, 520555, 580660, 581126, 1508350, 710719, 1260210, 1498894, 2433055, 1336133, 1152432, 1150728, 1274746, 1712520, 1282950];
const showBackground = (code) => {
  return ((code < 234) ? stormImg :
    (code <= 302) ? snowImg :
      (code <= 511) ? rainImg :
        (code <= 610 || (code > 612 && code <= 623)) ? snowImg :
          (code <= 612) ? windImg :
            (code < 751) ? fogImg :
              (code === 800) ? sunImg : cloudsImg);
}


export {
  windImg, stormImg, sunImg, snowImg, rainImg, fogImg, cloudsImg, commonArray, showBackground
};
