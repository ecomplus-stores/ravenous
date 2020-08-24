// Add your custom JavaScript for storefront pages here.
$( document ).ready(function() {
  var confeccao = $('.product__production').html().replace('produção', 'confecção');
  $('.product__production').html(confeccao);
});
