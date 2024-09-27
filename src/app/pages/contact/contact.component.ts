import { CommonModule, NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm!: FormGroup;
  isSubmitted = false;
  email: string = "Abdelrahmanmagdi527@gmail.com";

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = this.fb.group({
      name: [null, Validators.required],
      to_name:"Abdelrahman Magdi",
      email: [null, [Validators.required, Validators.email]],
      message: [null, Validators.required]
    });
  }
  get controls() {
    return this.contactForm.controls;
  }

  submitForm(e: Event) {
    e.preventDefault(); // Prevent default form submission behavior
    this.isSubmitted = true;
    if (this.contactForm.valid) {
      emailjs.send("service_w6mkvz3", "template_28cqcuo",{
          from_name: this.contactForm.value.name,
          to_name: this.contactForm.value.to_name,
          from_email: this.contactForm.value.email,
          message: this.contactForm.value.message
      },"EfjNRm3Dbd-FRdb6C")
        .then((result: EmailJSResponseStatus) => {
          this.isSubmitted = false;
          Swal.fire({
            customClass: {
              confirmButton: 'btn btn-success',
            },
            buttonsStyling: false,
            icon: 'success',
            title: `Thank You ${this.contactForm.value.name}!`,
            text: 'I received your message successfully and I will contact you soon.',
            width: '37.5rem',
            padding: '3em',
            color: 'var(--orange)',
            background: 'var(--light-color-2)',
            backdrop: `
            rgba(0,0,0,0.5)
            left top
            no-repeat
          `
          });
          this.contactForm.reset();
        }, (error) => {
          console.log(error);
          Swal.fire({
            customClass: {
              confirmButton: 'btn btn-danger',
            },
            buttonsStyling: false,
            icon: 'error',
            title: 'Oops! Something went wrong.',
            text: 'Your message could not be sent. Please try again later.',
            width: '37.5rem',
            padding: '3em',
            color: 'var(--bs-red)',
            background: 'var(--light-color-2)',
            backdrop: `
            rgba(0,0,0,0.5)
            left top
            no-repeat
          `
          });
        });
    } else {
      Swal.fire({
        customClass: {
          confirmButton: 'btn btn-danger',
        },
        buttonsStyling: false,
        icon: 'error',
        title: 'Please make sure to fill the form correctly.',
        width: '37.5rem',
        padding: '3em',
        color: 'var(--bs-red)',
        background: 'var(--light-color-2)',
        backdrop: `
          rgba(0,0,0,0.5)
          left top
          no-repeat
        `
      });
    }
  }

  // emailjs.send("service_w6mkvz3","template_28cqcuo",{
  //   from_name: "test",
  //   to_name: "abdelrahman ",
  //   from_email: "abdo@gmail.com",
  //   message: "HI",
  //   });
}
