document.addEventListener('DOMContentLoaded', function() {
  Const form = document.getElementById('contact-form') ;
  if(form) {
  Form.addEventListener('submit', function(event) {
    Event.preventDefault() ;
    Alert('Formulaire soumis avec succès !') ;
  }) ;
} else {
	console.error("Le formulaire de contact n'a pas été trouvé.");
}	
}) ;

