import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { comparePassword } from 'src/app/validations/custom-validator';
import { UserRegister } from '../../models/user.interface';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
	// Incialización del formulario
  public userRegisterForm: FormGroup;
	// variable submitted a false
	public submitted: boolean = false;

	// Inicializamos FormBuilder en el constructor
  constructor(private formBuilder: FormBuilder) {
    // Nuestro formulario - sin campos por defecto
    // Podemos meter valores por defecto en las comillas
    this.userRegisterForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      password: ['', [Validators.required, Validators.maxLength(20)]],
      passwordRepeat: ['', [Validators.required, Validators.maxLength(20)]],
    },
    {
      // Validación custom de password
      validator: comparePassword('password', 'passwordRepeat')
    })
  }

	// El OnInit -> Vacío
	ngOnInit() {/* Empty */}

	//Función accionada al clickar en submit
	public onSubmit(): void {
	    // El usuario ha pulsado en submit->cambia a true submitted
	    this.submitted = true;
			// Si el formulario es valido
	    if (this.userRegisterForm.valid) {
	      // Creamos un Usuario y lo emitimos
	      const user: UserRegister = {
	        name: this.userRegisterForm.get('name')?.value,
	        password: this.userRegisterForm.get('password')?.value,
	        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
	      };
				console.log(user);
	      // Reseteamos todos los campos y el indicador de envío o submitted
	      this.userRegisterForm.reset();
	      this.submitted = false;
	    }
	  }
}
