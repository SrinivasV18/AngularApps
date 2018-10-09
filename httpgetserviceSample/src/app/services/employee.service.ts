import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {
    public employeeRecord = [
        { name: 'Surya', city: 'Hyd', age: '9' },
        { name: 'Dhoni', city: 'Sec', age: '39' },
        { name: 'Kohli', city: 'Delhi', age: '35' },
        { name: 'Sachin', city: 'Mumbai', age: '41' },
    ];
}