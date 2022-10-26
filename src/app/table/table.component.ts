import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  form: any;

  IdEdit: number = 0;
  IdAdd: number = 0;
  IdRemove: number = 0;
  lastId: number = 5;

  data: any[] = [
    {
      id: 1,
      name: 'iphone 14 pro max',
      category: 'smart phone',
      origin: 'United States',
    },
    {
      id: 2,
      name: 'oppo reno 7',
      category: 'smart phone',
      origin: 'Korean',
    },
    {
      id: 3,
      name: 'samsung j7 pro',
      category: 'smart phone',
      origin: 'Korean',
    },
    {
      id: 4,
      name: 'ipad air 2',
      category: 'tablet',
      origin: 'United States',
    },
    {
      id: 5,
      name: 'xiaomi redmi note 7',
      category: 'smart phone',
      origin: 'China',
    },
  ];

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      origin: new FormControl('', [Validators.required]),
    });
  }

  get name() {
    return this.form.get('name');
  }

  get category() {
    return this.form.get('category');
  }

  get origin() {
    return this.form.get('origin');
  }

  onEdit(id: number) {
    const index = this.data.findIndex((p) => p.id == id);
    const currentData = { ...this.data[index] };
    this.IdEdit = index;
    this.name.setValue(currentData.name);
    this.category.setValue(currentData.category);
    this.origin.setValue(currentData.origin);
  }

  onAdd() {
    this.name.setValue('');
    this.category.setValue('');
    this.origin.setValue('');

    this.name.touched = false;
    this.category.touched = false;
    this.origin.touched = false;
  }

  onRemove(id: number) {
    const index = this.data.findIndex((p) => p.id == id);
    this.IdRemove = index;
  }

  handleAdd() {
    const newProduct = {
      id: ++this.lastId,
      name: this.name.value,
      category: this.category.value,
      origin: this.origin.value,
    };

    this.data.push(newProduct);
  }

  handleEdit() {
    this.data[this.IdEdit].name = this.name.value;
    this.data[this.IdEdit].category = this.category.value;
    this.data[this.IdEdit].origin = this.origin.value;
  }

  handleRemove() {
    this.data = [
      ...this.data.slice(0, this.IdRemove),
      ...this.data.slice(this.IdRemove + 1),
    ];
  }

  columns: any[] = [
    {
      path: 'id',
      title: 'ID',
    },
    {
      path: 'name',
      title: 'Product Name',
    },
    {
      path: 'category',
      title: 'Category',
    },
    {
      path: 'origin',
      title: 'Origin',
    },
    {
      key: 'edit',
      content: 'edit',
    },
    {
      key: 'remove',
      content: 'remove',
    },
  ];

  onSubmitEdit(fdata: any) {
    console.log(fdata);
  }
}
