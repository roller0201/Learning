class FormValidator {
    constructor() {
      this.formFields = [];
  
      this.form = document.getElementById("form");
      
      /*this.addFormField("#username", {
        minlength: 4, maxlength: 20
      });
      this.addFormField("#email", {
        minlength: 4, maxlength: 100
      });
      this.addFormField("#password", {
        minlength: 5, maxlength: 30
      });
      this.addFormField("#password2", {
        minlength: 5, maxlength: 30, matchWithPasswordId: "#password"
      });*/
      this.processform();
      console.log(this.formFields);
  
      this.init();
    }

    processform = () => {
      this.form.querySelectorAll("input").forEach(e =>{
        let minlength = e.getAttribute("minlength");
        if(!minlength) minlength = undefined;
        let maxlength = e.getAttribute("maxlength");
        if(!maxlength) maxlength = undefined;
        let matchWidthPasswordId = e.getAttribute("data-match-with-password-id");
        if(!matchWidthPasswordId) matchWidthPasswordId = undefined;

        this.addFormField(`#${e.id}`, {
          minlength: minlength, maxlength: maxlength,  matchWidthPasswordId: matchWidthPasswordId
        });
      } )
    }
  
    addFormField = (cssSelector, options) => {
      const formField = new FormField(cssSelector, options);
      this.formFields.push(formField);
    }
  
    init() {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
  
        this.validateForm();
      });
    }
  
    validateForm = () => {
      const formResults = this.formFields.map( f => f.validate() );
  
      if(formResults.includes(false)) {
        console.log("Błąd w formularzu");
      } else {
        console.log("Formularz jest ok");
      }
    }
  }