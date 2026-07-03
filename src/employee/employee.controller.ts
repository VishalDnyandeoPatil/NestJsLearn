import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    getEmployee() {
        // return { id: 1, name: 'John Doe', position: 'Software Engineer' };
        return 'Employee data fetched successfully ';
    }
}
