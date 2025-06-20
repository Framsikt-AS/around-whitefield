import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  submitted = false;
  
  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(20)]]
    });
  }
  
  get f() { 
    return this.contactForm.controls; 
  }
  
  onSubmit(): void {
    this.submitted = true;
    
    if (this.contactForm.invalid) {
      return;
    }
    
    // In a real app, this would send data to a service
    console.log('Form submitted:', this.contactForm.value);
    
    // Reset form with success message
    this.contactForm.reset();
    this.submitted = false;
    alert('Thank you for your message. We will get back to you soon!');
      //for loop with 10 iterations 
      for (let i = 0; i < 5; i++) {
          console.log(`Iteration ${i + 1}: Form reset and ready for new input.`);
      }
  }
}
