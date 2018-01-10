window.sr = ScrollReveal();
sr.reveal('.navbar',{
  duration:2000,
  origin:'bottom'
});
sr.reveal('.showcase-img-left',{
  duration:2500,
  origin:'top',
  distance: '300px'
});
sr.reveal('#product-block1',{
  duration:2500,
  origin:'left',
  distance: '100px',
  viewFactor: 0.3
});
sr.reveal('#product-block2',{
  duration:2500,
  origin:'right',
  distance: '100px',
  viewFactor: 0.3
});

sr.reveal('.content',{
  duration:2000,
  origin:'bottom',
  viewFactor: 0.3
});
