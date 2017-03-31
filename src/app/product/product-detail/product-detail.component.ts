import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public productForm = this.fb.group({
    id: [''],
    Name: ['', Validators.required],
    Price: ['', Validators.required],
    Description: ['', Validators.required]
  });

  constructor(private productService: ProductService, private router:Router, private route: ActivatedRoute, public fb: FormBuilder) { }

  ngOnInit() {
    this.productService.getById(+this.route.snapshot.params['id']).subscribe(res => {
      this.productForm = this.fb.group({
        id: [res.id],
        Name: [res.Name, Validators.required],
        Price: [res.Price, Validators.required],
        Description: [res.Description, Validators.required]
      });
    });
  }

  update(){
    this.productService.update(this.productForm.value).subscribe(res=>{
      this.router.navigate(['/products']);
    });
  }

}
