import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent {
  form: FormGroup;
  @Input() isEdit: boolean = true;
  @Input() error: any;
  @Input() data;
  @Output() sendSubmit: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(40)]],
      lastName: ['', Validators.required],
      age: 0,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.sendSubmit.emit(this.form.value);
    }
  }
}
